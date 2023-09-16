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
