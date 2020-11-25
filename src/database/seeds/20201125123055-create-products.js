module.exports = {
  up: async (queryInterface) => await queryInterface.bulkInsert('Product',
    [
      {
        nome: "Cannondale CAAD8",
        marca: "Cannondale",
        preco: 7000.00,
        cod_barras: "372938294820833456765",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: "BMC Teammachine",
        marca: "BMC",
        preco: 17000.00,
        cod_barras: "262938294820833456731",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: "Specialized Tarmac",
        marca: "Specialized",
        preco: 30000.00,
        cod_barras: "122938294820833456732",
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {}),

  down: async (queryInterface) => await queryInterface.bulkDelete('Product', null, {}),
};
