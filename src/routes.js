import { Router } from "express";
import multer from "multer";
import authMiddleware from "./app/middlewares/auth";

import multerConfig from "./config/multer";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import ProductController from "./app/controllers/ProductController";
import CategoryController from "./app/controllers/CategoryControllers";
import OrderController from "./app/controllers/OrderController";

const routes = new Router();
const Upload = multer(multerConfig);


routes.post('/users',  UserController.store) ;
routes.post("/session", SessionController.store);

routes.use(authMiddleware);

routes.post("/products", Upload.single("file"), ProductController.store)
routes.get("/products",  ProductController.index);
routes.put("/products/:id", Upload.single("file"), ProductController.update)

routes.post("/Categories",  Upload.single("file"),CategoryController.store);
routes.get("/Categories",  CategoryController.index);
routes.put("/categories/:id", Upload.single("file"), CategoryController.update)


routes.post("/Orders", OrderController.store);
routes.get("/orders", OrderController.index);
routes.put("/orders/:id", OrderController.update);

  export default routes;