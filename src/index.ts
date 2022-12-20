import express from 'express';
import dotenv from 'dotenv';

import routes from './routes/index';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9090;

routes(app);

app.listen(PORT, () => console.log(`Servidor aberto em http://localhost:${PORT}`));