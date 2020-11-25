module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Customer', [
      {
        cpf: "04027553080",
        nome: "Kamilly Rodrigues",
        data_nascimento: '1999-10-11',
        sexo: "F",
        endereco: "Tv Fernando Madureira, 910",
        cidade: "Aracaju",
        uf: "SE",
        telefone: "7925816682",
        email: "kamillyrodrigues_@live.com",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: "62782974858",
        nome: "Jennifer Lima",
        data_nascimento: '1999-10-12',
        sexo: "F",
        endereco: "R. Antônio Sabino, 943",
        cidade: "Rio das Ostras",
        uf: "RJ",
        telefone: "2228717262",
        email: "jenniferlima@studiodeideias.com",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: "45249189300",
        nome: "Alana Teixeira",
        data_nascimento: '1999-10-10',
        sexo: "F",
        endereco: "R. João Gurgel Nogueira, 563",
        cidade: "Fortaleza",
        uf: "CE",
        telefone: "8536439956",
        email: "alanateixeira@netpont.com.br",
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Customer', null, {});
  }
};
