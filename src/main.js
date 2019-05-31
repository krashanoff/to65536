const base = require('base65536');
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const txtarea = document.querySelector('#txt');
const basearea = document.querySelector('#six');

var text;

// Fired on change of text area.
toSix = function() {
    // Get contents of the text area.
    text = txtarea.value;

    // Change variable to encoded input, then set value of base area to result.
    text = base.encode(encoder.encode(text));
    basearea.value = text;
}

// Fired on change of base65536 area.
fromSix = function() {
    // Get contents of the base65536 area.
    text = basearea.value;

    // Try to change text variable to decoded input, returning an error message if it is not valid.
    try {
        text = decoder.decode(base.decode(text));
    } catch (error) {
        text = 'Not proper base65536';
    } finally {
        txtarea.value = text;
    }
}

// Add event listeners.
txtarea.addEventListener('input', toSix);
basearea.addEventListener('input', fromSix);