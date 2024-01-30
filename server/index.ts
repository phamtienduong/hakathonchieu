import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { rootRouter } from "./src/router/root.routes"
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
rootRouter(app)
const PORT:number=7800
app.listen(PORT,()=>{
    console.log("Server is running on port 7800");
})
