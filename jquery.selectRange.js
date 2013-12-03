/*
 * jQuery selectRange plugin v1.0
 * https://github.com/makingoff/jquery-selectRange
 *
 * Copyright (c) 2013 makingoff <mail@makingoff.name>
 * Licensed under the MIT license.
 */


(function ($)
{
	$.fn.selectRange = function (range)
	{
		var that = $(this).get(0),
				isie = '\v' == 'v',
				_start,
				_end,
				_text,
				rg,
				stored_range;
		if (range !== undefined) { // set
			if (typeof range == 'number') { // set cursor at position
				range = {start: range, end: range};
			}
			if (!isie) {
				that.selectionStart = range.start;
				that.selectionEnd = range.end;
				that.focus();
			}
			else {
				rg = that.createTextRange();
				rg.collapse(true);
				rg.moveStart('character', range.start);
				rg.moveEnd('character', range.end - range.start);
				rg.select();
			}
		}
		else { // get
			if (!isie) {
				_start = that.selectionStart;
				_end = that.selectionEnd;
				_text = that.value.substring(_start, _end);
			}
			else {
				rg = document.selection.createRange();
				stored_range = rg.duplicate();
				stored_range.moveToElementText(that);
				stored_range.setEndPoint('EndToEnd', rg);
				_start = stored_range.text.length - rg.text.length;
				_end = _start + rg.text.length;
				_text = rg.text;
			}
			return {start: _start, end: _end, text: _text};
		}
		return false;
	}
})(jQuery);