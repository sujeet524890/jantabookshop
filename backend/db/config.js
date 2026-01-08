import mongoose from 'mongoose'

const mongodb = ()=>{
try{ 


mongoose.connect('mongodb+srv://sujeet524890_db_user:x1ZGxkWB6j6H8P4i@cluster0.iui9zsc.mongodb.net/')
 console.log("conected")

}catch{
               console.log("not connected")
}}
export default mongodb;