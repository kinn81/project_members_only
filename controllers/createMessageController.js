const db = require("../db/queries");
const pool = require("../db/pool");

async function createMessage(req, res, next) {
  try {
    await pool.query("INSERT INTO messages (title, content) VALUES ($1, $2)", [
      req.body.title,
      req.body.content,
    ]);
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  createMessage,
};
