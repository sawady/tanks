export type Page<T> = {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
};

export type PageOffset<T> = {
  items: T[];
  total: number;
};
