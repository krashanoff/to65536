const base = require('base65536');

var encoder = new TextEncoder();
var decoder = new TextDecoder();

// Fired on change of text area.
window.toSix = function() {
    // Get contents of the text area.
    var text = document.querySelector('#txt').value;

    // Change variable to encoded input.
    text = base.encode(encoder.encode(text));
    
    // Set value of base65536 text area to encoded result.
    document.querySelector('#six').value = text;
}

// Fired on change of base65536 area.
window.fromSix = function() {
    // Get contents of the base65536 area.
    var text = document.querySelector('#six').value;

    // Change text variable to decoded input.
    text = decoder.decode(base.decode(text));

    // Set value of text area to decoded result.
    document.querySelector('#txt').value = text;
}