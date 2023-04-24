import { Request, Response, Router } from "express";
import Article from "../models/article";


const router: Router = Router();

router.get("/proov", async (req: Request, res: Response) => {
	res.send("abc");
})

router.get('/salvesta/:pealkiri/:sisu', async (req: Request, res: Response) => {
  const nArt = new Article({
      header: req.params.pealkiri,
      content: req.params.sisu
  })

  try {
    const dataToSave = await nArt.save();
	const data = await Article.find();
    res.json(data)
    //res.status(200).json(dataToSave)
  }
  catch (error) {
    res.status(400).json({message: error})
  }
});

router.get('/loetelu', async (req: Request, res: Response) => {
  try{
    const data = await Article.find();
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error})
  }
});

router.get('/artikkel/:id', async (req: Request, res: Response) => {
  try{
    const data = await Article.findById(req.params.id);
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error})
  }
})

router.delete('/kustuta/:id', async (req: Request, res: Response) => {
  try{
    const id = req.params.id;
    await Article.findByIdAndDelete(id);
    const data = await Article.find();
    res.send(data);
  }
  catch(error){
    res.status(500).json({message: error}) 
  }
})

export default router;