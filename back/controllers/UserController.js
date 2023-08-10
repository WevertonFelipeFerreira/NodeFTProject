import express from "express";
let router = express.Router();

import userService from "../services/UserService.js"

router.post("/users", async function (req, res) {
    const userModel = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender,
    }

    const userCreated = await userService.saveUser(userModel);

    return res.status(201).json(userCreated);
});

router.get("/users", async function (req, res) {
    const allUsers = await userService.getAllUsers();

    res.status(200).json(allUsers);
})

router.get("/users/:id", async function (req, res) {
    const user = await userService.getUserById(req.params.id);

    res.status(user).json(user);
});

router.put("/users/:id", async function (req, res) {
    const userModel = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender,
    }

    const message = await userService.updateUser(req.params.id, userModel)

    return res.status(200).json(message);
});

router.delete("/users/:id", async function (req, res) {
    const message = await user.userService(req.params.id);

    return res.status(204);
});

export default router;
