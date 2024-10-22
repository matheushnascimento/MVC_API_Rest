//#region imports
import { Router } from "express";
import homeController from "../controllers/HomeController";
//#endregion

const routes = new Router();

routes.get("/", homeController.index);

export default routes;
