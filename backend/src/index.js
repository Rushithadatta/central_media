import dotenv from "dotenv"
import Connect_DB from "./db/index.js"
dotenv.config({
    path: "/.env"
})
Connect_DB()