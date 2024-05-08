const UserModels=require('../models/UserModels') 
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateAccessToken } = require('./TokenController');




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



const loginUser = asyncHandler(async(req,res) => {
    const {Email,Password} =req.body

    const response = await UserModels.findOne({Email:Email})

    if(response){
        const match = await bcrypt.compare(Password,response.Password)

        if(match){
            const token = generateAccessToken(response)
            res.status(200).json({
                id:response._id,
                Firstname:response.Firstname,
                accessToken:token

            })
        }
        else{
            res.status(403).json('password or email mismatch')
        }
    }
    else{
        res.status(404).json({error:'user not found !'})
    }
    
})

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

const getUser = asyncHandler(async (req, res) => {
    const _id = req.params.getuserID;
  
    try {
      // Find the user by userID
      const user = await UserModels.findById(_id);
  
      if (!user) {
        // If user not found, return error response
        return res.status(404).json({ error: "User not found" });
      }
  
      // If user found, return user details
      res.status(200).json(user);
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const getAllUsers = asyncHandler(async (req, res) => {
    try {
      // Find all users
      const users = await UserModels.find();
  
      // If no users found, return empty array
      if (!users || users.length === 0) {
        return res.status(404).json({ error: "No users found" });
      }
  
      // If users found, return user details
      res.status(200).json(users);
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });












    



module.exports = {createUser,loginUser,updateUser,deleteUser,getUser}