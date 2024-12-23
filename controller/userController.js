//user interaction 
import User from "../userModel/userModel.js";

//adding it to mongodb
export const create = async( req, res) => {
    try {
        const userData = new User(req.body);
        const {email} = userData;

        const userExist = await User.findOne({email})
        if(userExist){
            return res.status(400).json("User Alderdy exist");
        }
        const savedUser = await userData.save(); 
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json({Error: "Internal Server error"});
    }
}

//accessing from data base:
export const fetch = async ( req, res)=>{
    try {
        const users = await User.find();
        if(users.length === 0 ){
            return res.status(404).json("No user found");
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({Error: "Internal Server error"});
    }
};

export const update = async (req,res) =>{
    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id:id})
        if(!userExist){
            return res.status(404).json("User not found");
        }
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {new: true});
        res.status(201).json(updatedUser);
    } catch (error) {
        res.status(500).json({Error: "Internal Server error"});
    }
}

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id:id})
        if(!userExist){
            return res.status(404).json("User not found");
        }
        await User.findByIdAndDelete(id);
        res.status(201).json("user delelted Successfully")
    } catch (error) {
        res.status(500).json({Error: "Internal Server error"});
    }
}