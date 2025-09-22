// Henter HTML-elementet for spørsmål
let sporsmaal = document.getElementById("spørsmål");

// Variabler for poeng og highscore
let highscore = 0;
let score = 0;
let tall = [];
let input;

// Legger til event listeners på knappene 1-9
let buttons = document.querySelectorAll(".knapp");
input = ""; // Ensure input is initialized as a string

for (let button of buttons) {
    button.addEventListener("click", function () {
        input += button.innerHTML;
        let questionText = `Hva er ${tall[0]} + ${tall[1]}?: `;
        sporsmaal.innerHTML = questionText + input;
        console.log("Input: " + input);
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


// Funksjon for å generere et tilfeldig heltall mellom min og max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Funksjon for å lage et nytt spørsmål
function LagSpørsmål() {
    let tall1 = randInt(0, 9);
    let tall2 = randInt(0, 10 - tall1);

    tall = [tall1, tall2]; // Oppdaterer global tall-array

    sporsmaal.innerHTML = `Hva er ${tall1} + ${tall2}?: `;
    return tall;
}

function visRiktigFeilSvar(brukerSvar, riktigSvar) {
    if (parseInt(brukerSvar) === riktigSvar) {
        sporsmaal.innerHTML = "Riktig!";
        score++;
        if (score > highscore) {
            highscore = score;
            lagre_highscore();
        }
        // Nytt spørsmål etter litt tid
        setTimeout(function(){
            tall = LagSpørsmål()
        }, 1500);
    } else {
        sporsmaal.innerHTML = "Feil!";
        score = 0;
        setTimeout(function(){
            tall = LagSpørsmål()
        }, 1500);
    }
}

// Event listener for reset-knappen
document.querySelector("#reset").addEventListener("click", function () {
    score = 0; // Nullstill poeng
    visRiktigFeilSvar(input, (tall[0] + tall[1]));
    input = "";
});

document.querySelector("#submit").addEventListener("click", function() {
    console.log(tall)
    visRiktigFeilSvar(input, (tall[0] + tall[1]));
    input = "";
});

tall = LagSpørsmål();