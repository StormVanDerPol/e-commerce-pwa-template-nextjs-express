import express from "express";

import me from "./routes/me.js";
import login from "./routes/login.js";
import signup from "./routes/signup.js";
import products from "./routes/products.js";

const router = express.Router();

router.get("/me", async (req, res) => {
    await me(req, res)
})

router.post("/login", async (req, res) => {

    const { username, password } = req.body;

    await login(req, res, {
        username,
        password,
    });
});

router.post("/signup", async (req, res) => {

    const { username, password } = req.body;

    await signup(req, res, {
        username,
        password,
    });
});

router.get("/products", async (req, res) => {

    await products(req, res);
});

export default router;