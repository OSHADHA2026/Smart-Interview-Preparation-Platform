import express from "express";
import { register } from "../controllers/Register.js";
import { login } from "../controllers/Login.js";

const router = express.Router();

router.get("/test", (req, res) => {
    res.json({
        message: "Auth Route Working"
    });
});

router.post(
    "/register", (req, res) => {
        register(req, res);
    }
);

router.post(
    "/login",
    (req, res) => {
        login(req, res);
    }
);

export default router;