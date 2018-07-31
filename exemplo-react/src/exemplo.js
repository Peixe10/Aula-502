class Gato extends Animal{
    constructor(nome, cor, raca, sexo, patas=4){

        this.nome = nome;
        this.cor = cor;
        this.raca = raca;
        this.sexo = sexo;
        this.patas = patas;

    }


    miar(){
        console.log("MEEEOW");
    }
}

let gato = new Gato("Pombas", "marrom", "tomba-potes", false);

let outroGato = new Gato("Cachorro","branco","SRD",true,3);

console.log(gato)
console.log(outroGato)