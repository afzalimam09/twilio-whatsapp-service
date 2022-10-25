import Joi from "joi";

const validateSendMessage = (dataToValidate) => {
  const schema = Joi.object({
    mediaUrl: Joi.string(),
    messageFrom: Joi.string(),
    messageTo: Joi.string().required(),
    messageData: Joi.string(),
  });

  const { error } = schema.validate(dataToValidate);

  if (error) {
    return { err: error.message };
  }
  return {};
};

export { validateSendMessage };
