module.exports = {
  up: async (queryInterface) => await queryInterface.bulkInsert('Service',
    [
      {
        nro_servico: "001",
        nome: "Lavagem",
        descricao: "Limpeza superficial da bicicleta, sem desmontagem",
        valor: 60.00,
        prazo_dias: 3,
        categoria: "Manutenção",
        created_at: new Date(),
        updated_at: new Date()

      },
      {
        nro_servico: "002",
        nome: "Revisão Completa",
        descricao: "Desmontagem, regulagem e limpeza da bicicleta, em detalhes.",
        valor: 350.00,
        prazo_dias: 5,
        categoria: "Revisão",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nro_servico: "003",
        nome: "Restauração",
        descricao: "Revisão completa com pintura e personalização.",
        valor: 1000.00,
        prazo_dias: 14,
        categoria: "Personalização",
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {}),

  down: async (queryInterface) => await queryInterface.bulkDelete('Service', null, {}),
};
