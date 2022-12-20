import { Request, Response, Router } from 'express';
import dotenv from 'dotenv';

import cryptocurrency from '../services/cryptocurrency';

dotenv.config();

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  let symbol: string = req.body.symbol;

  // setInterval(() => {
  //   console.log('Teste');
  // }, 1000)

  const coin = await cryptocurrency(symbol);

  if (coin.length === 0) {
    return res.status(404).json({ message: 'Moeda não encontrada.', status: 404 });
  }

  return res.status(200).json({ data: coin, status: 200 });
});

export default router;