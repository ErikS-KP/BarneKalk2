let sporsmaal = document.getElementById("spørsmål")
let highscore = 0;
let score = 0;
let tall = [];
let input = ""

let buttons = document.querySelectorAll(".knapp");
for(let button of buttons){
    button.addEventListener("click", function(){
        const value = button.innerHTML;
        if(["0","1","2","3","4","5","6","7","8","9"].includes(value)){
            sporsmaal.innerHTML += value;
            input += value; // <-- Concatenate digits
        }
    });
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
            console.log("ny")
        }, 1500);
    } else {
        sporsmaal.innerHTML = "Feil!";
        score = 0;
        setTimeout(function(){
            tall = LagSpørsmål()
            console.log("ny1")
        }, 1500);
    }
};

document.querySelector("#reset").addEventListener("click", function() {
    tall = LagSpørsmål()
});

document.querySelector("#submit").addEventListener("click", function() {
    visRiktigFeilSvar(input, tall[0] + tall[1]);
    input = "";
});

tall = LagSpørsmål()