import {
  Router
} from "express";
import UsersController from "./app/controllers/UsersController";
import SessionController from "./app/controllers/SessionController";

const routes = new Router();

routes.post("/register", UsersController.store);
routes.put("/redefinePassword", UsersController.update);
routes.put("/editProfile", UsersController.updateName);

routes.post("/session", SessionController.store);

module.exports = routes;