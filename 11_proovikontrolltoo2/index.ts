import express, { Express, Request, Response } from "express";
import artiklid from "./controllers/articleController";
import commentController from "./controllers/commentController";
import mongoose from "mongoose";


mongoose.connect("mongodb+srv://annabelv:*****@cluster0.ztrznet.mongodb.net/test");
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

const app: Express = express();
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use("/artiklid", artiklid);
app.use('/kommentaarid', commentController);
app.use("/static", express.static("public"));


app.listen(3000,() => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});