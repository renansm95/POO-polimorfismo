class Character {
  constructor(nome, vida, ataque, defesa) {
    this.nome = nome;
    this.vida = vida;
    this.ataque = ataque;
    this.defesa = defesa;
  }

  atacar(personagem) {
    if (this.ataque > personagem.defesa) {
      console.log(
        `${this.nome} causou ${
          this.ataque - personagem.defesa
        } e a vida atual do ${personagem.nome} é de ${(personagem.vida -=
          this.ataque - personagem.defesa)}`
      );
    } else {
      console.log("Dano insuficiente");
    }
  }
}

class Thief extends Character {
  atacar(personagem) {
    if (this.ataque > personagem.defesa) {
      console.log(
        `${this.nome} causou ${
          (this.ataque - personagem.defesa) * 2
        } e a vida atual do ${personagem.nome} é de ${(personagem.vida -=
          (this.ataque - personagem.defesa) * 2)}`
      );
    } else {
      console.log("Dano insuficiente");
    }
  }
}

class Mage extends Character {
  constructor(nome, magia, vida, ataque, defesa) {
    super(nome, vida, ataque, defesa);
    this.magia = magia;
  }

  atacar(personagem) {
    if (this.magia > personagem.defesa) {
      console.log(
        `${this.nome} causou ${
          this.magia + this.ataque - personagem.defesa
        } e a vida atual do ${personagem.nome} é de ${(personagem.vida -=
          this.magia + this.ataque - personagem.defesa)}`
      );
    } else {
      console.log("Dano insuficiente.");
    }
  }

  healar(personagem) {
    console.log(
      `${this.nome} encheu a vida do ${
        personagem.nome
      } e a vida atual é de ${(personagem.vida += this.magia * 2)}`
    );
  }
}

class Warrior extends Character {
  constructor(nome, escudo, posicao, vida, ataque, defesa) {
    super(nome, vida, ataque, defesa);
    this.escudo = escudo;
    this.posicao = posicao;
  }

  atacar(personagem) {
    if (this.posicao === "ataque" && this.ataque > personagem.defesa) {
      console.log(
        `${this.nome} causou ${
          this.ataque - personagem.defesa
        } e a vida atual do ${personagem.nome} é de ${(personagem.vida -=
          this.ataque - personagem.defesa)}`
      );
    } else if (this.posicao === "defesa") {
      console.log(
        "Você precisa mudar sua posição para ataque para poder atacar."
      );
    } else {
      console.log("Dano insuficiente.");
    }
  }

  mudaPosicao() {
    if (this.posicao === "ataque") {
      this.posicao = "defesa";
      this.defesa += this.escudo;
    } else {
      this.posicao = "ataque";
      this.defesa -= this.escudo;
    }
  }
}

const viktor = new Character("Viktor", 100, 15, 15);
const sion = new Thief("Sion", 100, 60, 10);
const lux = new Mage("Lux", 50, 100, 5, 20);
const kayn = new Warrior("Kayn", 5, "ataque", 200, 20, 50);
console.table({ kayn, lux, sion, viktor });
kayn.mudaPosicao();
sion.atacar(kayn);
console.log(kayn);
