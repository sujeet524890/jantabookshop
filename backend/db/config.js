import mongoose from 'mongoose'

const mongodb = ()=>{
try{ 


mongoose.connect('mongodb://localhost:27017/')
 console.log("conected")

}catch{
               console.log("not connected")
}}
export default mongodb;