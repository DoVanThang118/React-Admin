import api from "./api";

export const get = async ()=>{
    try{
     const url = "positions";
     const rs = await api.get(url);
     return rs.data;
    }catch(error){
        return [];
    }
 }
 
 export const find = async (id)=>{
    try {
        const url = "positions/get-by-id?id="+id;
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return {};
    }
}

export const create_positions = async(positions) =>{
    const url = "positions"
    try{
        const rs = await api.post(url,{name:positions.name, coefficient:positions.coefficient, status:0});
        alert("Tao positions thanh cong");
        return rs.data;
    }catch(error){
        alert("Tao positions that bai");
        return {};
    }
}
export const edit_positions = async(positions) =>{
    const url = "positions"
    try{
        const rs = await api.put(url,{id:positions.id, name:positions.name, coefficient:positions.coefficient, status:positions.status});
        alert("Edit positions thanh cong");
        return {};
    }catch(error){
        alert("Edit positions that bai");
        return {};
    }
}
export const remove_positions = async (idde)=>{
    try{
        const url = "positions?id="+idde;
        const rs = await api.delete(url);
        alert("Delete positions thanh cong");
        return {};
    }catch(error){
        alert("Delete positions that bai");
        return {};
    }

}