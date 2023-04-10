import { Request, Response, Router } from "express";

const router: Router = Router();

router.get('/hello', (req: Request, res: Response) => {
  res.send('hello new controller file');
});

router.get("/hello-world", (req: Request, res: Response) => {
    res.send("Hello world at " + new Date())
});

router.get("/hello-variable/:nimi", (req: Request, res: Response) => {
  res.send("Hello, " + req.params.nimi + "!")
});

router.get("/add/:nr1/:nr2", (req: Request, res: Response) => {
	const nr1 = Number(req.params.nr1);
	const nr2 = Number(req.params.nr2);
	res.send((nr1 + nr2).toString());
});

router.get("/multiply/:nr1/:nr2", (req: Request, res: Response) => {
  const nr1 = Number(req.params.nr1);
  const nr2 = Number(req.params.nr2);
  res.send((nr1 * nr2).toString());
});

router.get("/do-logs/:arv", (req: Request, res: Response) => {
  for (let index = 0; index < Number(req.params.arv); index++) {
    console.log("See on logi nr " + index);
  }
  res.send();
});

router.get("/random/:min/:max", (req: Request, res: Response) => {
	const min = Number(req.params.min);
	const max = Number(req.params.max);
	res.send((Math.round((Math.random() * (max-min)+min))).toString());
});

export default router;