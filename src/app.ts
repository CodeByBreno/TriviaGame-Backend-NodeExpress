import "reflect-metadata";
import express, { json, Request } from "express";
import { datasource } from "../data-source";
import { router } from "./routes";
import morgan from "morgan";
import "@config/container";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";

const app = express();

morgan.token("body", (req: Request) => JSON.stringify(req.body));

app.use(morgan(":method :url :status :response-time ms - :body"));

// Middleware de Parsing para o Express aceitar request.body JSON
app.use(json());

// Arquivo de configuração das rotas
app.use(router);

// Middleware para lidar com erros na requisição
app.use(globalErrorHandler);

const connectDatabase = async () => {
  try {
    await datasource.initialize();
    console.log("Conectado ao banco de dados! 💾🛠️");
  } catch (error) {
    console.error(
      "Erro ao conectar com o banco de dados! ❌❌\n[ERROR]:",
      error
    );
    process.exit(1);
  }
};

export { app, connectDatabase };
