const pool = require("./pool");

async function createUser(username, message, date) {
  await pool.query(
    "INSERT INTO messages_i8oy (username, message, date) VALUES ($1, $2, $3)",
    [username, message, date],
  );
}

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages_i8oy");
  return rows;
}

async function getMessage(id) {
  const { rows } = await pool.query(
    "SELECT * FROM messages_i8oy WHERE id = $1",
    [id],
  );

  return rows[0];
}

module.exports = {
  createUser,
  getAllMessages,
  getMessage,
};
