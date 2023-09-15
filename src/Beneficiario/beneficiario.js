class Beneficiario{
    nome;
    idade;
    #cpf;
    #endereco;
    #telefone;

    static listaBeneficiario = [];

    constructor(nome, idade, cpf, endereco, telefone){
        this.nome = nome;
        this.idade = idade;
        this.#cpf = cpf;
        this.#endereco = endereco;
        this.#telefone = telefone;
        Beneficiario.listaBeneficiario.push(this);
    }

    get cpf(){
        return this.#cpf;
    }


    get endereco(){
        return this.#endereco;
    }

    get telefone(){
        return this.#telefone;
    }

    faixaEtaria(){
        if(this.idade < 12){
            return "Beneficiário é uma criança";
        } else if(this.idade >=12 && this.idade < 18){
            return "Beneficário é um adolescente";
        }else if(this.idade >= 18 ){
            return "Beneficiário é um adulto";
        } else {
            return "Digite uma idade válida";
        }
    }

    removerBeneficiario(cpfBeneficiario){
        const encontrarCpf = Beneficiario.listaBeneficiario.findIndex((cpfParaRemover) => cpfParaRemover.cpf === cpfBeneficiario);

        if(encontrarCpf !== -1){
            Beneficiario.listaBeneficiario.splice(encontrarCpf, 1);
            return "Beneficiário removido com sucesso!";
        }else {
            return "Beneficiário não encontrado!"
        }

    }

}

module.exports = Beneficiario;

// const beneficiario = new Beneficiario("nicole", 14, "025", "rua 2", "5123");
// console.log(beneficiario.cpf);
// const beneficiario2 = new Beneficiario("josé", "025", "rua 2", "5123");
// console.log(beneficiario);
// console.log(Beneficiario.listaBeneficiario);
// console.log(beneficiario2.faixaEtaria());
// console.log(Beneficiario.listaBeneficiario);
// console.log(beneficiario.removerBeneficiario());
// console.log(Beneficiario.listaBeneficiario);