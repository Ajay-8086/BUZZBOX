const bcrypt = require('bcrypt')
const validation = require('../utilities/validation')
const usersModel = require('../models/usersSchema')
const sendMail = require('../utilities/sendMail')
module.exports = {
    // user home page getting 
    getUserHome:(req,res)=>{
        try {
            res.status(200).send('User home')
        } catch (error) {
            res.status(500).send('Internal server error')
        }
    },
    //user signup  rendering
    getUserSignup:(req,res)=>{
        try {
           res.status(200).send('user signup')
        } catch (error) {
            res.status(500).send('Internal server error')
        }
    },
    postUserSignup:async(req,res)=>{
        try {
            const{userName,firstName,lastName,DOB,email,password,confirmPassword} =  req.body
            const exisistUser = await usersModel.findOne({email})
            if(exisistUser){
                return  res.status(400).send('User already exist')
            }
             else if(!validation.validationFields([userName,firstName,lastName,DOB,email,password])){
              return  res.status(400).send('All fields are required')
            }else if(!validation.emailValidation(email)){
                return  res.status(400).send('Invalid email format')
            }else if(!validation.pwdValidation(password)){
                return  res.status(400).send('Invalid password format')
            }else if(!validation.confirmPwd(password,confirmPassword)){
                return  res.status(400).send('password and confirm password should match')
            }else{
                // password hashing 
                const hasPassword  =await bcrypt.hash(password,10) 
                const newUser = new usersModel({
                    userName,
                    firstName,
                    lastName,
                    DOB,
                    email,
                    password:hasPassword
                })
                await newUser.save()
                const generateOTP = req.session.generateOTP || Math.floor(1000 + Math.random() * 9000);
                req.session.generateOTP = generateOTP;
                req.session.otp_email = email;
                await sendMail(email, `${generateOTP}`);
                res.status(200).send('Successfully registerd verify the otp')
            }
        } catch (error) {
            res.status(500).send('Internal server error')
        }
    }
}