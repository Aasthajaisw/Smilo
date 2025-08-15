
import express from "express" ;//allow us to build api super quickly and easily
import "dotenv/config";

import authRoutes from "./routes/auth.js";


const app=express();
const PORT=process.env.PORT  //Reads the value of the environment variable named PORT from the system

app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
 console.log(`server is running on this port ${PORT}`);
}
);