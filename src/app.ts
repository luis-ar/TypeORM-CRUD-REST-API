import express from "express";
import morgam from "morgan";
import cors from "cors";
import userRoutes from './routes/user.routes'
const app = express();
app.use(morgam("dev"));
app.use(cors());
app.use(express.json())
app.use(userRoutes)
export default app;
