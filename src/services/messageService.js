import Message from '../db/models/messages.js';

export default async function addMessage(data) {
  const post = { ...data };
  const message = Message.create(post);
  return message;
}
