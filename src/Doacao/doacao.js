const Beneficiario = require("../Beneficiario/beneficiario");
const MaterialEscolar = require("../Material Escolar/materialEscolar");

class Doacao {
    beneficiario;
    materialEscolar;
    dataDoacao;

    static listaDoacoes = [];

    constructor(beneficiario, materialEscolar, dataDoacao){
        if(!(beneficiario instanceof Beneficiario)){
            return "Informe um beneficiário válido.";
        }

        if(!(materialEscolar instanceof MaterialEscolar)){
            return "Informe um material escolar válido.";
        }

        if(!dataDoacao){
            return "Informe uma data válida!";
        }

        this.beneficiario = beneficiario;
        this.materialEscolar = materialEscolar;
        this.dataDoacao = dataDoacao;
        Doacao.listaDoacoes.push(this);
    }

}

module.exports = Doacao;

const material = new MaterialEscolar(1, "lápis", 3, "geral", "adulto e criança");
const beneficiario1 = new Beneficiario("nicole", 14, "025", "rua 2", "5123");
const doacao = new Doacao("", material, "14/09/2024");
// console.log(doacao);
console.log(Doacao.listaDoacoes);