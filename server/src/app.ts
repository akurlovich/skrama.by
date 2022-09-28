import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import expressWS from 'express-ws';
import router from './router/index';
// import errorMiddleware from './middlewares/error-middleware';
import config from './common/config';

// interface IMSGProps {
//   id: string,
//   bookTitle: string,
//   method: string,
// };

const appBase = express();
const wsInstance = expressWS(appBase);
const { app } = wsInstance;
const aWss = wsInstance.getWss();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: config.CLIENT_URL,
}));
app.use('/api', router);
// app.use(errorMiddleware);

// app.ws('/', (ws, req) => {
//   ws.on('message', (msg: string) => {
//     const msgClient: IMSGProps = JSON.parse(msg);

//     switch (msgClient.method) {
//       case 'connection': 
//         connectionHandler(ws, msgClient);
//         break;
//     }
//   })
// });

// const connectionHandler = (ws: any, msg: IMSGProps) => {
//   aWss.clients.forEach(client => {
//     client.send(JSON.stringify(msg))
//   })
// };

// mongoose
//   .connect(config.DB_CONNECT, {})
//   .then(() => console.log('Connected to DB'))
//   .catch((err) => console.log(err));

export default app;
