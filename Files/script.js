// Henter HTML-elementet for spørsmål
let sporsmaal = document.getElementById("spørsmål");

// Variabler for poeng og highscore
let highscore = 0;
let score = 0;
let tall = [];
let input = ""; // Brukerens svar

// Legger til event listeners på knappene 1-9
let buttons = document.querySelectorAll(".knapp");
for (let button of buttons) {
    button.addEventListener("click", function () {
        // Sjekker om knappens tekst er et tall mellom 1 og 9
        if (parseInt(button.innerHTML) >= 1 && parseInt(button.innerHTML) <= 9) {
            sporsmaal.innerHTML += ` ${button.innerHTML}`;
            input = button.innerHTML; // Lagre brukerens input
        }
    });
}

// Funksjon for å lagre highscore i localStorage
function lagre_highscore() {
    localStorage.highscore = highscore;
}

// Funksjon for å hente highscore fra localStorage
function load_highscore() {
    if (localStorage.highscore) {
        highscore = parseInt(localStorage.highscore);
    }
}
load_highscore();

console.log("Highscore: " + highscore);

// Funksjon for å generere et tilfeldig heltall mellom min og max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Funksjon for å lage et nytt spørsmål
function LagSpørsmål() {
    let tall1 = randInt(0, 9);
    let tall2 = randInt(0, 10 - tall1);

    tall = [tall1, tall2]; // Oppdaterer global tall-array

    sporsmaal.innerHTML = `Hva er ${tall1} + ${tall2} = ?`;
}

// Funksjon for å vise om svaret er riktig eller feil
function visRiktigFeilSvar() {
    let brukerSvar = parseInt(input); // Henter brukerens svar fra input
    let riktigSvar = tall[0] + tall[1]; // Regner ut riktig svar

    if (brukerSvar === riktigSvar) {
        console.log("Riktig svar!");
        score++;
        if (score > highscore) {
            highscore = score;
            lagre_highscore();
        }
        setTimeout(() => {
            LagSpørsmål();
            input = ""; // Nullstill input
        }, 1500);
    } else {
        console.log("Feil svar.");
        score = 0;
        setTimeout(() => {
            LagSpørsmål();
            input = ""; // Nullstill input
        }, 1500);
    }
}

// Event listener for reset-knappen
document.querySelector("#reset").addEventListener("click", function () {
    score = 0; // Nullstill poeng
    LagSpørsmål();
    input = "";
});

// Event listener for submit-knappen
document.querySelector("#submit").addEventListener("click", visRiktigFeilSvar);

// Starter med et spørsmål
LagSpørsmål();