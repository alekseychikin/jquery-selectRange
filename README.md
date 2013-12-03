jquery-selectRange
==================

You can use this plugin to select some ranges in inputs and textareas.

Select range from 3rd to 10th char in `input#select-field`
```
$('#text-field').selectRange({start: 3, end: 10});
```
Put cursor to 5th position.
```
$('#text-field').selectRange(5);
```
Get data about `input#text-field`. It have values: start, end and text.
```
var range = $('#text-field').selectRange();
alert('start: ' + range.start + '; end: ' + range.end + '; text: "' + range.text + '"');
```

It may be input or textarea. See `example/example.js` for details.