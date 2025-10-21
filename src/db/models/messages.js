import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    id: { type: String, trim: true },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 36,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 560,
    },
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false },
);

const Message = mongoose.model('Message', messageSchema);
export default Message;
