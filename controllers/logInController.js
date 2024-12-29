const db = require('../db/queries');
const pool = require('../db/pool');
const bcrypt = require('bcryptjs');

async function postLogIn(req, res, next) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [
      req.body.username,
      hashedPassword,
    ]);
    res.redirect('/');
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  postLogIn,
};
