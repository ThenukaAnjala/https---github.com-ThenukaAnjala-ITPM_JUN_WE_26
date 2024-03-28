const UserModels=require('../models/UserModels') 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




const createUser = async(req,res) => {
    const{Firstname,Lastname,Email,Password,ContactNo,BloodType,SecondaryContact,Gender,Language}=req.body

    try{

        const hashedPassword = await bcrypt.hash(Password, 10);
        const createUser = await UserModels.create({Firstname,Lastname,Email,Password:hashedPassword,ContactNo,BloodType,SecondaryContact,Gender,Language})
        res.status(200).json(createUser)
    }catch(error){
        res.status(400).json({error:"User already exist!"})
    }
}



const loginUser = async(req,res) => {
    const {Email,Password} =req.body

    try{
         // Check if the user with the provided email exists
        const user = await UserModels.findOne({Email})
        
        if (!user) {
            return res.status(404).json({error:"User not found"})
        }

        // Compare the provided password with the hashed password stored in the database
        const passwordMatch = await bcrypt.compare(Password, user.Password);

        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid password" });
        }

         // If the email and password are correct, generate a JWT
         const token = jwt.sign({ Email: user.Email, userId:user._id }, 'GuardianoftheHill#0319',{ expiresIn: '29d' });

         // Respond with the JWT
         res.status(200).json({ token })
    }   
    catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const updateUser = async(req,res) => {
    
    const _id = req.params.updateID
    const{Firstname,Lastname,Email,Password,ContactNo,BloodType,SecondaryContact,Gender,Language}=req.body

    try {
        // Check if the user with the provided ID exists
        const user = await UserModels.findById(_id);
        
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Update user fields
        user.Firstname = Firstname || user.Firstname;
        user.Lastname = Lastname || user.Lastname;
        user.Email = Email || user.Email;
        user.ContactNo = ContactNo || user.ContactNo;
        user.BloodType = BloodType || user.BloodType;
        user.SecondaryContact = SecondaryContact || user.SecondaryContact;
        user.Gender = Gender || user.Gender;
        user.Language = Language || user.Language;

        // hash the password and update
        if (Password) {
            const hashedPassword = await bcrypt.hash(Password, 10);
            user.Password = hashedPassword;
        }

        // Save the updated user
        await user.save();

        // Respond with the updated user
        res.status(200).json(user);
    }
    catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const deleteUser = async(req,res) => {

    const _id  = req.params.deleteID; //passing user ID as a route parameter
    
    try {
        // Check if the user with the provided ID exists
        const user = await UserModels.findById(_id);
        
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Delete the user
        await UserModels.findByIdAndDelete(_id);

        // Respond with success message
        res.status(200).json({ message: "User deleted successfully" });
    }

    catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}







    



module.exports = {createUser,loginUser,updateUser,deleteUser}