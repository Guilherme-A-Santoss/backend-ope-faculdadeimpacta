- Para rodar a aplicação baixe o projeto na sua maquina
- Abra a pasta do projeto e rode o comando "yarn", ele ira instalar as bibliotecas necessárias
- Abra o postbird e conecte no seu banco local

PARA VERIFICAR A VERSÃO ABRA O ARQUIVO "package.json" E OLHE NA CHAVE "version".
"Já tem instalado? Está na versão anterior a 1.0.2?":
  - Vá na tabela "SequelizeMeta"
  - Altere o valor da migration "20200929125824-create-costumer.js" para "20200929125824-create-customer.js"
  - Rode o comando "yarn sequelize-cli db:migrate:undo:all"
  - Dentro do postbird, delete a tabela "Costumer" manualmente

Próximos passos
- Rode o comando "yarn sequelize-cli db:migrate" e verifique no postbird se foram criadas as tabelas
- Agora, utilize a api com moderação :D
