const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const { Router } = require("express");

const messsagesRouter = Router();

messsagesRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

messsagesRouter.get("/new", (req, res) => {
  res.render("form");
});

messsagesRouter.post("/new", (req, res) => {
  const formData = req.body;

  messages.push({
    text: formData.message,
    user: formData.author,
    added: new Date(),
  });
  res.redirect("/");
});

messsagesRouter.get("/message/:index", (req, res) => {
  const { index } = req.params;

  res.render("message", { message: messages[index], id: index });
});

module.exports = messsagesRouter;
