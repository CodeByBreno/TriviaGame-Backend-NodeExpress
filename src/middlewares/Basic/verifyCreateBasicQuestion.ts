import { Joi, Segments, celebrate } from "celebrate";

export const verifyCreateBasicQuestion = celebrate({
  [Segments.BODY]: {
    text: Joi.string().required(),
    image_url: Joi.string().allow(""),
    time: Joi.number().default(30),
    options: Joi.array().items(
      Joi.object({
        text: Joi.string(),
        correct: Joi.boolean(),
      })
    ),
  },
});
