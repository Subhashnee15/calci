let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of button) {
    Item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('button text is', buttonText);
        if (buttonText == '*') {
            buttonText = '*';
            screenValue == buttonText;
            screen.value = screenValue
        }
        else if (buttonText == 'C') {
            screenValue = '';
            screen.value = '';
        }
    
        else if (buttonText == '=') {
        screen.value = eval(screenValue);
    }
       else {
        screenValue = buttonText;
        screen.value = screenValue;

    }
});
};