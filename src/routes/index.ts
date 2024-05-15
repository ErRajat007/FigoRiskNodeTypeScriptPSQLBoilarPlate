import { Express } from 'express';
import loginRoutes from './loginroutes';
import userRoutes from './userRoutes'
import commonRouted from '../routes/commonRoutes';


/**
 *
 * @param {Express} app - The Express app instance to configure.
 */

export function setupRoutes(app: Express) {
  app.use('/api', loginRoutes);
  app.use('/api', userRoutes);
  app.use('/common', commonRouted);
  // dfgfg
}
