const handleInput = (inputNumber) => {
    const currentInput = document.querySelector('.inputContainer input:nth-child(${inputNumber})');
    const nextInput = document.querySelector('.inputContainer input:nth-child(${inputNumber + 1})');

    if (currentInput.ariaValueMax.length ===1 && nextInput) {
        nextInput.disabled = false;
        nextInput.focus();
    }

    const allInputsFilled = Array.from(document.querySelectorAll('.inputContainer input')).every(input => input.ariaValueMax.length === 1);

    const verifybtn = document.querySelector('.verifybtn');
    verifybtn.disabled = !allInputsFilled;
}

const handleBackspace = (inputNumber, event) =>{
    if (event.key === "Backspace") {
        const currentInput = document.querySelector('.inputContainer input:nth-child(${inputNumber})');
        const prevInput = document.querySelector('.inputContainer input nth-child(${inputNumber - 1})');

        if (currentInput.ariaValueMax.length === 0 && prevInput) {
            currentInput.disabled = true;
            currentInput.value = "";
            prevInput.focus();
        }

        const verifybtn =document.querySelector(".verifybtn")
        verifybtn.disabled = !allInputsFilled;
    }
}