import mongoose from "mongoose"
import { DB_NAME } from "../constants.js";
const Connect_DB = async () =>{
    try {
       const Connection_Instance =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log(`DB connected!! Host: ${Connection_Instance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection Failed" , error);
        process.exit(1)
    }
}
export default Connect_DB