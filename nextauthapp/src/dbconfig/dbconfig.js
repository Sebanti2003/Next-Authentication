import mongoose from "mongoose";
export async function connect(){
    try {
        await mongoose.connect(process.env.MONGO_URL)
        const connection=mongoose.connection;
        connection.on('connected',()=>{
            console.log('Connected mongodb succesfully');
        })
        connection.on('error',(err)=>{
            console.log(err);
            console.log('Something is wrong');
            process.exit();
        })
    } catch (error) {
       console.log(error.message); 
    }
}