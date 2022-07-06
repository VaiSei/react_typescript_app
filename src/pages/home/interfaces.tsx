export interface PostInterface {
  id: number;
  reactions: number;
  tags: string[];
  title: string;
}

export interface PostCartInterface {
  id: number;
  title: string;
  count?: number;
}

export interface PaginationInterface {
  limit: number;
  skip: number;
  total: number;
}
