import { db } from "../../db.js";

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

const updateUser = (req, res) => {
  const { nome, email, fone, data_nascimento, profissao } = req.body;
  const sql = `
    UPDATE crudnode.usuarios
    SET nome = '${nome}',
        email = '${email}',
        fone = '${fone}',
        data_nascimento = '${data_nascimento}',
        profissao = '${profissao}',
  `;
  db.query(
    sql,
    [{ nome, email, fone, data_nascimento, profissao }, req.params.id],
    (err, data) => {
      if (err) return res.json(err);

      return res.status(201, { "Contet-type": "application/json" }).json(data);
    }
  );
};

const deleteUser = (req, res) => {
  const { id } = req.query;

  const sql = `
    DELETE FROM crudnode.usuarios 
    WHERE id = ${id} 
  `;

  db.query(sql, id, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export { createUser, deleteUser, getUsers, updateUser };
