import { Request, Response } from 'express';
import database from '../database';

interface Activity {
  id: number;
  title: string;
  priority: number;
  start_date: string;
  end_date: string;
  type: string;
  project: string;
  description: string;
}

export default async (request: Request, response: Response) => {
  const activities = await database('activities').select('*');

  const serealizedItems = activities.map((activity: Activity) => {
    return {
      title: activity.title,
      priority: activity.priority,
      start_date: activity.start_date,
      end_date: activity.end_date,
      project: activity.project,
      type: activity.type,
      description: activity.description
    };
  });

  return response.json(serealizedItems);
};
