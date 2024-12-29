const db = require('../db/queries');
const pool = require('../db/pool');
const bcrypt = require('bcryptjs');

async function postSignUp(req, res, next) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await pool.query(
      'INSERT INTO users (first_name, last_name, username, password) VALUES ($1, $2, $3, $4)',
      [req.body.fname, req.body.lname, req.body.username, hashedPassword],
    );
    res.redirect('/log-in');
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  postSignUp,
};
