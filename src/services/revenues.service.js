import api from "./api";

export const get = async ()=>{
    try{
     const url = "typefinanceins";
     const rs = await api.get(url);
     return rs.data;
    }catch(error){
        return [];
    }
 }
 
 export const find = async (id)=>{
    try {
        const url = "typefinanceins/get-by-id?id="+id;
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return {};
    }
}

export const create_revenues = async(revenues) =>{
    const url = "typefinanceins"
    try{
        const rs = await api.post(url,{name:revenues.name, status:0});
        // const rs = await api.post(url,{name:revenues.name, status:0,updatedat:revenues.updatedat, createdat:revenues.createdat});
        alert("Tao revenues thanh cong");
        return rs.data;
    }catch(error){
        alert("Tao revenues that bai");
        return {};
    }
}
export const edit_revenues = async(revenues) =>{
    const url = "typefinanceins"
    try{
        const rs = await api.put(url,{id:revenues.id, name:revenues.name, status:revenues.status});
        // const rs = await api.put(url,{id:revenues.id, name:revenues.name, status:revenues.status, updatedat:revenues.updatedat, createdat:revenues.createdat});
        alert("Edit revenues thanh cong");
        return {};
    }catch(error){
        alert("Edit revenues that bai");
        return {};
    }
}
export const remove_revenues = async (idde)=>{
    try{
        const url = "typefinanceins?id="+idde;
        const rs = await api.delete(url);
        alert("Delete thanh cong");
        return {};
    }catch(error){
        alert("Delete that bai");
        return {};
    }

}