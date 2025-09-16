function randInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
};

function LagSpørsmål() {
    let tall1 = randInt(0, 9);
    let tall2 = randInt(0,10-tall1);
    let tall = [tall1, tall2];
    return tall;
};

function visRiktigFeilSvar(brukerSvar, riktigSvar) {
    if (brukerSvar === riktigSvar) {
        console.log("Riktig svar!");
    } else {
        console.log("Feil svar.");
    }
}
