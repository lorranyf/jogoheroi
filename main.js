class Heroina {
    constructor(nome) {
        this.nome = nome;
        this.vida = 100;
        this.forca = 50;
        this.recursos = { magia: 3, pocao: 1 };
    }

    status() {
        console.log(`Vida: ${this.vida}, Força: ${this.forca}, Recursos: Magia: ${this.recursos.magia}, Poções: ${this.recursos.pocao}`);
    }

    enfrentarDesafio() {
        const desafio = Math.floor(Math.random() * 3); // 0, 1 ou 2
        switch (desafio) {
            case 0:
                console.log("Você encontrou um monstro! Ele te atacou.");
                this.vida -= 20;
                this.forca -= 5;
                break;
            case 1:
                console.log("Você achou um baú com uma poção de vida!");
                this.vida += 10;
                this.recursos.pocao += 1;
                break;
            case 2:
                console.log("Você encontrou uma armadilha mágica! Perdeu um pouco de vida.");
                this.vida -= 15;
                this.recursos.magia -= 1;
                break;
        }
        this.status();
    }
}

let heroina;
let rodada;
const maxRodadas = 5; // Número máximo de rodadas

function start() {
    heroina = new Heroina("Lúcia");
    rodada = 1;
    console.log("A aventura começou!");
    console.log(`\nRodada ${rodada}`);
    heroina.status();
    console.log("Digite `proximaRodada()` para continuar.");
}

function proximaRodada() {
    if (heroina.vida > 0 && rodada < maxRodadas) {
        rodada++;
        console.log(`\nRodada ${rodada}`);
        heroina.enfrentarDesafio();
        if (heroina.vida > 0) {
            console.log("Digite `proximaRodada()` para continuar.");
        } else {
            console.log("Você foi derrotada... O Dragão Sombrio venceu.");
        }
    } else if (rodada === maxRodadas && heroina.vida > 0) {
        console.log("Parabéns! Você sobreviveu até o final e derrotou o Dragão Sombrio!");
    } else {
        console.log("Fim de jogo. Você não sobreviveu para derrotar o Dragão.");
    }
}
