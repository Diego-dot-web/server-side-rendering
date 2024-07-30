const usersController = require("../controllers/usersController");
const { Router } = require("express");

const messsagesRouter = Router();

messsagesRouter.get("/", usersController.messagesIndexGet);

messsagesRouter.get("/new", usersController.messageCreateGet);

messsagesRouter.post("/new", usersController.messageCreatePost);

messsagesRouter.get("/message/:id", usersController.messageDetailsGet);

module.exports = messsagesRouter;
