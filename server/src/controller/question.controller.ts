import { Request, Response } from "express";
import { getAllQuestionMySQL, getAnswerByQuestionMySQL, getQuestionByIdMySQL } from "../repository/question.repository";

export const getAllQuestion = async (req: Request, res: Response) => {
    const question = await getAllQuestionMySQL();
    res.status(201).json({
      message: "Lấy thành công",
      data: question,
    });
  };
  export const getQuestionById = async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
      const question = await getQuestionByIdMySQL(Number(id));
      if (!question) return res.status(404).json("Không tìm kiếm thấy");
      res.status(200).json({
        message: "Lấy thành công",
        data: question,
      })
    } catch (error) {
      console.log(error);
    }
  };
  export const getAnswerByQuestion = async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
      const question = await getAnswerByQuestionMySQL(Number(id));
      if (!question) return res.status(404).json("Không tìm kiếm thấy");
      res.status(200).json({
        message: "Lấy thành công",
        data: question,
      })
    } catch (error) {
      console.log(error);
    }
  };