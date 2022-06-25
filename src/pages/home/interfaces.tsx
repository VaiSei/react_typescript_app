export interface PostInterface{
   
    id: number;
    reactions: number;
    tags: string[];
    title: number;
  
}
export interface PaginationInterface{
   
    limit: number;
    skip: number;
    total: number;
    
 }