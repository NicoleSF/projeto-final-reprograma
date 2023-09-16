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