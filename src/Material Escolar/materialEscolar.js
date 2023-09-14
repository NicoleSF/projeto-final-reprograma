class MaterialEscolar {
    id;
    nome;
    quantidade;
    categoria;
    perfil;
    static listaMaterialEscolar = [];

    constructor(id, nome, quantidade, categoria, perfil){
        if(!id || !nome || !quantidade || !categoria || !perfil){
            return "Dados inválidos";
        }
        this.id = id;
        this.nome = nome;
        this.quantidade = quantidade;
        this.categoria = categoria;
        this.perfil = perfil;
        MaterialEscolar.listaMaterialEscolar.push(this);
    }


    removerMaterialEscolar(idMaterialEscolar){
        const encontrarId = MaterialEscolar.listaMaterialEscolar.findIndex((idMaterialLista) => idMaterialLista.id === idMaterialEscolar);

        if(encontrarId !== -1){
            MaterialEscolar.listaMaterialEscolar.splice(encontrarId, 1);
            return "Material removido com sucesso!!";
        }else {
            return "Material não encontrado!"
        }

    }

    
}

module.exports = MaterialEscolar;

// const material = new MaterialEscolar(1, "lápis", 3, "geral", "adulto e criança");
// const material2 = new MaterialEscolar(2, "borracha", 4, "geral", "adulto e criança");
// const material3 = new MaterialEscolar(3, "caderno", 5, "geral", "adulto e criança");
// console.log(MaterialEscolar.listaMaterialEscolar);
// material.removerMaterialEscolar(2);
// console.log(MaterialEscolar.listaMaterialEscolar);

// const material = new MaterialEscolar(1);
// console.log(material);
