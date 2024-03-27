const mongoose = require ('mongoose');//required mongoose(mongoose=driver  for mongodb)

const userSchema= new mongoose.Schema({

    Firstname: {type : String , required : true}, 
    Lastname:{ type :String,required:true},
    Email: {type:String,unique:true,lowercase:true,required:true},
    Password: {type:String,required:true},
    ContactNo: {type:Number,required:true,minlength:10},
    BloodType: {type:String, enum:['A','B','AB', 'O']} ,//enum is used to limit the values of a field to specific values
    SecondaryContact:{type: Number},
    Gender:{type:String,enum:['Male','Female']},
    Language:{type:String,default:'English'}
 

},{timestamps:true})

const UserModels = mongoose.model('UserModels',userSchema, 'UserCollection');
module.exports = UserModels;
