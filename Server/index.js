import express from "express";
const app = express();
import dotenv from "dotenv"
dotenv.config()
import db from "./db/db.js"
import router from "./router/router.js"
import cors from "cors"
app.use(cors());




app.use(express.json())
app.use("/",router)


const MONGO_URL = process.env.MONGO_URL
app.use(express.urlencoded({extended:true}))
db(MONGO_URL)


const port = process.env.PORT
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})