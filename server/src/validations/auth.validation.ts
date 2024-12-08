import Joi from 'joi';

export const registerSchema = Joi.object({
  username: Joi.string().required().min(2).max(30),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6),
  confirmPassword: Joi.string().required().valid(Joi.ref('password')),
}).messages({
  'string.empty': '{{#label}} 不能為空',
  'string.min': '{{#label}} 最少 {{#limit}} 個字符',
  'string.max': '{{#label}} 最多 {{#limit}} 個字符',
  'string.email': '請輸入有效的電子郵件',
  'any.only': '密碼不匹配',
});

export const loginSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
}).messages({
  'string.empty': '{{#label}} 不能為空',
  'string.email': '請輸入有效的電子郵件',
}); 