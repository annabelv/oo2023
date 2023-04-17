import express, { Express, Request, Response } from "express";
import pakiautomaadid from "./parcelmachines";
import elekter from "./elekter";
import maksmine from "./maksmine";
import cors from "cors";
import mongoose from "mongoose";
import artiklid from "./articleController";


const app: Express = express();
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/', pakiautomaadid);
app.use('/', elekter);
app.use('/', maksmine);
app.use('/', artiklid);

mongoose.connect("mongodb+srv://annabelv:1q0ocvmn@cluster0.ztrznet.mongodb.net/test");
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

app.listen(3000,() => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});