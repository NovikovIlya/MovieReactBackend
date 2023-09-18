const User = require('./models/User')
const Role = require('./models/Role')
const bcrypt = require('bcryptjs');

class authController {
    async registration(req,res){
        try {
            const {username,password} = req.body;
            const candidate = await User.findOne({username})
            if(candidate){
                return res.status(400).json({message:'Пользователь уже существует'})
            }
            const hashPassword = bcrypt.hashSync(password, salt);
            const user = new User({username,})
        } catch (error) {
            console.log(e)
            res.status(400).json({message:'Registration error'})
        }
    }
    async login(req,res){
        try {
            
        } catch (error) {
            console.log(e)
            res.status(400).json({message:'Login error'})
        }
    }
    async getUser(req,res){
        try {
 
            res.json('server work')
        } catch (error) {
            
        }
    }
}
module.exports = new authController()