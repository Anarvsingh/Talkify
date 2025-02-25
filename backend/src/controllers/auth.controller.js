import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import cloudinary from "../lib/cloudinary.js";


export const signup = async (req, res) => {
    const { fullName, email, password } = req.body;
    try {
      if (!fullName || !email || !password) {
        return res.status(400).json({ message: "Required field is missing" });
      }
  
      if (password.length < 8) {
        return res.status(400).json({ message: "Password must be at least 8 characters" });
      }
  
      const user = await User.findOne({ email });
  
      if (user) return res.status(400).json({ message: "Email already exists" });
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        fullName,
        email,
        password: hashedPassword,
      });
  
      if (newUser) {
        await newUser.save(); // Save the user first
  
        generateToken(newUser._id, res); // Generate token after saving
  
        res.status(201).json({
          _id: newUser._id,
          fullName: newUser.fullName,
          email: newUser.email,
          profilePic: newUser.profilePic, // Include profilePic even if not uploaded yet
        });
      } else {
        res.status(400).json({ message: "Invalid username or password" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  

export const login = async (req,res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({email})    

        if(!user) {
            return res.status(400).json({message: "Invalid Credentials"})
        }

        const isPasswordCorrect = await bcrypt.compare(password,user.password);
        if(!isPasswordCorrect) {
            return res.status(400).json({message: "Invalid Credentials"});
        }

        generateToken(user._id,res);

        res.status(200).json({
            _id:user._id,
            fullName: user.fullName,
            email: user.email,
            profilePic: user.profilePic,
        });

    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
}

export const logout = (req,res) => {
    try {

        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message: "Logged out Successfully"});

    } catch (error) {
            res.status(500).json({message: "Internal Server Error"});
            
        }
    }
    
    
    
    export const updateProfile = (req,res) => {
        try {
            const { profilePic } = req.body;
            const userId = req.user._id;
            
            if(!profilePic) {
                res.status(400).json({message: "Profile pic is required"});
            }
            
        } catch (error) {
         res.status(500).json({message: "Internal Server Error"});
         
        }
    }
    
    
    export const check = (req,res) => {
        try {
            res.status(200).json(req.user);
        } catch (error) {
            res.status(500).json({message: "Internal Server Error"});
    }
}