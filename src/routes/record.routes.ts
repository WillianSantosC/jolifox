import { Router } from 'express';
import { recordController } from '../controllers/_index';
import { recordSchema } from '../schemas/record.schema';
import wrapValidation from '../middlewares/validateRoutes';

export function routes(app: Router) {
  app.post(
    '/record',
    wrapValidation(recordController.createRecord, recordSchema.create),
    () => {
      // #swagger.tags = ["Record"]
      /*  #swagger.parameters['createRecord'] = {
                in: 'body',
                description: 'Create a new record.',
                schema: {
                  company: "AJ 2",
                  campaign: "Marketing",
                  content: "Project",
                  description: "PowerPoint",
                  where: "SP",
                  plannedDate: "2024-12-01",
                  language: "Portuguese",
                  imageContent: "chameleon",
                  imageFiles: [
                    {
                      external: {
                        url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                      },
                      name: "chameleon"
                    }
                  ]
                 }
        } */
      /* #swagger.responses[201] = {
            description: 'Record created',
            schema: {
                Content: "Project",
                  Description: "PowerPoint",
                  Campaign: "Marketing",
                  Where: "RJ",
                  PlannedDate: "2024-12-01",
                  Company: "AJ 2",
                  Language: "Portuguese",
                  imageContent: "chameleon",
                  Image: {
                    name: "chameleon",
                    url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  }
                }
        } */
    }
  );

  app.patch(
    '/record/:id',
    wrapValidation(recordController.updateRecord, recordSchema.update),
    () => {
      // #swagger.tags = ["Record"]
      /*  #swagger.parameters['updateRecord'] = {
                in: 'body',
                description: 'Update a record.',
                schema: {
                  company: "AJ 3",
                  campaign: "Marketing",
                  content: "Project",
                  description: "PowerPoint",
                  where: "RJ",
                  plannedDate: "2024-12-01",
                  language: "Portuguese",
                  imageContent: "chameleon",
                  imageFiles: [
                    {
                      external: {
                        url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                      },
                      name: "chameleon"
                    }
                  ]
                 }
        } */
      /* #swagger.responses[201] = {
            description: 'Record created',
            schema: {
                Content: "Project",
                  Description: "PowerPoint",
                  Campaign: "Marketing",
                  Where: "SP",
                  PlannedDate: "2024-12-01",
                  Company: "AJ 3",
                  Language: "Portuguese",
                  imageContent: "chameleon",
                  Image: {
                    name: "chameleon",
                    url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  }
                }
        } */
    }
  );

  app.get(
    '/record/:id',
    wrapValidation(recordController.retrieveRecord, recordSchema.retrieve),
    () => {
      // #swagger.tags = ["Record"]
      /* #swagger.responses[200] = {
            description: 'Retrieve record',
            schema: {
                Content: "Project",
                  Description: "PowerPoint",
                  Campaign: "Marketing",
                  Where: "SP",
                  PlannedDate: "2024-12-01",
                  Company: "AJ 2",
                  Language: "Portuguese",
                  imageContent: "chameleon",
                  Image: {
                    name: "chameleon",
                    url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  }
                }
        } */
    }
  );

  app.delete(
    '/record/:id',
    wrapValidation(recordController.deleteRecord, recordSchema.delete),
    () => {
      // #swagger.tags = ["Record"]
      /* #swagger.responses[204] = {
            description: 'Delete a record',
            schema: ''
        } */
    }
  );
}
