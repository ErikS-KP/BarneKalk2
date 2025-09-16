let highscore = 0;
let score = 0;
let input;

let buttons = document.querySelectorAll('.knapp');
for(let button of buttons){
    button.addEventListener("click", function(){
        input = button.innerHTML
    })
}

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
    let sum = tall1+tall2;

    document.getElementById("spørsmål").innerHTML = "Hva er " + tall1 + " + " + tall2 + " = ?";
    return sum;
};

function visRiktigFeilSvar(brukerSvar, riktigSvar) {
    if (brukerSvar === riktigSvar) {
        console.log("Riktig svar!");
        setTimeout(LagSpørsmål, 2000);
        score++;
        if (score > highscore) {
            highscore = score;
            lagre_highscore();
        }
    } else {
        console.log("Feil svar.");
        setTimeout(LagSpørsmål, 2000);
        score=0;
    }
}