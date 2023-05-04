import { Category } from "./category";

export interface Announcement {
    id:any;
    message:string;
    title:string;
    author:string;
    category:Category;
    imageUrl:string;
}
