import { Joi, Segments, celebrate } from "celebrate";

export const verifyGetRandomQuestion = celebrate({
  [Segments.QUERY]: {
    type: Joi.string().required().valid("basic", "image", "match"),
  },
});
