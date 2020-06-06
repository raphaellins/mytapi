import { Request, Response } from 'express';
import database from '../database';

export default async (request: Request, response: Response) => {
  const { title, priority, start_date, end_date, project, type, description } = request.body;

  const transation = await database.transaction();

  const activity = { title, priority, start_date, end_date, project, type, description};

  const insertedIds = await transation('activities').insert(activity);
  const activity_id = insertedIds[0];

  await transation.commit();

  return response.json({ id: activity_id, ...activity });
};
