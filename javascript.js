// Store initial values to reset later
let initialBackgroundColor = document.body.style.backgroundColor;
let initialText = document.getElementById('textElement').textContent;
let initialFontSize = window.getComputedStyle(document.getElementById('textElement')).fontSize;

// Button 1: Change background color
document.getElementById('button1').addEventListener('click', function() {
    document.body.style.backgroundColor = '#FFD700'; // Change to gold color
});

// Button 2: Show alert
document.getElementById('button2').addEventListener('click', function() {
    alert('This is a custom message!');
});

// Button 3: Hide element
document.getElementById('button3').addEventListener('click', function() {
    document.getElementById('hiddenElement').style.display = 'none';
});

// Button 4: Show element
document.getElementById('button4').addEventListener('click', function() {
    document.getElementById('hiddenElement').style.display = 'block';
});

// Button 5: Log to console
document.getElementById('button5').addEventListener('click', function() {
    console.log('Button 5 was clicked!');
});

// Button 6: Change text content
document.getElementById('button6').addEventListener('click', function() {
    document.getElementById('textElement').textContent = 'The text has been changed!';
});

// Button 7: Increase font size
document.getElementById('button7').addEventListener('click', function() {
    let element = document.getElementById('textElement');
    let currentSize = parseFloat(window.getComputedStyle(element).fontSize);
    element.style.fontSize = (currentSize + 2) + 'px';
});

// Button 8: Decrease font size
document.getElementById('button8').addEventListener('click', function() {
    let element = document.getElementById('textElement');
    let currentSize = parseFloat(window.getComputedStyle(element).fontSize);
    element.style.fontSize = (currentSize - 2) + 'px';
});

// Button 9: Toggle visibility
document.getElementById('button9').addEventListener('click', function() {
    let element = document.getElementById('hiddenElement');
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
});

// Button 10: Reset page
document.getElementById('button10').addEventListener('click', function() {
    document.body.style.backgroundColor = initialBackgroundColor;
    document.getElementById('textElement').textContent = initialText;
    document.getElementById('textElement').style.fontSize = initialFontSize;
    document.getElementById('hiddenElement').style.display = 'none';
});

let isBlinking = false;
let intervalId;

// Function to toggle the background color
function toggleBackgroundColor() {
    if (document.body.style.backgroundColor === 'red') {
        document.body.style.backgroundColor = 'blue';
    } else {
        document.body.style.backgroundColor = 'red';
    }
}

// Event listener for the button
document.getElementById('blinkButton').addEventListener('click', function() {
    if (!isBlinking) {
        intervalId = setInterval(toggleBackgroundColor, 500); // Change color every 500ms
        document.getElementById('blinkButton').textContent = 'Stop Blinking Background';
        isBlinking = true;
    } else {
        clearInterval(intervalId);
        document.body.style.backgroundColor = ''; // Reset background color
        document.getElementById('blinkButton').textContent = 'Start Blinking Background';
        isBlinking = false;
    }
});
