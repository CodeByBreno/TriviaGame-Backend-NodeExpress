import { CreateBasicQuestionService } from "../services/Question/CreateBasic/CreateBasicQuestionService";
import { DeleteQuestionService } from "@services/Question/Delete/DeleteQuestionService";
import { FindQuestionByIdService } from "@services/Question/FindById/FindBasicQuestionByIdService";
import { FindRandomQuestionService } from "@services/Question/FindRandom/FindRandomQuestionService";
import { FindManyBasicQuestionService } from "@services/Question/FindSome/FindSomeBasicQuestionService";
import "express-async-errors";
import { Request, Response, Router } from "express";
import { container } from "tsyringe";
import { verifyCreateBasicQuestion } from "@middlewares/Basic/verifyCreateBasicQuestion";
import { verifyGetRandomQuestion } from "@middlewares/Basic/verifyGetRandomQuestion";
import { verifyIDParams, verifyTakeQuery } from "@middlewares/geral";

const questionRouter = Router();

questionRouter.post(
  "/question/basic",
  [verifyCreateBasicQuestion],
  async (req: Request, res: Response) => {
    const data = req.body;
    const service = container.resolve(CreateBasicQuestionService);
    const result = await service.execute(data);
    return res.status(201).json(result);
  }
);

questionRouter.get(
  "/question/random",
  [verifyGetRandomQuestion],
  async (req: Request, res: Response) => {
    const { type } = req.query;
    const service = container.resolve(FindRandomQuestionService);
    const result = await service.execute(type as string);
    return res.status(201).json(result);
  }
);

questionRouter.get(
  "/question/many",
  [verifyTakeQuery],
  async (req: Request, res: Response) => {
    const { take } = req.query;
    const service = container.resolve(FindManyBasicQuestionService);
    const result = await service.execute(parseInt(take as string, 10));
    return res.status(201).json(result);
  }
);

questionRouter.get(
  "/question/:id",
  [verifyIDParams],
  async (req: Request, res: Response) => {
    console.log("rota acessada");
    const { id } = req.params;
    const service = container.resolve(FindQuestionByIdService);
    const result = await service.execute(id);
    return res.status(201).json(result);
  }
);

questionRouter.delete(
  "/question/:id",
  [verifyIDParams],
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const service = container.resolve(DeleteQuestionService);
    const result = await service.execute(id);
    return res.status(201).json(result);
  }
);

export { questionRouter };
