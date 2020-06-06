import { celebrate, Joi } from 'celebrate'

export default celebrate({
  body: Joi.object().keys({
    title: Joi.string().required(),
    priority: Joi.number().required().min(0).max(2),
    start_date: Joi.string().required(),
    end_date: Joi.string().required(),
    type: Joi.string().required(),
    project: Joi.string().required(),
    description: Joi.string().required(),
  })
})