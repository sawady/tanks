export type PageRequest = {
  page: number;
  pageSize: number;
  withDeleted: boolean;
};

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
