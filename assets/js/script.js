// DOM elements
const resultEl = document.getElementById("result")
const lengthEl = document.getElementById("length")
const uppercaseEl = document.getElementById("uppercase")
const lowercaseEl = document.getElementById("lowercase")
const numbersEl = document.getElementById("numbers")
const symbolsEl = document.getElementById("symbols")
const generateEl = document.getElementById("generate") 
const clipboardEl = document.getElementById("clipboard")


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;


    resultEl.textContent = generatePassword(length, hasUpper, hasLower , hasNumber, hasSymbol);
})


// Copy pass to clipboard

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.textContent;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard')
})

// Generate Pass function

function generatePassword(length, upper, lower, number, symbol) {
    let generatedPassword = '';

    const typesCount = upper + lower + number + symbol;
    console.log(typesCount)

    const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter
        (
            item => Object.values(item)[0]
        );
        console.log(typesArr)

    if(typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];

        generatedPassword += randomFunc[funcName]();

        })
    }

    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}
    
    
 

// Generator Functions -- https://theasciicode.com.ar/ascii-printable-characters/dollar-sign-ascii-code-36.html

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

console.log(getRandomLower())

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

console.log(getRandomUpper())


function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

console.log(getRandomNumber())


function getRandomSymbol() {
    const symbols = "!@#$%^&*()-+=-\|[]}{:;'/?.>,<"
    return symbols[(Math.floor(Math.random() * symbols.length))]
}
console.log(getRandomSymbol())



