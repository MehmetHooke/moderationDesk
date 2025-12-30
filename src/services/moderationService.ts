import { api } from "../api/api";

export type Item ={
    id:number;
    title:string;
    body:string;
};

export async function getPendingItems(): Promise <Item[]> {
    const res = await api.get<Item[]>("/posts")
    return res.data.slice(0,10)
}

export async function deleteItem(id:number) {
     await api.delete(`/posts/${id}`);
    
}

export async function patchItemTitle (id:number,title:string):Promise<Item[]> {
    const res = await api.patch(`/posts/${id}`, {title})
    return res.data;
}