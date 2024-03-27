const UserModels=require('../models/UserModels') //imported usermodel
const bcrypt = require('bcrypt');



const createUser = async(req,res) => {
    const{Firstname,Lastname,Email,Password,ContactNo,BloodType,SecondaryContact,Gender,Language}=req.body

    try{
        const createUser = await UserModels.create({Firstname,Lastname,Email,Password,ContactNo,BloodType,SecondaryContact,Gender,Language})
        res.status(200).json(createUser)
    }catch(error){
        res.status(400).json({error:"Input fail"})
    }
}

module.exports = {createUser}