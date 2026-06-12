import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        // 1. Get data from request body
        const { name, email, password } = req.body;

        // 2. Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // 3. Hash password
        const saltRounds = 10;
        const hashedPassword =
        await bcrypt.hash(
        password,
        saltRounds
        );

        // 4. Create new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        // 5. Send success response
        res.status(201).json({
            success: true,
            message: "User created successfully"
        });

    } catch (error) {
        // Handle error
        console.error(error);
        res.status(500).json({
            message: "Server error"
        });
    }
};