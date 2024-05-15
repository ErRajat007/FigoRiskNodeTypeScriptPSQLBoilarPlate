import dotenv from 'dotenv';
import express from 'express';

import { sequelize } from './database/config/dbConfig';
import { initModel } from './database/sequelize/initModel';
import {
  logger,
  loggerSuccess,
  transactionIdMiddleware,
} from './middlewares/transactionId';
import { setupRoutes } from './routes';
import setupSwagger from './utils/swagger';
const bodyParser = require('body-parser');
dotenv.config();
const path = require('path');
const app = express();
const port = process.env.APP_PORT || 3003;

// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(transactionIdMiddleware);
app.use(logger);
app.use(loggerSuccess);

try {
  initModel(sequelize);

  // sequelize.sync({force: true})
  sequelize.sync();
  console.log('Table created successfully');
} catch (err) {
  console.log(err, 'error occured');
}
setupRoutes(app);
setupSwagger(app);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
