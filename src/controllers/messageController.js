import createError from 'http-errors';
import { messageSchema } from '../validation/postMessage.js';
import addMessage from '../services/messageService.js';

export default async function postMessageController(req, res, next) {
  try {
    const data = req.body;
    const { error, value: post } = messageSchema.validate(data, {
      abortEarly: false,
    });

    if (error) {
      const emailError = error.details.find(
        (detail) => detail.context.key === 'email',
      );
      if (emailError) {
        throw createError(400, 'Invalid email');
      }
      throw createError(400, 'Validation failed');
    }

    const savedMessage = await addMessage(post);

    res.status(201).json({
      status: 201,
      message: 'Message created successfully',
      data: savedMessage,
    });
  } catch (error) {
    next(error);
  }
}
