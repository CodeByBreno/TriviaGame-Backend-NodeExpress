"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalErrorHandler = globalErrorHandler;
var _AppError = require("../config/AppError");
var _celebrate = require("celebrate");
async function globalErrorHandler(err, request, response, _) {
  console.log(err);
  if (err instanceof _AppError.AppError) {
    return response.status(err.code).json({
      status: "error",
      message: err.message
    });
  }
  if (err instanceof _celebrate.CelebrateError) {
    const details = err.details.values().next().value;
    let messageString;
    if (details && details.details[0] && details.details[0].context) {
      const {
        type,
        context,
        message
      } = details.details[0];
      switch (type) {
        case "any.required":
          messageString = `O campo ${context.label} é obrigatório.`;
          break;
        case "string.base":
          messageString = `O campo ${context.label} deve ser do tipo texto.`;
          break;
        case "string.empty":
          messageString = `O campo ${context.label} não pode ser um texto vazio.`;
          break;
        case "string.min":
          messageString = `O campo ${context.label} não pode ser menor que ${context.limit} caracteres.`;
          break;
        case "string.max":
          messageString = `O campo ${context.label} não pode ser maior que ${context.limit} caracteres.`;
          break;
        case "string.email":
          messageString = `O campo ${context.label} deve ser um email válido.`;
          break;
        case "number.base":
          messageString = `O campo ${context.label} deve ser do tipo número.`;
          break;
        case "number.min":
          messageString = `O campo ${context.label} não pode ser menor que ${context.limit}.`;
          break;
        case "number.max":
          messageString = `O campo ${context.label} não pode ser maior que ${context.limit}.`;
          break;
        case "array.base":
          messageString = `O campo ${context.label} deve ser do tipo array.`;
          break;
        case "array.empty":
          messageString = `O campo ${context.label} não pode ser vazio.`;
          break;
        case "array.min":
          messageString = `O campo ${context.label} não pode ter um tamanho menor que ${context.limit}.`;
          break;
        case "array.max":
          messageString = `O campo ${context.label} não pode ter um tamanho maior que ${context.limit}.`;
          break;
        case "string.length":
          messageString = `O campo ${context.label} deve ter ${context.limit} caracteres.`;
          break;
        case "document.cnpj":
          messageString = `O CNPJ é inválido.`;
          break;
        case "document.cpf":
          messageString = `O CPF é inválido.`;
          break;
        default:
          messageString = message;
          break;
      }
    }
    return response.status(400).json({
      status: "error",
      message: messageString
    });
  }
  return response.status(500).json({
    status: "error",
    message: "Server Error"
  });
}