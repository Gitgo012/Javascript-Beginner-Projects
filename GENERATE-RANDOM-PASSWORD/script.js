let container = document.querySelector(".container2");
let btn = document.querySelector(".generatePassword");
let copyBtn=document.querySelector(".copyBtn");

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePassword(length) {
    let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_";
    let result = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * character.length);
        result += character[randomIndex];
    }

    return result;
}

btn.addEventListener('click', function() {
    let password = document.querySelector(".passwordText");

    if (password) {
        password.innerHTML = generatePassword(generateRandomNumber(10,12));
    } else {
        let data = document.createElement("h4");
        data.classList.add("passwordText");
        data.innerHTML = generatePassword(generateRandomNumber(10,12));
        container.appendChild(data);
    }
});

copyBtn.addEventListener('click', function copyBtn(){
    let password = document.querySelector(".passwordText");
    if (password) {
        let passwordText = password.innerText;

        navigator.clipboard.writeText(passwordText).then(() => {
            console.log('Password copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }
})
