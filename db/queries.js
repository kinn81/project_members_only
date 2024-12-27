const pool = require("./pool");

async function getMessages() {
  console.log("Attempting to retrieve messages");

  try {
    //const { rows } = await pool.query("SELECT * FROM messages");
    const { rows } = await pool.query(
      "select m.title, m.content,m.created_at,u.first_name || ' ' || u.last_name AS createdBy from messages m join users u on m.user_id = u.id "
    );
    console.log("Messages reteieved:", rows.length);
    return rows;
  } catch (err) {
    console.error("Error in getMessages:", err);
    throw err;
  }
}

module.exports = {
  getMessages,
};
