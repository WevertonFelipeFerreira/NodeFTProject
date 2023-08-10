import express from "express";
let router = express.Router();

import userController from "./UserController.js";
import teacherController from "./TeacherController.js";
import evaluationController from "./EvaluationController.js";
import courseController from "./CourseController.js";

router.get("/", function (req, res) {
    console.log("olá!");
    res.status(200).json({ message: "Sucesso!!" });
});

router.use("/", userController);
router.use("/", teacherController);
router.use("/", courseController);
router.use("/", evaluationController);

export default router;