import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('combined'));

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Express-Mongoose-TypeScript API');
});

export default app;