import { Category } from './category';

export class Process {
    id: number;
    name: string;
    description: string;
    createdBy: string;
    createdTime: string;
    updatedTime: string;
    updatedBy: string;
    status: string;
    categoryId: number;
    category: Category;
}