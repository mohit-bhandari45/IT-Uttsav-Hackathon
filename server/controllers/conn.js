import mongoose from "mongoose"

const connectDB= () =>{
    try {
        if(mongoose.connect(process.env.ATLAS_URI)){
            console.log("Connection Successfull")
        }else{
            console.log("Database connection failed")
        }
    } catch (e) {
        console.log(e)
    }
}

export default connectDB