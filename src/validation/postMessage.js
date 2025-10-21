import Joi from 'joi';

export const messageSchema = Joi.object({
  name: Joi.string().trim().min(2).max(36).required(),
  email: Joi.string().email().trim().max(64).required(),
  message: Joi.string().min(5).max(560).required(),
});
