require('dotenv').config();
import express from 'express';
const sequelize = require("./db");
const models = require("./models/models");
import cors from 'cors';
import {routers} from './routes/index';
import { errorHandler } from './midleware/ErrorHandlingMidleware';


const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routers)


// error handler
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`server started on ${PORT}`))
  } catch (error) {
    console.log('DB ERROR =>', error);
  }
}

start();
