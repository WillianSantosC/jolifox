import { NextFunction, Request, Response } from 'express';
import { RecordService } from '../services/record.service';

export class RecordController {
  constructor(private recordService = new RecordService()) {}

  createRecord = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const record = await this.recordService.createRecord(req.body);

      res.status(201).json('RECORD CREATED');
    } catch (error) {
      next(error);
    }
  };

  retrieveRecord = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const record = await this.recordService.retrieveRecord(id);

      console.log(record);

      res.status(200).json(record);
    } catch (error) {
      next(error);
    }
  };

  updateRecord = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const record = await this.recordService.updateRecord(id, req.body);

      res.status(200).json('Record Updated Successfully');
    } catch (error) {
      next(error);
    }
  };

  deleteRecord = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      await this.recordService.deleteRecord(id);

      res.status(204).json('');
    } catch (error) {
      next(error);
    }
  };
}

export default RecordController;
