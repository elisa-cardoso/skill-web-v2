import { Category } from "./category";

export interface Skills {
  id: number;
  image: string;
  title: string;
  category: Category[];
  description: string;
}

export interface UpdateSkillType {
  id: number;
  title: string;
  description: string;
  image: string;
  category: number[]; 
}

export interface CreateSkillType {
  title: string;        
  description: string;  
  image: string;        
  category: number[];   
}

export interface PaginatedSkills {
  content: Skills[]; 
  totalElements: number; 
  totalPages: number;
  pageNumber: number;
  pageSize: number; 
}