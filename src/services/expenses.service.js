import api from "./api";

export const get = async ()=>{
    try{
     const url = "typefinanceouts";
     const rs = await api.get(url);
     return rs.data;
    }catch(error){
        return [];
    }
 }
 
 export const find = async (id)=>{
    try {
        const url = "typefinanceouts/get-by-id?id="+id;
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return {};
    }
}

export const create_expenses = async(expenses) =>{
    const url = "typefinanceouts"
    try{
        const rs = await api.post(url,{name:expenses.name, status:0});
        alert("Tao expenses thanh cong");
        return rs.data;
    }catch(error){
        alert("Tao expenses that bai");
        return {};
    }
}
export const edit_expenses = async(expenses) =>{
    const url = "typefinanceouts"
    try{
        const rs = await api.put(url,{id:expenses.id, name:expenses.name, status:expenses.status});
        alert("Edit expenses thanh cong");
        return {};
    }catch(error){
        alert("Edit expenses that bai");
        return {};
    }
}
export const remove_expenses = async (idde)=>{
    try{
        const url = "typefinanceouts?id="+idde;
        const rs = await api.delete(url);
        alert("Delete expenses thanh cong");
        return {};
    }catch(error){
        alert("Delete expenses that bai");
        return {};
    }

}