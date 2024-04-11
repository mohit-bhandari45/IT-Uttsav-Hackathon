import mongoose from "mongoose"

const connectDB= () =>{
    mongoose.connect(process.env.ATLAS_URI).then(data=>{
        console.log("connection to database successfull")
    }).catch(err=>{
        console.log("connection to database failed")
        throw err;
    })
}

export default connectDB