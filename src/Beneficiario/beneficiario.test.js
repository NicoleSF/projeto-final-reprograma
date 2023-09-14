const Beneficiario = require("./beneficiario");

describe("classe Beneficiario", () => {
    var beneficiario;
    var beneficiario2;
    var beneficiario3;
    var beneficiario4;

    beforeEach(() => {
        beneficiario = new Beneficiario("nicole", 11, "025", "rua 2", "5123");
        beneficiario2 = new Beneficiario("joana", 14, "026", "rua 3", "5125");
        beneficiario3 = new Beneficiario("maria", 24, "027", "rua 4", "5126");
        beneficiario4 = new Beneficiario();
    })

    describe("função faixa etária", () => {
        test("deverá retornar a indicação de que é criança se idade < 12 anos", () => {
            const result = beneficiario.faixaEtaria();
            expect(result).toBe("Beneficiário é uma criança");
        })
        
        test("deverá retornar a indicação de que é adolescente se idade >= 12 e idade < 18 anos", () => {
            const result = beneficiario2.faixaEtaria();
            expect(result).toBe("Beneficário é um adolescente");
        })

        test("deverá retornar a indicação de que é adulto se idade <= 18", () => {
            const result = beneficiario3.faixaEtaria();
            expect(result).toBe("Beneficiário é um adulto");
        })

        test("deverá retornar um aviso quando não tem a informação da idade", () => {
            const result = beneficiario4.faixaEtaria();
            expect(result).toBe("Digite uma idade válida");
        })
    })

    describe("função removerBeneficiario", () => {
        test("deverá retornar a frase de removido com sucesso", () => {
            const result = beneficiario.removerBeneficiario("025");
            expect(result).toBe("Beneficiário removido com sucesso!");
        })

        test("deverá retornar um aviso quando o beneficiario não for encontrado", () => {
            const result = beneficiario.removerBeneficiario("034");
            expect(result).toBe("Beneficiário não encontrado!");
        })
    })
    
})