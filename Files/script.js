let sporsmaal = document.getElementById("spørsmål")
let highscore = 0;
let score = 0;
let tall = [];
let input;

let buttons = document.querySelectorAll(".knapp");
for(let button of buttons){
    button.addEventListener("click", function(){
        if(button.innerHTML in [1,2,3,4,5,6,7,8,9]){
            sporsmaal.innerHTML += ` ${button.innerHTML}`
            input = button.innerHTML
        }
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

    let tall = [tall1,tall2];

    sporsmaal.innerHTML = `Hva er ${tall1} + ${tall2} = ?: `;
    return tall;
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
};

document.querySelector("#reset").addEventListener("click", function() {
    tall = LagSpørsmål()
});

document.querySelector("#submit").addEventListener("click", visRiktigFeilSvar(input, tall[0] + tall[1]));

tall = LagSpørsmål();