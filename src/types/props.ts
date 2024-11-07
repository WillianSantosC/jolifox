export type CreateRecordProps = {
  company: string;
  campaign: string;
  content: string;
  description: string;
  where: string;
  plannedDate: string;
  language: string;
  imageFiles?:
    | {
        file: {
          url: string;
          expiry_time?: string;
        };
        name: string;
      }[]
    | {
        external: {
          url: string;
        };
        name: string;
      }[];
  imageContent?: string;
};

export type UpdateRecordProps = {
  company?: string;
  campaign?: string;
  content?: string;
  description?: string;
  where?: string;
  plannedDate?: string;
  language?: string;
  imageFiles?:
    | {
        file: {
          url: string;
          expiry_time?: string;
        };
        name: string;
      }[]
    | {
        external: {
          url: string;
        };
        name: string;
      }[];
  imageContent?: string;
};
