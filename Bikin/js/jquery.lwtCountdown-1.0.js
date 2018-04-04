(function ($) {

	/** Arranaca el proceso. Calcula segundos hasta el mundial para llamar a doCountDown
	 */
	$.fn.countDown = function (options) {
		config = {};

		$.extend(config, options);

		var hoy = new Date();
		var fecha = new Date('hu Jun 14 2018 12:00:00 GMT-0300 (-03)');
		var diferencia = (fecha.getTime() - hoy.getTime()) / 1000;
		segundos = Math.floor(diferencia);
		diffSecs = segundos;

		if (config.onComplete) {
			$.data($(this)[0], 'callback', config.onComplete);
		}
		if (config.omitWeeks) {
			$.data($(this)[0], 'omitWeeks', config.omitWeeks);
		}

		$('#' + $(this).attr('id') + ' .digit').html('<div class="top"></div><div class="bottom"></div>');
		$(this).doCountDown($(this).attr('id'), diffSecs, 500);

		return this;

	};

	$.fn.stopCountDown = function () {
		clearTimeout($.data(this[0], 'timer'));
	};

	$.fn.startCountDown = function () {
		this.doCountDown($(this).attr('id'), $.data(this[0], 'diffSecs'), 500);
	};


	/** Calcula cada variable que necesita el contador (dias, horas, min, seg)
	 *  llama a dashChangeTo pasando estos valores.
	 */
	$.fn.doCountDown = function (id, diffSecs, duration) {
		var hoy = new Date();
		var fecha = new Date('hu Jun 14 2018 12:00:00 GMT-0300 (-03)');

        var dias = 0;
        var horas = 0;
        var minutos = 0;
        var segundos = 0;

        if (fecha > hoy) {
            var diferencia = (fecha.getTime() - hoy.getTime()) / 1000;
            dias = Math.floor(diferencia / 86400);
            diferencia = diferencia - (86400 * dias);
            horas = Math.floor(diferencia / 3600);
            diferencia = diferencia - (3600 * horas);
            minutos = Math.floor(diferencia / 60);
            diferencia = diferencia - (60 * minutos);
			segundos = Math.floor(diferencia);
		}
		
		
		$this = $('#' + id);
		if (diffSecs <= 0) {
			diffSecs = 0;
			if ($.data($this[0], 'timer')) {
				clearTimeout($.data($this[0], 'timer'));
			}
		}


		$this.dashChangeTo(id, 'seconds_dash', segundos, duration ? duration : 800);
		$this.dashChangeTo(id, 'minutes_dash', minutos, duration ? duration : 1200);
		$this.dashChangeTo(id, 'hours_dash', horas, duration ? duration : 1200);
		$this.dashChangeTo(id, 'days_dash', dias, duration ? duration : 1200);

		$.data($this[0], 'diffSecs', diffSecs);
		if (diffSecs > 0) {
			e = $this;
			t = setTimeout(function () { e.doCountDown(id, diffSecs - 1) }, 1000);
			$.data(e[0], 'timer', t);
		}
		else if (cb = $.data($this[0], 'callback')) {
			$.data($this[0], 'callback')();
		}
	};

	/** Realiza loop donde en cada vuelta determina que digito ira en cada posicion.
	 *  Llama a digitChangeTo en cada vuelta. 
	 */
	$.fn.dashChangeTo = function (id, dash, n, duration) {

		$this = $('#' + id);

		for (var i = ($this.find('.' + dash + ' .digit').length - 1); i >= 0; i--) {
			var d = n % 10;
			n = (n - d) / 10;
			$this.digitChangeTo('#' + $this.attr('id') + ' .' + dash + ' .digit:eq(' + i + ')', d, duration);
		}
	};

	/** Cambia el html con nuevo digito que viene por parametro.
	 */
	$.fn.digitChangeTo = function (digit, n, duration) {
		if (!duration) {
			duration = 800;
		}
		if ($(digit + ' div.top').html() != n + '') {

			$(digit + ' div.top').css({ 'display': 'none' });
			$(digit + ' div.top').html((n ? n : '0')).slideDown(duration);

			$(digit + ' div.bottom').animate({ 'height': '' }, duration, function () {
				$(digit + ' div.bottom').html($(digit + ' div.top').html());
				$(digit + ' div.bottom').css({ 'display': 'block', 'height': '' });
				$(digit + ' div.top').hide().slideUp(10);


			});
		}
	};

})(jQuery);