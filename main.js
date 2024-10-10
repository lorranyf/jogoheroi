let hero = {
    vida: 100,
    forca: 10,
    recursos: {
        dinheiro: 100,
        pocoes: 5
    }
};

let dragon = {
    vida: 200,
    forca: 20
};

function start() {
    console.log("Bem-vindo ao jogo! Você é a heroína.");
    console.log("Seu status atual:");
    console.log(`Vida: ${hero.vida}`);
    console.log(`Força: ${hero.forca}`);
    console.log(`Recursos: ${hero.recursos.dinheiro} dinheiros e ${hero.recursos.pocoes} poções`);

    playRound();
}

function playRound() {
    let desafio = Math.floor(Math.random() * 3) + 1;
    switch (desafio) {
        case 1:
            console.log("Você encontrou um monstro!");
            battleMonster();
            break;
        case 2:
            console.log("Você encontrou um tesouro!");
            findTreasure();
            break;
        case 3:
            console.log("Você encontrou um obstáculo!");
            overcomeObstacle();
            break;
    }
}

function battleMonster() {
    let damage = Math.floor(Math.random() * hero.forca) + 1;
    dragon.vida -= damage;
    console.log(`Você atacou o dragão e causou ${damage} de dano!`);
    console.log(`Vida do dragão: ${dragon.vida}`);

    if (dragon.vida <= 0) {
        console.log("Você derrotou o dragão! Parabéns!");
        return;
    }

    let dragonDamage = Math.floor(Math.random() * dragon.forca) + 1;
    hero.vida -= dragonDamage;
    console.log(`O dragão atacou você e causou ${dragonDamage} de dano!`);
    console.log(`Vida da heroína: ${hero.vida}`);

    if (hero.vida <= 0) {
        console.log("Você morreu! Tente novamente.");
        return;
    }

    playRound();
}

function findTreasure() {
    let treasure = Math.floor(Math.random() * 10) + 1;
    hero.recursos.dinheiro += treasure;
    console.log(`Você encontrou ${treasure} dinheiros!`);
    console.log(`Recursos: ${hero.recursos.dinheiro} dinheiros e ${hero.recursos.pocoes} poções`);

    playRound();
}

function overcomeObstacle() {
    let obstacle = Math.floor(Math.random() * 2) + 1;
    switch (obstacle) {
        case 1:
            console.log("Você encontrou uma ponte quebrada!");
            hero.vida -= 10;
            console.log(`Você perdeu 10 de vida!`);
            console.log(`Vida da heroína: ${hero.vida}`);
            break;
        case 2:
            console.log("Você encontrou uma armadilha!");
            hero.recursos.pocoes -= 1;
            console.log(`Você perdeu 1 poção!`);
    }
    let level = 0;
let maxLevels = 6; // adjust this to the total number of levels in your game

function start() {
    // initialize game state and load level 0
    level = 0;
    loadLevel(level);
}

function nextLevel() {
    if (level < maxLevels - 1) {
        level++;
        loadLevel(level);
    } else {
        console.log("Você completou o jogo!");
    }
}

function loadLevel(levelNumber) {
    // load level data and setup game state for the current level
    switch (levelNumber) {
        case 0:
            console.log("Você encontrou um monstro!");
            battleMonster();
            break;
        case 1:
            console.log("Você encontrou um tesouro!");
            findTreasure();
            break;
        case 2:
            console.log("Você encontrou um obstáculo!");
            overcomeObstacle();
            break;
        case 3:
            console.log("Você encontrou um labirinto!");
            navigateLabyrinth();
            break;
        case 4:
            console.log("Você encontrou um rio!");
            crossRiver();
            break;
        case 5:
            console.log("Você encontrou um castelo!");
            conquerCastle();
            break;
    }
}
}