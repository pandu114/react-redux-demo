const initalState = {
    age: 21
}

const reducer = (state = initalState, action) =>{
    const newState = {...state};
    // if(action.type ==='AGE_UP'){
    //     newState.age++
    // }
    // if(action.type ==='AGE_DOWN'){
    //     newState.age--
    // }
    switch(action.type){
        case "AGE_UP":
            newState.age++;
            break;
        case "AGE_DOWN":
            newState.age--;
            break;
    }
    return newState;
}

export default reducer;