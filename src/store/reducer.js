const reducer = (state,action)=>{ // action: {type:.. payload:..}
    switch(action.type){
        case "CREATE_REVENUES": return {...state,revenues:action.payload};
        case "AUTH_LOGIN": return {...state,token:action.payload};
        case "UPDATE_USER": return {...state,userlogin:action.payload};
        case "UPDATE_FAVORITE": return {...state,
            favorites:action.payload
        };

        default: return state;
    }
}
export default reducer;