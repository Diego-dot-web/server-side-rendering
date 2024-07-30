const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

// TODO /get

exports.messagesIndexGet = asyncHandler(async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { messages });
});

// TODO get /new
// TODO post /new
exports.messageCreatePost = asyncHandler(async (req, res) => {
  const formData = req.body;
  await db.createUser(formData.author, formData.message, new Date());
  res.redirect("/");
});

exports.messageCreateGet = asyncHandler(async (req, res) => {
  res.render("form");
});

// TODO get /message/:index
exports.messageDetailsGet = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const message = await db.getMessage(id);
  res.render("message", { message, id });
});
