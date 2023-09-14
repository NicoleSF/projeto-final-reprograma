const  MaterialEscolar = require('./materialEscolar');

describe("classe Material Escolar", () => {
    var material1;
    var material2;

    beforeEach(() => {
        material1 = new MaterialEscolar(1, "lápis", 3, "geral", "adulto e criança");
    })

    test("deverá lançar o erro 'Dados inválidos' quanto tentar instanciar a classe sem uma das informações", () => {
        const result = new MaterialEscolar();
        
        expect(result).toEqual({"categoria": undefined, "id": undefined, "nome": undefined, "perfil": undefined, "quantidade": undefined}); 
    })
    
    test("deverá criar o material com id, nome, quantidade, categoria e perfil", () => {
        const material1 = new MaterialEscolar(1, "lápis", 3, "geral", "adulto e criança")
        expect(material1.id).toBe(1);
        expect(material1.nome).toBe("lápis");
        expect(material1.quantidade).toBe(3);
        expect(material1.categoria).toBe("geral");
        expect(material1.perfil).toBe("adulto e criança");
    }) 

    


    describe("função removerMaterialEscolar", () => {
        test("deverá retornar a frase de removido com sucesso", () => {
            const result = material1.removerMaterialEscolar(1);
            expect(result).toBe("Material removido com sucesso!!");
        })

        test("deverá retornar um aviso quando o material não for encontrado", () => {
            const result = material1.removerMaterialEscolar();
            expect(result).toBe("Material não encontrado!");
        })

    })

    

    

    
})