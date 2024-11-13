import { questionRouter } from "./routes/basicQuestionRouter";
import { Router } from "express";

const router = Router();

router.use(questionRouter);

export { router };
