import express from "express";
import routes from "./routes";
import { resolve }  from "node:path";
import "./database";

class App {
    constructor() {
        this.app = express()


        this.middlewares();
        this.routes();
    }



    middlewares() {
        this.app.use(express.json());
        this.app.use("/product-file", express.static(resolve(__dirname, "..", "Uploads")),
    );
    this.app.use(express.json());
        this.app.use("/category-file", express.static(resolve(__dirname, "..", "Uploads")),
    );



    }



    routes() {
        this.app.use(routes);
    }
}

export default new App().app;

