import { Router } from 'express';
import * as RecordRoutes from './record.routes';

export function initRoutes(app: Router) {
  RecordRoutes.routes(app);
}
