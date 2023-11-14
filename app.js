let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

// Добавлены обработчики для новых кнопок
for (let i = 1; i <= 12; i++) {
    let btn = document.getElementById(`btn${i}`);
    
    btn.addEventListener("click", function(){
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        }
        else {
            tg.MainButton.setText(`Вы выбрали товар ${i}!`);
            item = `${i}`;
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
