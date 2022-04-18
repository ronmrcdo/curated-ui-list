// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
  avatar: string;
};

export type Project = {
  id: number;
  name: string;
};

export type Task = {
  id: string;
  title: string;
  description: string;
  labels: TaskLabel[];
  commentCount: number;
  attachmentCounts: number;
};

export type TaskLabel = {
  type: ColorType;
  content: string;
};

export type ColorType = 'success' | 'info' | 'warn' | 'danger';
