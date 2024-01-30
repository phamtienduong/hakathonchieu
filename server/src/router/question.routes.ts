import {Express} from "express"
import { getAllQuestion, getAnswerByQuestion, getQuestionById } from "../controller/question.controller"


export const questionRouter = (app:Express)=>{
 app.get("/api/v1/question",getAllQuestion)
 app.get("/api/v1/question/:id",getQuestionById)
 app.get("/api/v1/question/:id/answer",getAnswerByQuestion)

}