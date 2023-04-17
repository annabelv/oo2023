import { Request, Response, Router } from "express";
import mongoose from "mongoose";
import Article from "./models/article";

const router: Router = Router();

router.get('/article/:pealkiri/:sisu', async (req: Request, res: Response) => {
  console.log(req.body);
  const data = new Article({  
      header: req.params.pealkiri,
      content: req.params.sisu
  })

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave)
  }
  catch (error) {
    res.status(400).json({message: error})
  }
})

router.get('/artikliloetelu', async (req: Request, res: Response) => {
  try{
    const data = await Article.find();
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error})
  }
})

router.get('/article/:id', async (req: Request, res: Response) => {
  try{
    const data = await Article.findById(req.params.id);
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error})
  }
})


export default router;