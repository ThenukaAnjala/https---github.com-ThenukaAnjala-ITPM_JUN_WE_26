const UserModels=require('../models/UserModels') //imported usermodel
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




const createUser = async(req,res) => {
    const{Firstname,Lastname,Email,Password,ContactNo,BloodType,SecondaryContact,Gender,Language}=req.body

    try{

        const hashedPassword = await bcrypt.hash(Password, 10); // 10 is the salt rounds
        const createUser = await UserModels.create({Firstname,Lastname,Email,Password:hashedPassword,ContactNo,BloodType,SecondaryContact,Gender,Language})
        res.status(200).json(createUser)
    }catch(error){
        res.status(400).json({error:"Input fail"})
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
         const token = jwt.sign({ Email: user.Email, userId:user._id }, 'GuardianoftheHill#0319',{ expiresIn: '30d' });

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
    const{Firstname,Lastname,Email,Password,ContactNo,BloodType,SecondaryContact,Gender,Language}=req.body

}


    



module.exports = {createUser,loginUser}