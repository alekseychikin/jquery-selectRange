$(function ()
{
	$('#select-text').on('click', function ()
	{
		$('#text-field').selectRange({start: 3, end: 10});
	});
	$('#put-text').on('click', function ()
	{
		$('#text-field').selectRange(5);
	});
	$('#get-text').on('click', function ()
	{
		var range = $('#text-field').selectRange();
		alert('start: ' + range.start + '; end: ' + range.end + '; text: "' + range.text + '"');
	});


	$('#select-text2').on('click', function ()
	{
		$('#text-field2').selectRange({start: 3, end: 10});
	});
	$('#put-text2').on('click', function ()
	{
		$('#text-field2').selectRange(5);
	});
	$('#get-text2').on('click', function ()
	{
		var range = $('#text-field2').selectRange();
		alert('start: ' + range.start + '; end: ' + range.end + '; text: "' + range.text + '"');
	});
});