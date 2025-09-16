let highscore = 0;
let score = 0;

function lagre_highscore() {
    localStorage.highscore = highscore;
}


function load_highscore() {
    if (localStorage.highscore) {
        highscore = localStorage.highscore;
    }
}
load_highscore();

console.log("Highscore: " + localStorage.highscore);

function randInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
};

function LagSpørsmål() {
    let tall1 = randInt(0, 9);
    let tall2 = randInt(0,10-tall1);

    let tall = [tall1,tall2];

    document.getElementById("spørsmål").innerHTML = "Hva er " + tall1 + " + " + tall2 + " = ?: ";
    return tall;
};

function visRiktigFeilSvar() {
    if (parseInt(brukerSvar) === riktigSvar) {
        console.log("Riktig svar!");
        score++;
        if (score > highscore) {
            highscore = score;
            lagre_highscore();
        }
        // Nytt spørsmål etter litt tid
        setTimeout(LagSpørsmål, 1500);
    } else {
        console.log("Feil svar.");
        score = 0;
        setTimeout(LagSpørsmål, 1500);
    }
};