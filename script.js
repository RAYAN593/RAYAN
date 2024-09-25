// Append the value to the screen
function appendToScreen(value) {
    document.getElementById('screen').value += value;
}

// Clear the screen
function clearScreen() {
    document.getElementById('screen').value = '';
}

// Delete the last character
function deleteLast() {
    var screenValue = document.getElementById('screen').value;
    document.getElementById('screen').value = screenValue.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        var result = eval(document.getElementById('screen').value);
        document.getElementById('screen').value = result;
    } catch (error) {
        alert('Invalid Expression');
    }
}
