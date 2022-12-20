import express, { Express, Request, Response } from 'express';
import routes from './routes';

export default (app: Express) => {
  app.route('/').get((req: Request, res: Response) => {

    return res.status(200).json({ message: 'Monitora cotações', status: 200 });
  });

  app.use(
    express.json(),
    routes
  );
}