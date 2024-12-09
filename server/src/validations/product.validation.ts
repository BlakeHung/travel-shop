import Joi from 'joi';

export const productSchema = {
  create: Joi.object({
    name: Joi.string().required().min(2).max(100).messages({
      'string.empty': '商品名稱不能為空',
      'string.min': '商品名稱最少 {#limit} 個字符',
      'string.max': '商品名稱最多 {#limit} 個字符',
    }),
    description: Joi.string().required().min(10).messages({
      'string.empty': '商品描述不能為空',
      'string.min': '商品描述最少 {#limit} 個字符',
    }),
    price: Joi.number().required().min(0).messages({
      'number.base': '價格必須是數字',
      'number.min': '價格不能小於 {#limit}',
    }),
    image: Joi.string().required().uri().messages({
      'string.empty': '商品圖片不能為空',
      'string.uri': '圖片必須是有效的URL',
    }),
    category: Joi.string().required().messages({
      'string.empty': '商品類別不能為空',
    }),
    stock: Joi.number().min(0).default(0).messages({
      'number.min': '庫存不能小於 {#limit}',
    }),
  }),

  update: Joi.object({
    name: Joi.string().min(2).max(100),
    description: Joi.string().min(10),
    price: Joi.number().min(0),
    image: Joi.string().uri(),
    category: Joi.string(),
    stock: Joi.number().min(0),
  }),
}; 