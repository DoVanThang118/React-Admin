import api from "./api";

export const get = async ()=>{
    try{
     const url = "departments";
     const rs = await api.get(url);
     return rs.data;
    }catch(error){
        return [];
    }
 }
 
 export const find = async (id)=>{
    try {
        const url = "departments/get-by-id?id="+id;
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return {};
    }
}

export const create_departments = async(departments) =>{
    const url = "departments"
    try{
        const rs = await api.post(url,{name:departments.name, allowance:departments.allowance, status:0});
        alert("Tao departments thanh cong");
        return rs.data;
    }catch(error){
        alert("Tao departments that bai");
        return {};
    }
}
export const edit_departments = async(departments) =>{
    const url = "departments"
    try{
        const rs = await api.put(url,{id:departments.id, name:departments.name, allowance:departments.allowance, status:departments.status});
        alert("Edit departments thanh cong");
        return {};
    }catch(error){
        alert("Edit departments that bai");
        return {};
    }
}
export const remove_departments = async (idde)=>{
    try{
        const url = "departments?id="+idde;
        const rs = await api.delete(url);
        alert("Delete departments thanh cong");
        return {};
    }catch(error){
        alert("Delete departments that bai");
        return {};
    }

}