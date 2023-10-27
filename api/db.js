import "dotenv/config";
import mysql from "mysql";

export const db = mysql.createConnection({
  host: process.env.db_host,
  user: process.env.db_user,
  password: process.env.db_password,
  database: process.env.db_database,
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:" + err.stack);
    return;
  }
  console.log("Conexão bem-sucedida ao MySQL como ID " + db.threadId);
});
