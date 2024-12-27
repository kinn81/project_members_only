const db = require("../db/queries");

async function getHomepage(req, res) {
  const messages = await db.getMessages();
  res.render("layouts/homePage", {
    messages: messages,
  });
}

module.exports = {
  getHomepage,
};
