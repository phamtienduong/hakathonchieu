import { Express } from 'express';
import { categoryRouter } from './category.routes';
import { questionRouter } from './question.routes';
export const rootRouter = (app:Express)=>{
    categoryRouter(app),
    questionRouter(app)
}