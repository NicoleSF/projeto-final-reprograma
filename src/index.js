// MATERIALESCOLAR.JS

const material = new MaterialEscolar(1, "lápis", 3, "geral", "adulto e criança");
console.log(MaterialEscolar.listaMaterialEscolar);
material.removerMaterialEscolar(2);
console.log(MaterialEscolar.listaMaterialEscolar);

// BENEFICIARIO.JS

const beneficiario = new Beneficiario("Flávia", 11, "12345678911", "Rua das Amoras", "51123456789");
console.log(beneficiario.cpf);
console.log(Beneficiario.listaBeneficiario);
console.log(beneficiario.faixaEtaria());
beneficiario.removerBeneficiario();

// DOACAO.JS

const doacao = new Doacao(beneficiario, material, "14/09/2024");
console.log(Doacao.listaDoacoes);

