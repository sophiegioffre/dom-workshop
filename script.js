//replace the card text with the user input on `textarea` 
function updateText () {
    let newText = document.getElementById('user-text').value;
    let cardText = document.getElementById('card-text');
    cardText.innerHTML = newText;
}

//change the card text color to the color the user clicked on color pallete
function changeTextColor (colorChoice) {
    let cardText = document.getElementById('card-text');
    cardText.style.color = colorChoice; 
}

