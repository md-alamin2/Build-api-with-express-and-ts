import express, { Request, Response } from "express";
import { pool } from "../../config/db";
import { userControllers } from "./user.controller";

const router = express.Router();

router.post("/", userControllers.createUser);

router.get("/", userControllers.getUser);

// get single user
router.get("/:id", userControllers.getSingleUser);

// user update
router.put("/:id", userControllers.updateUser);


// user delete
router.delete("/:id", userControllers.deleteUser);

export const userRoutes = router;