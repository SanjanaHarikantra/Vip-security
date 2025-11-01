import express, { json } from "express";
import Soldier from "./models/soldiers.model.js";
import cors from "cors";
//CORS (Cross-Origin Resource Sharing) is a mechanism that allows a web application
//  running on one origin to access resources from a different origin
const app = express();

app.use(cors("https://vip-security-2.onrender.com/"));
app.use(express.json());

// app.get("/", async (req, res) => {
//   const result = await Soldier.find({}, { __v: 0 });
//   res.status(200).json(result);
// });

import soldierRouter from './routes/soldiers.router.js';
export { app };

