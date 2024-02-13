import studentModel from "../model/studentModel.js";

const createstudent = async function (req,res){
    try{
 let data = req.body;
 let {fullName,email,password,phoneNO,address} = data
 console.log(data)
 if(!fullName || !email || !password || !phoneNO ||!address) 
 return res.send({message:"Fill All Data"})
const existingStudent = await studentModel.findOne({email})
if(existingStudent){
    return res.status(200).send({success:false,message:"Already Register please login"})
}

const student = await new studentModel({
   fullName,email,password,phoneNO,address 
}).save()

res.status(201).send({success:true,messae:"student create successfully",student})

    }catch(error){
        console.log(error)
res.status(500).send({success:false,message:"error in create",error})
    }
}

const getStudent = async function (req,res){
    try{
    const data = await studentModel.find()
    res.status(200).send({success:true,message:"all student",data})



    }catch(error){
        console.log(error)
        res.status(500).send({sussess:false,messsage:"error in get",error})
    }
}


const getId = async function (req,res){
    try{
   const {id} = req.params;
   const data = await studentModel.findById({_id:id})
   res.status(200).send({success:true,message:"Id  by student",data})


    }catch(error){
console.log(error)
res.status(500).send({success:false,message:"error in getby id",  error})
    }
}

const updateStudent = async function (req,res){
try{
    let {id} = req.params;
    let data = req.body
    let  update = await studentModel.findOneAndUpdate({_id:id},{
        
           $set:{fullName:data.fullName,
            email:data.email,
            password:data.password,
            phoneNO:data.phoneNO,
            address:data.address
        
    }},{new:true,upsert:true})
 res.status(201).send({success:true,message:"update sucessfully",update})
}catch(error){
    console.log(error)
        res.status(500).send({success:false,message:"error in upadteStudent",error})
    
}
}



  const deleteStudent = async function (req,res){
    try{
   const data = await studentModel.deleteMany()
   res.status(201).send({success:true,message:"all delete sucessfully",data})
    }catch(error){
    console.log(error)
        res.status(500).send({success:false,message:"error in upadteStudent",error})
    
}
  }
   
  const  deleteId = async function (req,res){
    try{
    const {id}= req.params;
    const data =  await studentModel.findByIdAndDelete({_id:id})
    res.status(201).send({success:true,message:"delete by Id sucessfully",data})

    }catch(error){
        console.log(error)
            res.status(500).send({success:false,message:"error in upadteStudent",error})
        
    }

  }




export  default {createstudent,getStudent,getId,updateStudent,deleteStudent,deleteId}
