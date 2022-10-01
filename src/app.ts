import express, { Request, Response } from 'express';
import cors from 'cors';
import { routerApi } from './routes';
import cookieSession from 'cookie-session';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';
import { currentUser } from './middlewares/current-user';

const app = express();

app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

app.use(currentUser);

// const whitelist = ["http://localhost:8080", "https://myapp.co"];
// const options = {
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("no permitido"));
//     }
//   },
// };
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send("Hello I'm debbi");
});

routerApi(app);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
