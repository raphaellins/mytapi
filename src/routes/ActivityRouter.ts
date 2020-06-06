import { Router } from 'express';
import ActivityController from '../controllers/ActivityController';
import CreateActivityValidator from '../validators/CreateActivityValidator';

const router = Router();

router.post('/create', CreateActivityValidator, ActivityController.store);

export default router;
