function randInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
};

function LagSpørsmål() {
    let tall1 = randInt(0, 9);
    let tall2 = randInt(0,10-tall1);
    console.log(tall1,tall2);

    return tall1,tall2;
};

