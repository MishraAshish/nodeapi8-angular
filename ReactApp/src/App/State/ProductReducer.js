//returns product reducer

const INITIAL_STATE = {
    defaultProduct:{
        name : "",
        price : 0,
        camera : "",
        ram : "",
        display : "",
        color : ""
    }
}

export default function ProductReducer(state=INITIAL_STATE,action)
{
    switch (action.type) {
    
        default:
            return state;
    }
}

