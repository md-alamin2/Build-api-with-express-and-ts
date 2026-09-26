import express, { Request, Response, Router } from "express";
import config from "./config/index";
import initDB, { pool } from "./config/db";
import { userRoutes } from "./modules/users/user.routes";
import { todoRouters } from "./modules/todos/todo.routes";

const app = express();
const { port } = config;

initDB();

// parser
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Al-amin");
});

// users CRUD
app.use("/users", userRoutes);

// todo CRUD
app.use('/todos', todoRouters)

// 404 route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.path,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
