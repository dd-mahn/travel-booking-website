import mongoose from "mongoose";

const subscribeSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            required:true
        }
    }
)

export default mongoose.model("Subscribe", subscribeSchema);
