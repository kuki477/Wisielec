// alert(`WITAJ W GRZE W WISIELCA ZASADY:
// 1. MUSISZ ODGADNĄĆ WYRAZ,KTÓRY WYLOSUJE SIĘ AUTOMATYCZNIE
// 2. MASZ NA TO 10 PRÓB
//           POWODZENIA👋🤚
//   `)
var kat;
var tabRand = Math.floor(Math.random() * 6 + 1);
console.log(tabRand);
var whichTable;
if (tabRand == 1) {
  var tabWyrazy = ["gruszka", "truskawka","brzoskwinia","winogrono","mango","agrest","orzech"];
  kat = "OWOC";
  document.getElementById("kategoria").innerText = "KATEGORIA: " + kat;
} else if (tabRand == 2) {
  var tabWyrazy = ["skrzypce", "flet","gitara","klarnet","saksofon","harfa","puzon"];
  kat = "INSTRUMENT";
  document.getElementById("kategoria").innerText = "KATEGORIA: " + kat;
} else if (tabRand == 3) {
  var tabWyrazy = ["kot", "pies", "chomik", "sztosik","mysz","tygrys","pantera"];
  kat = "ZWIERZE";
  document.getElementById("kategoria").innerText = "KATEGORIA: " + kat;
}  else if (tabRand == 4) {
  var tabWyrazy = ["kalafior", "kapusta", "cebula", "czosnek","por","ziemniak","pomidor"];
  kat = "WARZYWA";
  document.getElementById("kategoria").innerText = "KATEGORIA: " + kat;
}  else if (tabRand == 5) {
  var tabWyrazy = ["polska", "niemcy", "belgia", "hiszpania","brazylia","senegal","japonia"];
  kat = "KRAJ";
  document.getElementById("kategoria").innerText = "KATEGORIA: " + kat;
}
else if (tabRand == 6) {
  var tabWyrazy = ["czerwony", "niebieski", "biały", "czarny","fioletowy","zielony","szary"];
  kat = "KOLOR";
  document.getElementById("kategoria").innerText = "KATEGORIA: " + kat;
}

var wyrazy = tabWyrazy;

var kategoria = ["zwierze", "instrument", "owoc", "urządzenie"];

// var wyrazy = [
//   // "kot",
//   // "krowa",
//   // "kalkulator",
//   // "dom",
//   // "skrzypce",
//   // "arbuz",
//   // "rabarbar",
//   // "motocykl",
//   // "fortepian",
//   // "pies",
//   // "pianino",
//   // "agrest",
//   // "okulary",
//   // "ciastko",
//   // "brzoskwinia",
//   // "truskawka",
//   // "paprotka",
//   // "las",
//   // "lato",
//   // "burza",
//   // "chmura",
//   // "jezioro",
//   // "ocean",
//   //"konstantynopolitańczykowianeczka",
// ];

let proby = 0;

//DO DUŻYCH LITER TABLICE
var upperWyrazy = [];

for (let i = 0; i < wyrazy.length; i++) {
  let duzeLitery = wyrazy[i].toUpperCase();
  upperWyrazy.push(duzeLitery);
}
console.log(upperWyrazy);

function losujWyraz() {
  var dlTab = upperWyrazy.length;
  var wylosowanaLiczba = Math.floor(Math.random() * dlTab);
  var wylosowanyWyraz = upperWyrazy[wylosowanaLiczba];
  // console.log(wylosowanyWyraz);
  return wylosowanyWyraz;
}

losowyWyraz = losujWyraz();
licznik = 0;

function utworzDiv() {
  const el = document.createElement("div");
  //var nazwa="pole"+licznik;
  el.id = licznik;
  el.className = "klasaDiv";
  document.querySelector("#wisielec").appendChild(el);
}

function generujPola() {
  var ileLiter = losowyWyraz.length;

  for (i = 1; i <= ileLiter; i++) {
    utworzDiv();
    licznik++;
  }
}

// input na duze literki
function upperInput() {
  const poleTekstowe = document.getElementById("inputLetter");

  poleTekstowe.addEventListener("input", function () {
    this.value = this.value.toUpperCase();
  });
}
function upperZgadnij() {
  const poleTekstowe = document.getElementById("wpiszPassword");

  poleTekstowe.addEventListener("input", function () {
    this.value = this.value.toUpperCase();
  });
}

function checkLetter() {
  var litera = document.getElementById("inputLetter").value;
  var ileLiter = losowyWyraz.length;

  var czyDobrze = false;

  for (var i = 0; i <= ileLiter - 1; i++) {
    if (litera == losowyWyraz[i]) {
      document.getElementById(i).innerText = litera;
      czyDobrze = true;
    }
  }

  if (czyDobrze) {
    var audio_1 = new Audio("assets/dobrze.mp3");
    audio_1.volume = 0.5;
    audio_1.play();
    litera = "";
  } else {
    var audio_1 = new Audio("assets/zle.mp3");
    audio_1.volume = 0.5;
    audio_1.play();
    proby++;
    document.getElementById("proby").innerText = "ILOŚĆ PRÓB: " + proby;
    rysujWisielca(proby);
    // for (let i = 1; i <= 10; i++) {
    //   rysujWisielca(i);
    // }
  }
  if (proby == 10) {
    document.getElementById("przegrana").style = "display:flex";
  }

  console.log(litera, ileLiter);
}

document.getElementById("przyciskReset").addEventListener("click", function () {
  document.getElementById("inputLetter").value = "";
});

document.getElementById("buttonReset").addEventListener("click", function () {
  document.getElementById("wpiszPassword").value = "";
});

function zgadnijPassword() {
  var haslo = document.getElementById("wpiszPassword");
  if (haslo.value == losowyWyraz) {
    document.getElementById("wygrana").style = "display:flex";
    var czyGit = true;
  }
  if (czyGit) {
    var audio_1 = new Audio("assets/dobrze.mp3");
    audio_1.volume = 0.5;
    audio_1.play();
    litera = "";
  } else {
    var audio_1 = new Audio("assets/zle.mp3");
    audio_1.volume = 0.5;
    audio_1.play();
    proby++;
    document.getElementById("proby").innerText = "ILOŚĆ PRÓB: " + proby;
    rysujWisielca(proby);
    // for (let i = 1; i <= 10; i++) {
    //   rysujWisielca(i);
    // }
    if (proby == 10) {
      document.getElementById("przegrana").style = "display:flex";
    }

  }
}

console.log(losowyWyraz);
generujPola();
upperZgadnij();
upperInput();

// var audio_1 = new Audio("assets/dobrze.mp3");
// audio_1.volume = 0.2;
// audio_1.play();
// document.getElementById("proby").innerText = "proby: " + proby;
// proby++;
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function podstawa() {
  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;
  ctx.moveTo(50, 350);
  ctx.lineTo(150, 350);
  ctx.stroke();
}

function drewno() {
  ctx.moveTo(100, 350);
  ctx.lineTo(100, 50);
  ctx.stroke();
}

function góra() {
  ctx.moveTo(100, 50);
  ctx.lineTo(250, 50);
  ctx.stroke();
}

function lina() {
  ctx.moveTo(250, 50);
  ctx.lineTo(250, 100);
  ctx.stroke();
}

function glowa() {
  ctx.beginPath();
  ctx.arc(250, 130, 30, 0, Math.PI * 2, true);
  ctx.stroke();
}

function cialo() {
  ctx.moveTo(250, 160);
  ctx.lineTo(250, 250);
  ctx.stroke();
}

function leweramie() {
  ctx.moveTo(250, 180);
  ctx.lineTo(200, 220);
  ctx.stroke();
}

function praweramie() {
  ctx.moveTo(250, 180);
  ctx.lineTo(300, 220);
  ctx.stroke();
}

function lewanoga() {
  ctx.moveTo(250, 250);
  ctx.lineTo(200, 300);
  ctx.stroke();
}

function prawanoga() {
  ctx.moveTo(250, 250);
  ctx.lineTo(300, 300);
  ctx.stroke();
}

function rysujWisielca(proby) {
  switch (proby) {
    case 1:
      podstawa();
      break;
    case 2:
      drewno();
      break;
    case 3:
      góra();
      break;
    case 4:
      lina();
      break;
    case 5:
      glowa();
      break;
    case 6:
      cialo();
      break;
    case 7:
      leweramie();
      break;
    case 8:
      praweramie();
      break;
    case 9:
      lewanoga();
      break;
    case 10:
      prawanoga();
      break;
    default:
      console.log("przegrales");
  }
}
