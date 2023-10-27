import { db } from "../db.js";

const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200, { "Content-type": "text/html" }).json(data);
  });
};

export default getUsers;
