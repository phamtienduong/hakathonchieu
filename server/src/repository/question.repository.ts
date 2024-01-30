import db from "../config/db.config"
export const getAllQuestionMySQL = async()=>{
    try {
        const [category] = await db.execute("select * from question")
        return category ;
    } catch (error) {
        console.log(error);
    }
}
export const getQuestionByIdMySQL = async(id:number)=>{
    try {
        const [category] = await db.execute("select * from question  where question_id =?",[id])
        return category ;
    } catch (error) {
        console.log(error);
    }
}
export const getAnswerByQuestionMySQL = async(id:number)=>{
    try {
        const [category] = await db.execute("select * from answer  where question_id =?",[id])
        return category ;
    } catch (error) {
        console.log(error);
    }
}
