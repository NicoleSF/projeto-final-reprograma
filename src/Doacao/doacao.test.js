const Beneficiario = require("../Beneficiario/beneficiario");
const MaterialEscolar = require("../Material Escolar/materialEscolar");
const Doacao = require("./doacao");

describe("classe Doação", () => {
    var beneficiario;
    var caderno;
    var doacao;
    var doacaoErro;

    beneficiario = new Beneficiario("maria", 14, "02525478823", "rua 2", "512354218");
    caderno = new MaterialEscolar(1, "caderno", 1, "geral", "adulto e criança");
    doacao = new Doacao(beneficiario, caderno, "14/09/2023");
    doacaoErro = new Doacao(beneficiario, "caderno", "14/09/2023");
    
    test("deverá verificar se o beneficiario é uma instância da classe Benenficiario", () => {

        expect(beneficiario).toBeInstanceOf(Beneficiario);
    }) 

    test("deverá verificar se caderno é uma instância da classe Material Escolar", () => {

        expect(caderno).toBeInstanceOf(MaterialEscolar);
    })

    test("deverá verificar o retorno caso caderno não seja uma instância de Material Escolar", () => {
        expect(doacaoErro).toEqual({"beneficiario": undefined, "dataDoacao": undefined, "materialEscolar": undefined});
    })

    test("deverá verificar se a doação não é incluída na lista se não tiver data", () => {

        doacao = new Doacao(beneficiario, caderno);
        list = Doacao.listaDoacoes;
        expect(doacao).not.toContain(list);
    })

})