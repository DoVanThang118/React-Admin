const reducer = (state,action)=>{ // action: {type:.. payload:..}
    switch(action.type){
        case "CREATE_REVENUES": return {...state,revenues:action.payload};
        case "AUTH_LOGIN": return {...state,token:action.payload};

        default: return state;
    }
}
export default reducer;