const db = require('../db/queries');
const pool = require('../db/pool');

async function createMessage(req, res, next) {
  try {
    await pool.query('INSERT INTO messages (title, content, user_id) VALUES ($1, $2, $3)', [
      req.body.title,
      req.body.content,
      req.user.id,
    ]);
    res.redirect('/');
  } catch (err) {
    return next(err);
  }
}

async function deleteMessage(req, res, next) {
  try {
    await pool.query('DELETE FROM messages WHERE id = $1', [req.params.id]);
    res.redirect('/');
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  createMessage,
  deleteMessage,
};
