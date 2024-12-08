import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { ApiError } from '../utils/ApiError';

export const authController = {
  // 註冊
  async register(req: Request, res: Response) {
    const { username, email, password } = req.body;

    try {
      // 檢查用戶是否已存在
      const existingUser = await User.findOne({
        $or: [{ email }, { username }],
      });

      if (existingUser) {
        throw new ApiError(400, '用戶名或電子郵件已被使用');
      }

      // 創建新用戶
      const user = new User({
        username,
        email,
        password,
      });

      await user.save();

      res.status(201).json({
        message: '註冊成功',
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        },
      });
    } catch (error) {
      throw error;
    }
  },

  // 登入
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      // 查找用戶
      const user = await User.findOne({ email });
      if (!user) {
        throw new ApiError(401, '帳號或密碼錯誤');
      }

      // 驗證密碼
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        throw new ApiError(401, '帳號或密碼錯誤');
      }

      // 生成 JWT
      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET!,
        { expiresIn: '7d' }
      );

      res.json({
        token,
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          avatar: user.avatar,
        },
      });
    } catch (error) {
      throw error;
    }
  },

  // 獲取當前用戶信息
  async getMe(req: Request, res: Response) {
    try {
      const user = await User.findById(req.user?.id).select('-password');
      if (!user) {
        throw new ApiError(404, '用戶不存在');
      }

      res.json(user);
    } catch (error) {
      throw error;
    }
  },
}; 