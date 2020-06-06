import { Response, Request } from 'express';
import CreateActivityService from '../services/CreateActivityService';

class ActivityController {
    async store(req: Request, res: Response) {
        const response = await CreateActivityService(req, res);
        return response;
      }
}

export default new ActivityController();