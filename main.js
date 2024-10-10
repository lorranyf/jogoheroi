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
                console.log("Você encontrou um monstro!");
                this.vida -= 20;
                this.forca -= 5;
                break;
            case 1:
                console.log("Você achou um baú com uma poção de vida!");
                this.vida += 10;
                this.recursos.pocao += 1;
                break;
            case 2:
                console.log("Você encontrou uma armadilha mágica!");
                this.vida -= 15;
                this.recursos.magia -= 1;
                break;
        }
        this.status();
    }

    jogarRodada() {
        if (this.vida > 0) {
            this.enfrentarDesafio();
        } else {
            console.log("Você não sobreviveu... Fim de jogo.");
        }
    }
}

function start() {
    const heroina = new Heroina("Lúcia");
    let rodada = 1;
    
    function rodadaJogo() {
        console.log(`\nRodada ${rodada}`);
        heroina.jogarRodada();
        rodada++;
        if (heroina.vida > 0) {
            setTimeout(rodadaJogo, 2000); // Próxima rodada após 2 segundos
        } else {
            console.log("Você foi derrotada... O Dragão Sombrio venceu.");
        }
    }

    rodadaJogo();
}
