
import db from "../config/db.config"

export const getAllCategoryMySQL = async()=>{
    try {
        const [category] = await db.execute("select * from category")
        return category ;
    } catch (error) {
        console.log(error);
    }
}
export const getCategoryByIdMySQL = async(id:number)=>{
    try {
        const [category] = await db.execute("select * from category  where category_id =?",[id])
        return category ;
    } catch (error) {
        console.log(error);
    }
}

export const addCategoryMySQL = async(name:string)=>{
    try {
         const [category]= await db.execute("insert into category (name) values (?)",[name])
         return category
    } catch (error) {
        console.log(error);
    }
}
export const updateStatusMySQL = async(id:number,status:string)=>{
    try {
         const [todos]= await db.execute("update todolist set status = ? where id = ?",[status,id])
         return todos
    } catch (error) {
        console.log(error);
    }
}
export const deleteTodosMySQL = async(id:number)=>{
    try {
         const [todos]= await db.execute("delete from todolist where id = ?",[id])
         return todos
    } catch (error) {
        console.log(error);
    }
}
