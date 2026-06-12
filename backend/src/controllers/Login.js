import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    try {
        // 1. Get email and password
        const { email, password } = req.body;

        // 2. Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }
        // 3. Compare passwords
        const isMatch =
        await bcrypt.compare(
        password,
        user.password
        );

        if (isMatch) {
            return res.status(201).json({
                success: true,
                message: "Login successful"
            });
        }

        // 4. Generate JWT token
        const token = jwt.sign(
            {
                // payload
                id: user._id,
                email: user.email
            },
            // secret key,
            process.env.JWT_SECRET,
            {
                // options
                expiresIn: "1h"
            }
        );

        // 5. Return token
        res.json({
            token
        });

    } catch (error) {
        // Handle error
        console.error(error);
        res.status(500).json({
            message: "Server error"
        });
    }
};