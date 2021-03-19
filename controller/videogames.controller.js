const { connection: conn } = require("../database/connection");

async function all(req, res, next) {
  console.log("all videogames");
  const [rows, fields] = await conn.promise().query(`SELECT * FROM videogames`);
  if (rows.length === 0)
    return next({ status: 404, error: `videogames not found` });
  return res.json(rows);
}

async function get(req, res, next) {
  let id = req.params.id;
  const [
    rows,
    fields,
  ] = await conn.promise().query(`SELECT * FROM videogames WHERE id = ?`, [id]);
  if (rows.length === 0)
    return next({ status: 404, error: `videogames not found` });
  return res.json(rows);
}

module.exports = { all, get };
