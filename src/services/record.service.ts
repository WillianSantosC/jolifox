import { Client } from '@notionhq/client';
import { configDotenv } from 'dotenv';
configDotenv();

import { CreateRecordProps, UpdateRecordProps } from '../types/props';

export class RecordService {
  constructor(
    private notion = new Client({ auth: process.env.NOTION_KEY }),
    private databaseId = process.env.NOTION_DATABASE_ID
  ) {}

  async createRecord(data: CreateRecordProps) {
    const createObject = this.createRecordObject(data);

    const output = await this.notion.pages
      .create({
        parent: {
          database_id: this.databaseId,
        },
        properties: {
          ...createObject,
        },
      })
      .then((result) => result.properties)
      .catch((err) => {
        throw new Error(err.body);
      });

    return output;
  }

  async retrieveRecord(page_id: string) {
    const output = await this.notion.pages
      .retrieve({
        page_id: page_id,
      })
      .then((result) => result.properties)
      .catch((err) => {
        throw new Error(err.body);
      });

    return this.formatOutput(output);
  }

  async updateRecord(pageId: string, data: UpdateRecordProps) {
    const updateObject = this.createRecordObject(data);

    const output = await this.notion.pages
      .update({
        page_id: pageId,
        properties: {
          ...updateObject,
        },
      })
      .then((result) => result.properties)
      .catch((err) => {
        throw new Error(err.body);
      });

    return output;
  }

  async deleteRecord(pageId: string) {
    const output = await this.notion.blocks
      .delete({
        block_id: pageId,
      })
      .catch((err) => {
        throw new Error(err.body);
      });

    return output;
  }

  createRecordObject(data: UpdateRecordProps) {
    const output = {};

    if (data.company) {
      Object.assign(output, {
        Company: {
          title: [
            {
              text: {
                content: data.company,
              },
            },
          ],
        },
      });
    }

    if (data.campaign) {
      Object.assign(output, {
        Campaign: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: data.campaign,
              },
            },
          ],
        },
      });
    }

    if (data.description) {
      Object.assign(output, {
        Description: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: data.description,
              },
            },
          ],
        },
      });
    }

    if (data.where) {
      Object.assign(output, {
        Where: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: data.where,
              },
            },
          ],
        },
      });
    }

    if (data.where) {
      Object.assign(output, {
        Where: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: data.where,
              },
            },
          ],
        },
      });
    }

    if (data.plannedDate) {
      Object.assign(output, {
        PlannedDate: {
          type: 'date',
          date: {
            start: data.plannedDate,
            end: null,
            time_zone: null,
          },
        },
      });
    }

    if (data.content) {
      Object.assign(output, {
        Content: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: data.content,
              },
            },
          ],
        },
      });
    }

    if (data.language) {
      Object.assign(output, {
        Language: {
          type: 'select',
          select: {
            name: data.language,
          },
        },
      });
    }

    if (data.imageFiles) {
      Object.assign(output, {
        Image: {
          type: 'files',
          files: data.imageFiles,
        },
      });
    }

    if (data.imageContent) {
      Object.assign(output, {
        'image content': {
          rich_text: [
            {
              type: 'text',
              text: {
                content: data.imageContent,
              },
            },
          ],
        },
      });
    }

    return output;
  }

  formatOutput(data) {
    const output = {
      Content: data.Content.rich_text[0].plain_text,
      Description: data.Description.rich_text[0].plain_text,
      Campaign: data.Campaign.rich_text[0].plain_text,
      Where: data.Where.rich_text[0].plain_text,
      PlannedDate: data.PlannedDate.date.start,
      Company: data.Company.title[0].plain_text,
      Language: data.Language.select.name,
      imageContent: data['image content'].rich_text[0]?.plain_text,
      Image: {
        name: data.Image.files[0]?.name,
        url: data.Image.files[0]?.external.url,
      },
    };

    return output;
  }
}
