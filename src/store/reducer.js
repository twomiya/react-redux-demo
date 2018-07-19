const defaultState={
    inputValue:"1",
    list:['ww','ee']
}
export default (state=defaultState,action) =>{
    console.log(action)
    if(action.type==='change'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value
        return newState;

    }
    if(action.type==='add'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue=''
        return newState;

    }
    if(action.type==='delete'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;

    }
    return state;
}