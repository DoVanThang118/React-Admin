import api from "./api";

export const get = async ()=>{
    try{
     const url = "users";
     const rs = await api.get(url);
     return rs.data;
    }catch(error){
        return [];
    }
 }
 
 export const find = async (id)=>{
    try {
        const url = "users/get-by-id?id="+id;
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return {};
    }
}

export const create_users = async(users) =>{
    const url = "users"
    try{
        const rs = await api.post(url,{name:users.name, birthday:users.birthday, address:users.address, email:users.email, password:users.password, telephone:users.telephone, status:0, role:users.role, permissions:users.permissions, createat:users.createat});
        //const rs = await api.post(url,{name:users.name, birthday:users.birthday, address:users.address, email:users.email, password:users.password, telephone:users.telephone, status:0, role:users.role, permissions:users.permissions, updateat:null, createat:Date.now});
        alert("Tao users thanh cong");
        return rs.data;
    }catch(error){
        alert("Tao users that bai");
        return {};
    }
}
export const edit_users = async(users) =>{
    const url = "users"
    try{
        const rs = await api.put(url,{id:users.id, name:users.name, status:users.status, name:users.name, birthday:users.birthday, address:users.address, email:users.email, password:users.password, telephone:users.telephone, role:users.role, permissions:users.permissions, updateat:users.updateat});
        //const rs = await api.put(url,{id:users.id, name:users.name, status:users.status, name:users.name, birthday:users.birthday, address:users.address, email:users.email, password:users.password, telephone:users.telephone, role:users.role, permissions:users.permissions, updateat:Date.now});
        alert("Edit users thanh cong");
        return {};
    }catch(error){
        alert("Edit users that bai");
        return {};
    }
}
export const remove_users = async (idde)=>{
    try{
        const url = "users?id="+idde;
        const rs = await api.delete(url);
        alert("Delete thanh cong");
        return {};
    }catch(error){
        alert("Delete that bai");
        return {};
    }

}