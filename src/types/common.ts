export type ID = string | number;
export type DateTime = string;

export interface RelationshipData<T> {
  id: string;
  type: T;
}

export interface QueryData<T> {
  id: string;
  type: T;
}

export interface PaginatedQuery {
  meta?: {
    pagination: {
      totalPages: number;
    };
  };
}

export interface ApiErrors {
  [fieldName: string]: string[] | string;
}

export interface PaginatedPath {
  page?: number;
  limit?: number;
}
