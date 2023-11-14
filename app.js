let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

// Создаем массив кнопок
let buttons = [];

for (let i = 1; i <= 12; i++) {
    buttons.push(document.getElementById(`btn${i}`));
}

// Добавляем слушатель события на каждую кнопку
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.setText(`Вы выбрали товар ${i + 1}!`);
            item = String(i + 1);
            tg.MainButton.show();
        }
    });
}

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

let usercard = document.getElementById("usercard");
let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;
usercard.appendChild(p);
