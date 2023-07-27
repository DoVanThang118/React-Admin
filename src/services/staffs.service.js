import api from "./api";

export const get = async ()=>{
    try{
     const url = "staffs";
     const rs = await api.get(url);
     return rs.data;
    }catch(error){
        return [];
    }
 }