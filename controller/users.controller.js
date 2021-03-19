const { connection: conn } = require("../database/connection");

async function all(req, res, next) {
  const [users] = await conn
    .promise()
    .query(`SELECT id, login, name FROM users`);

  if (users.length === 0)
    return next({ status: 404, error: `users not found` });

  const [videogames] = await conn
    .promise()
    .query(
      `select * from scores left join videogames on scores.videogame = videogames.id`
    );

  const result = users.map((e) => {
    e.videogames = videogames
      .filter((a) => a.user === e.id)
      .map(({ user, videogame, ...rest }) => rest);
    return e;
  });

  return res.json(result);
}

async function get(req, res, next) {
  const [users] = await conn
    .promise()
    .query(`SELECT id, login, name FROM users WHERE id = ?`, req.params.id);

  if (users.length === 0)
    return next({ status: 404, error: `users not found` });

  const [videogames] = await conn
    .promise()
    .query(
      `select * from scores left join videogames on scores.videogame = videogames.id`
    );

  const result = users.map((e) => {
    e.videogames = videogames
      .filter((a) => a.user === e.id)
      .map(({ user, videogame, ...rest }) => rest);
    return e;
  });

  return res.json(result);
}

module.exports = { all, get };
