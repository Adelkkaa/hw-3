import { createContext } from "react";

export type Category = {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
  newEntry: string;
};

export type Response = {
  id: number;
  images: string[];
  title: string;
  description: string;
  price: number;
  category: Category;
  creationAt: string;
  updatedAt: string;
};

export const Context = createContext<Response[]>([]);
