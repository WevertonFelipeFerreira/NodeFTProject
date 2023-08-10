import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: "mssql", // Tipo de banco de dados
    host: "WEVERTON\\SQLEXPRESS", // Host do SQL Server
    database: "lgpd-database", // Nome do banco de dados
    // username: "SeuNomeDeUsuario", // Nome de usuário
    // password: "SuaSenha", // Senha
    dialectOptions: {
      authentication: {
        type: "default",
        options: {
          encrypt: false,
        },
      },
    },
  });

export default sequelize;