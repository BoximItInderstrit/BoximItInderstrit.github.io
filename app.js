let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");

btn1.addEventListener("click", function () {
    updateButton("Sdelat Tatu 1!", "1");
});

btn2.addEventListener("click", function () {
    updateButton("Sdelat Tatu 2!", "2");
});

btn3.addEventListener("click", function () {
    updateButton("Sdelat Tatu 3!", "3");
});

btn4.addEventListener("click", function () {
    updateButton("Sdelat Tatu 4!", "4");
});

btn5.addEventListener("click", function () {
    updateButton("Sdelat Tatu 5!", "5");
});

btn6.addEventListener("click", function () {
    updateButton("Sdelat Tatu 6!", "6");
});

btn7.addEventListener("click", function () {
    updateButton("Sdelat Tatu 7!", "7");
});

btn8.addEventListener("click", function () {
    updateButton("Sdelat Tatu 8!", "8");
});

btn9.addEventListener("click", function () {
    updateButton("Sdelat Tatu 9!", "9");
});

btn10.addEventListener("click", function () {
    updateButton("Sdelat Tatu 10!", "10");
});

function updateButton(text, itemId) {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText(text);
        item = itemId;
        tg.MainButton.show();
    }
}

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
