import { Router } from 'express';
import ActivityRouter from './ActivityRouter';

const routes = Router();

routes.use('/activities', ActivityRouter);
export default routes;
