const UserModels=require('../models/UserModels') //imported usermodel
const bcrypt = require('bcrypt');




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
    const {Email,Password}=require.body
}

module.exports = {createUser}