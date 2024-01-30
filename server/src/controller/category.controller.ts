import { Request, Response } from "express";
import {
  addCategoryMySQL,
  getAllCategoryMySQL,
  getCategoryByIdMySQL,
} from "../repository/category.repository";

export const getAllCategory = async (req: Request, res: Response) => {
  const category = await getAllCategoryMySQL();
  res.status(201).json({
    message: "Lấy thành công",
    data: category,
  });
};
export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const category = await getCategoryByIdMySQL(Number(id));
    if (!category) return res.status(404).json("Không tìm kiếm thấy");
    res.status(200).json({
      message: "Lấy thành công",
      data: category,
    })
  } catch (error) {
    console.log(error);
  }
};

export const addCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const result = await addCategoryMySQL(name);
    if (!result) {
      res.status(500).json({
        message: "Có lỗi khi thêm ",
      });
    } else {
      res.status(201).json({
        message: "Thêm thành công",
        result,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
// export const updateStatus = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const { status } = req.body;
//     const todo = await updateStatusMySQL(Number(id) , status);
//     if (!todo) {
//       return res.status(404).json({
//         messeage: "Lỗi  cập nhật dữ liệu",
//         todo,
//       });
//     }
//     res.status(200).json({
//       message: "Cập nhập thành công",
//       todo,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const deleteTodo = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await deleteTodosMySQL(+id);
//   res.status(200).json({
//     message: "Xoá sản phẩm thành công",
//     result,
//   });
// };
