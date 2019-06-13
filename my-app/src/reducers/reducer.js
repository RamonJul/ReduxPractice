import {FETCH} from './../actions/type'

const initialState={
    items:[],
    item:{}
}

export default function(state=initialState,action){
    //this is where the state is changed depending on the actions being taken
    switch(action.type){
        case FETCH:
            //checks for the type of action adn will then return a new state
            return{
                ...state,
                items:action.data
            }
        default:
            //returns current state no change
            return state;
    }
    
}