function Ogrze(){
  var Ogrze= document.getElementById("menu");
  Ogrze.innerHTML = "<div id='okno_ogrze'><header>O grze</header><p id='ocochodziwgrze'>Krótka notatka o grze: Zapraszam do fascynującej przygody kulinarno-clickerowej! Moja gra to prawdziwy festiwal smaków, gdzie Twoim celem jest zbieranie składników na pysznego kebaba. Klikaj, zbieraj surowce i składniki na znaną każdemu potrawę! Zrób swojego wirtualnego kebaba i obejdź się ze smakiem! Gotów na podjęcie wyzwania? Sprawdź i się przekonaj! Ps.Nie polecam grać kiedy jest się głodnym.</p><p>Zasady: Głównie trzeba uważać żeby nie umrzeć. Zebranie 30 drewna odblokowuje możliwość zbierania reszty składników.</p><p><ul><li>Wykopanie drewna= -9hp</li><li>Zebranie pszenicy= -8hp</li><li>Zebranie pomidorów= -13hp</li><li>Zebranie sałaty= -20hp</li><li>Zabicie owcy= -30hp</li><li>Spanie(10s)= +8hp</li></ul><button id='zamknij' onclick='zamknij()'>Zamknij</button></div>";
}
function zamknij()
{
  var x = document.getElementById("menu");
  x.innerHTML = `
  <p id="napispocz">Gra pt. "Zrób sobie kebaba!"</p>
  <p><button class="zacznij" role="button" onclick="alertuj()">
      <span class="zacznij1"></span>
      <span class="zacznij2"></span>
      <span class="zacznij3">
        Zacznij grę
      </span>
    </button>
      </p>
  <p><button class="zacznij" role="button" onclick="Ogrze()">
      <span class="zacznij1"></span>
      <span class="zacznij2"></span>
      <span class="zacznij3">
        O grze
      </span>
    </button></button></p>`;
} 

function alertuj() {
  alert("Kliknij w któryś obrazek, aby rozpocząć :D");
  var kebab1 = document.getElementById("k1");
  var kebab2 = document.getElementById("k2");

  kebab1.onclick = function () {
    alert("Nie w ten obrazek :D");
  };

  kebab2.onclick = function () {
    location.href = 'gra.html';
  };
}
var dzwiek = new Audio("kebab.m4a");
dzwiek.loop = true;
function dajdzwiek(){
  var ikonadzwieku = document.getElementById("soundoff");
  ikonadzwieku.src = "soundon.png";
  ikonadzwieku.onclick = wylaczdzwiek;
  dzwiek.play();
}

function wylaczdzwiek(){
  var ikonadzwieku = document.getElementById("soundoff");
  ikonadzwieku.src = "soundoff.png";
  ikonadzwieku.onclick = dajdzwiek;
  dzwiek.pause();
  dzwiek.currentTime = 0;
}

