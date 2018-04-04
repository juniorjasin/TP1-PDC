/*!
 * jQuery Countdown plugin v1.0
 * http://www.littlewebthings.com/projects/countdown/
 *
 * Copyright 2010, Vassilis Dourdounis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function ($) {

	// 1ro
	$.fn.countDown = function (options) {
		config = {};

		$.extend(config, options);

		diffSecs = this.setCountDown(config);

		/* Me parece que esta al pedo todo esto comentado */

		// console.log("diffSecs:" + diffSecs);

		// var date1 = new Date();
		// var date2 = new Date(date1 + 30);
		// var timeDiff = Math.abs(date2.getTime() - date1.getTime());

		// console.log("timeDiff:" + timeDiff);

		diffSecs = 7000000;

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

	// 2do
	$.fn.setCountDown = function (options) {
		var targetTime = new Date();

		if (options.targetDate) {
			targetTime = new Date(options.targetDate.month + '/' + options.targetDate.day + '/' + options.targetDate.year + ' ' + options.targetDate.hour + ':' + options.targetDate.min + ':' + options.targetDate.sec + (options.targetDate.utc ? ' UTC' : ''));
		}
		else if (options.targetOffset) {
			targetTime.setFullYear(options.targetOffset.year + targetTime.getFullYear());
			targetTime.setMonth(options.targetOffset.month + targetTime.getMonth());
			targetTime.setDate(options.targetOffset.day + targetTime.getDate());
			targetTime.setHours(options.targetOffset.hour + targetTime.getHours());
			targetTime.setMinutes(options.targetOffset.min + targetTime.getMinutes());
			targetTime.setSeconds(options.targetOffset.sec + targetTime.getSeconds());
		}

		var nowTime = new Date();

		diffSecs = Math.floor((targetTime.valueOf() - nowTime.valueOf()) / 1000);

		$.data(this[0], 'diffSecs', diffSecs);

		return diffSecs;
	};

	// 3ro
	$.fn.doCountDown = function (id, diffSecs, duration) {
		var hoy = new Date();
		var fecha = new Date('hu Jun 14 2018 12:00:00 GMT-0300 (-03)');
		// console.log("hoy:" + hoy);
		// console.log("fecha:" + fecha);

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
			
			// console.log("dias:" + dias);
			// console.log("horas:" + horas);
			// console.log("minutos:" + minutos);
			// console.log("segundos:" + segundos);
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

	// 4to intermitente con 5to
	$.fn.dashChangeTo = function (id, dash, n, duration) {
		// console.log("dashChangeTo");
		// console.log("id:" + id);
		// console.log("dash:" + dash);
		// console.log("n:" + n);
		// console.log("duration:" + duration);


		$this = $('#' + id);

		for (var i = ($this.find('.' + dash + ' .digit').length - 1); i >= 0; i--) {
			var d = n % 10;
			n = (n - d) / 10;
			$this.digitChangeTo('#' + $this.attr('id') + ' .' + dash + ' .digit:eq(' + i + ')', d, duration);
		}
	};

	// 5to intermitente con 4to
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


