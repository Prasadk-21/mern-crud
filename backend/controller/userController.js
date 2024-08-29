import User from "../model/userModel.js";

//creating user data
export const create = async(req, res)=>{
    try{
        const userData =new User(req.body);

        if(!userData){
            return res.status(404).json({msg: "User data not found"});
        }

        const savedData= await userData.save();
        //res.status(200).json(savedData);
        res.status(200).json({msg: "User Created Succesfully!"});

    }catch (error){
        res.status(500).json({error: error});
    }
}


//Fetching User Data

export const getAll = async(req,res)=>{
    try{

        const userData= await User.find();

        if(!userData){
            res.status(404).json({msg: "User's Data not Found"});
        }

        res.status(200).json(userData);

    }catch(error){
        res.status(500).json({error: error});
    }
}

//Accessing a particular record

export const getOne = async(req,res) =>{
    try{
        const id = req.params.id;

        const userExist = await User.findById(id);

        if(!userExist){
            return res.status(404).json({msg: "User not found"});
        }

        res.status(200).json(userExist);

    }catch (error){
        res.status(500).json({error: error});
    }
}


//Update User Data

export const update =async(req, res)=>{
    try{

        const id = req.params.id;
        const userExist = await User.findById(id); 


        if(!userExist){
            return res.status(401).json({msg: "User not found"});
        }

        const updatedData = await User.findByIdAndUpdate(id, req.body, {new:true});   
        res.status(200).json({msg: "User Updated Successfully!"});
        
    }catch(error){
        res.status(500).json({error: error});
    }
}

//deleting the user data

export const deleteUser= async(req, res)=>{
    try{
        const id = req.params.id;
        const userExist= await User.findById(id);

        if(!userExist){
            return res.status(404).json({msg: "User not exist"});
        }

        await User.findByIdAndDelete(id);
        res.status(200).json({msg: "User deleted Succesfully:"});

    }catch (error){
        res.status(500).json({error: error});
    }
}