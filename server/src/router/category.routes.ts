import {Express} from "express"
import { addCategory, getAllCategory, getCategoryById } from "../controller/category.controller"

export const categoryRouter = (app:Express)=>{
 app.get("/api/v1/categories",getAllCategory)
 app.get("/api/v1/categories/:id",getCategoryById)
 app.post("/api/v1/categories",addCategory)

}