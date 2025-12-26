import dotenv from "dotenv"
import Connect_DB from "./db/index.js"
import express from "express"
dotenv.config({
    path: "/.env"
})
const app = express();
Connect_DB()
.then(() =>{
    app.listen(process.env.PORT || 4000 , ()=>{
        console.log(`App is listening on PORT ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log(`MONGO DB CONNECTION ERROR: ${err}`);
})