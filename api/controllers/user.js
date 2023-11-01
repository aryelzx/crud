import { db } from "../db.js";

const getUsers = (_, res) => {
  const sql = "SELECT * FROM usuarios";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);

    return res.status(200, { "Content-type": "application/json" }).json(data);
  });
};

const createUser = (req, res) => {
  const { nome, email, fone, data_nascimento, profissao } = req.body;
  const sql = `
  INSERT INTO crudnode.usuarios (
    nome,
    email,
    fone,
    data_nascimento,
    profissao
  ) VALUES (
    '${nome}',
    '${email}',
    '${fone}',
    '${data_nascimento}',
    '${profissao}'
      )
  `;

  db.query(sql, (err, data) => {
    if (err) return res.json(err);

    return res.status(201, { "Contet-type": "application/json" }).json(data);
  });
};

export { createUser, getUsers };
