class KebabGame {
    constructor() {
        this.hp = 100;
        this.wood = 0;
        this.wheat = 0;
        this.tomatoes = 0;
        this.lettuce = 0;
        this.sheep = 0;
        this.stanowisko = false;
        this.sleeping = false;
    }

    digWood() {
        if(this.hp >=3 && this.wood <30) {
            this.hp -=9;
            if (this.hp <= 0) {
                alert("Zmarłeś! Koniec gry.");
                location.href = "main.html"; // Zamknięcie okna gry
                return;
            }
            this.wood++;
            this.updateUI();
            if(this.wood ===30) {
                this.stanowisko = true;
                alert("Stanowisko wybudowane!");
            }
            if(this.hp ===0) alert("Idź spać aby odnowić życie.");
            if(this.sleeping){
                this.sleeping = false;
            }
        }
    }

    collectWheat() {
        if(this.stanowisko && this.hp >=5 && this.wheat <20) {
            this.hp -=8;
            if (this.hp <= 0) {
                alert("Zmarłeś! Koniec gry.");
                location.href = "main.html"; // Zamknięcie okna gry
                return;
            }
            this.wheat++;
            this.updateUI();
            if(this.wheat ===20) alert("Zebrałeś wystarczającą ilość pszenicy!");
            if(this.hp ===0) alert("Idź spać aby odnowić życie.");
        }
        else if(!this.stanowisko){
            alert("Nie masz wybudowanego stanowiska!");
        }
    }

    collectTomatoes() {
        if(this.stanowisko && this.hp >=2 && this.tomatoes <8) {
            this.hp -=13;
            if (this.hp <= 0) {
                alert("Zmarłeś! Koniec gry.");
                location.href = "main.html"; // Zamknięcie okna gry
                return;
            }
            this.tomatoes++;
            this.updateUI();
            if(this.tomatoes ===8) {
                alert("Zebrałeś wystarczającą ilość pomidorów!");}

            if(this.hp ===0) alert("Idź spać aby odnowić życie.");
        }
        else if(!this.stanowisko){
            alert("Nie masz wybudowanego stanowiska!");
        }
    }

    collectLettuce() {
        if(this.stanowisko && this.hp >=10 && this.lettuce <3) {
            this.hp -=20;
            if (this.hp <= 0) {
                alert("Zmarłeś! Koniec gry.");
                location.href = "main.html"; // Zamknięcie okna gry
                return;
            }
            this.lettuce++;
            this.updateUI();
            if(this.lettuce ===3) alert("Zebrałeś wystarczającą ilość sałaty!");
            if(this.hp ===0) alert("Idź spać aby odnowić życie.");
        }
        else if(!this.stanowisko){
            alert("Nie masz wybudowanego stanowiska!");
        }
    }

    killSheep() {
        if(this.stanowisko && this.hp >=30 && this.sheep <5) {
            this.hp -=30;
            if (this.hp <= 0) {
                alert("Zmarłeś! Koniec gry.");
                location.href = "main.html"; // Zamknięcie okna gry
                return;
            }
            this.sheep++;
            this.updateUI();
            if(this.sheep ===5) alert("Zebrałeś wystarczającą ilość mięsa!");
            if(this.hp ===0) alert("Idź spać aby odnowić życie.");
        }
        else if(!this.stanowisko){
            alert("Nie masz wybudowanego stanowiska!");
        }
    }

    sleep() {
        if (!this.sleeping && this.hp < 100) {
            this.sleeping = true;
            document.getElementById('digWood').disabled = true;
            document.getElementById('collectWheat').disabled = true;
            document.getElementById('collectTomatoes').disabled = true;
            document.getElementById('collectLettuce').disabled = true;
            document.getElementById('killSheep').disabled = true;
    
            alert("Śpisz i nie możesz wykonywać aktualnie żadnej czynności!")
            let sleepTime = 10;
            let sleepInterval = setInterval(() => {
                this.hp += 8;
                this.updateUI();
                sleepTime--;
                if (sleepTime <= 0 || this.hp + 5 > 100) {
                    clearInterval(sleepInterval);
                    this.sleeping = false;
                    document.getElementById('digWood').disabled = false;
                    document.getElementById('collectWheat').disabled = false;
                    document.getElementById('collectTomatoes').disabled = false;
                    document.getElementById('collectLettuce').disabled = false;
                    document.getElementById('killSheep').disabled = false;
    
                    alert("Wstałeś i zregenerowałeś swoje życie!");
                }
            }, 1000);
        } else {
            alert("Masz pełne zdrowie!")
        }
    }


    checkKebab() {
        if(this.wood ===30 && this.stanowisko && this.wheat ===20 && this.tomatoes ===8 && this.lettuce ===3 && this.sheep ===5) {
            alert("Gratulacje! Udało Ci się zrobić kebaba!");
            location.href = "koncowy_ekran.html";
        }
        else{
            alert("Posiadasz nie wystarczającą ilość składników!");
        }
    }

    updateUI() {
        document.getElementById('hp').innerText = "Hp:" + this.hp;
        document.getElementById('woodCount').innerText = this.wood;
        document.getElementById('wheatCount').innerText = this.wheat;
        document.getElementById('tomatoCount').innerText = this.tomatoes;
        document.getElementById('lettuceCount').innerText = this.lettuce;
        document.getElementById('sheepCount').innerText = this.sheep;
    }
    
}

let game = new KebabGame();

document.getElementById('digWood').addEventListener('click', function() { game.digWood(); });
document.getElementById('collectWheat').addEventListener('click', function() { game.collectWheat(); });
document.getElementById('collectTomatoes').addEventListener('click', function() { game.collectTomatoes(); });
document.getElementById('collectLettuce').addEventListener('click', function() { game.collectLettuce(); });
document.getElementById('killSheep').addEventListener('click', function() { game.killSheep(); });
document.getElementById('sleep').addEventListener('click', function() { game.sleep(); });
document.getElementById("sprawdz").addEventListener('click',function(){game.checkKebab(); })