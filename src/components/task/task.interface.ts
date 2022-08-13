export interface IGetTaskEntriesQuery {
  range: string;
  contractor: string;
  project: string;
  product: string;
  activity: string;
  category: string;
  client?: string;
  order: string;
}
