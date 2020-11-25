module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Supplier', [
      {
        razao_social: "Agatha e Giovanni Gráfica ME",
        cnpj: "55593745000101",
        nome_fantasia: "Gráfica AG",
        endereco: "R. Acácio Mariotto, 611",
        cidade: "Botucatu",
        uf: "SP",
        telefone: "1439624201",
        email: "orcamento@agathaegiovannigraficame.com.br",
        site: "www.agathaegiovannigraficame.com.br",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        razao_social: "Thomas e Lucas Pizzaria ME",
        cnpj: "46462166000120",
        nome_fantasia: "TL Pizzas",
        endereco: "R. Adaílson Raimundo da Silva, 219",
        cidade: "Ribeirão Preto",
        uf: "SP",
        telefone: "1638326892",
        email: "contato@tlpizzas.com.br",
        site: "www.tlpizzas.com.br",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        razao_social: "Fabiana e Heloisa Consultoria Financeira ME",
        cnpj: "87.962.613/0001-98",
        nome_fantasia: "FH Consult",
        endereco: "R. Adaílson Raimundo da Silva, 219",
        cidade: "Ribeirão Preto",
        uf: "SP",
        telefone: "1626681592",
        email: "fabricacao@fabianaeheloisaconsultoriafinanceirame.com.br",
        site: "www.fabianaeheloisaconsultoriafinanceirame.com.br",
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Supplier', null, {});
  }
};

