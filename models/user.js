import mongoose, { mongo } from "mongoose"

const userSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        }
    }
)
const travel = mongoose.model('travel',travelSchema);
export default travel;