export interface TodoProps extends Todo{
    handleStatus: (id: number, completed: boolean) => void
}
export interface Todo{
    title:string,
    id:number,
    completed:boolean
}