import { Request, Response } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";

interface UserProps {
  _id: unknown;
  role: string;
  email: string;
  password: string;
  __v: number;
}

function generateToken(user: UserProps): string {
  if (process.env.JWT_SECRET) {
    return jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
  } else {
    throw new Error("JWT secret not present");
  }
}

async function register(req: Request, res: Response) {
  console.log(req.body);

  const { email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(401).json({ message: "User already exists!" });
    }
    const user = await User.create(req.body);

    const jwtUser = {
      email: user.email,
      password: user.password,
      role: user.role,
      _id: user._id,
      __v: user.__v,
    };

    const token = generateToken(jwtUser);
    res.status(201).json({ token, user });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

async function login(req: Request, res: Response) {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const jwtUser = {
      email: user.email,
      password: user.password,
      role: user.role,
      _id: user._id,
      __v: user.__v,
    };

    const token = generateToken(jwtUser);

    res.status(201).json({ token, user });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export { register, login };
