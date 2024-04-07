import express from 'express';
import bcrypt from 'bcrypt'; // Corrected typo in the import statement
const router = express.Router();
import { User } from '../models/User.js';
import jwt from 'jsonwebtoken'




router.post('/signup', async (req, res) => { // Make the route handler function async
    try {
        const { userName, registrationNo, email, position, password } = req.body;
        //const user = await User.findOne({ registrationNo }) // Corrected method name to findOne

        const userWithRegNo = await User.findOne({ registrationNo });
        const userWithEmail = await User.findOne({ email });

        if (userWithRegNo && !userWithEmail) {
            res.status(400).json({ message: "User already exists with same registration number and different email address" });

        } else if (!userWithRegNo && userWithEmail) {
            res.status(400).json({ message: "User already exists with same email and different registration number" });

        } else if (userWithRegNo && userWithEmail) {
            res.status(400).json({ message: "User already exists with same email and same registration number" });
        }
        else {
            const hashpassword = await bcrypt.hash(password, 10);
            const newUser = new User({
                userName,
                registrationNo,
                email,
                position,
                password: hashpassword,
            });

            await newUser.save();
            res.status(200).json({ message: "Record registered" });
        }
    } catch (error) {
        console.log(error, error.message);
        res.json(500).json({ message: "internl server error", error: error });
    }
});

router.post('/login',async (req, res) => {
    const {registrationNo, password} = req.body;
    const user = await User.findOne({registrationNo})
    if(!user){
        return res.status(400).json({message: "User is not Registered"})
    }
    const validPassword = await bcrypt.compare(password, user.password)
    if(!validPassword){
        return res.status(400) .json({message : "Password is incorrect"})
    }
    const token = jwt.sign({userName: user.userName}, process.env.KEY,{expiresIn: '1h'})
    res.cookie('token', token, {httpOnly: true, maxAge: 360000})
    return res.json({status: true, message: "Login Successfully"})


})

router.get('/vive', async (req, res) => {
    try {
        const users = await User.find({});
        return res.json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error", error: error });
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const userId = req.params._id;
        const { userName, registrationNo, email, position, password } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if the new registration number or email is already taken by another user
        if (registrationNo && registrationNo !== user.registrationNo) {
            const existingRegNoUser = await User.findOne({ registrationNo });
            if (existingRegNoUser && existingRegNoUser._id.toString() !== userId) {
                return res.status(400).json({ message: "Registration number is already taken" });
            }
        }

        if (email && email !== user.email) {
            const existingEmailUser = await User.findOne({ email });
            if (existingEmailUser && existingEmailUser._id.toString() !== userId) {
                return res.status(400).json({ message: "Email is already taken" });
            }
        }

        // Update user fields
        if (userName) user.userName = userName;
        if (registrationNo) user.registrationNo = registrationNo;
        if (email) user.email = email;
        if (position) user.position = position;
        if (password) {
            const hashpassword = await bcrypt.hash(password, 10);
            user.password = hashpassword;
        }

        // Save the updated user
        await user.save();
        return res.json({ message: "User updated successfully", user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

router.delete('/deleteUser/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.json({ message: "User deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
});


export { router as UserRouter };