const Usermodel=require("../models/UserModels") //imported usermodel
const bcrypt = require('bcrypt');




exports.UserRegistration = async (req,res) => {

    try {
        // Extract user data from the request body
        const {Email, Password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ Email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(Password, 10);

        // Create a new user instance
        const newUser = new User({
            Email,
            Password: hashedPassword
        });

        // Save the user to the database
        await newUser.save();

        // Return a success response
        return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        // Handle errors
        console.error("Error registering user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }

}

exports.UserLogin = (req,res) =>{


}

