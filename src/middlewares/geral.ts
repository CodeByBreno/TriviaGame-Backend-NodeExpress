import { Joi, Segments, celebrate } from "celebrate";

export const verifyTakeQuery = celebrate({
  [Segments.QUERY]: {
    take: Joi.number().required(),
  },
});

export const verifyIDParams = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});
