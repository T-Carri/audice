import {TYPES} from './Types'

export const GlobalState = (state, action)=>{
switch(action.type){
    case TYPES.CURRENTSEARCH_A:
        return{
            ...state, 
                insearch_A: action.payload
        }
    case TYPES.CURRENTSEARCH_B:
        return{
            ...state,
            insearch_B: action.payload
        }   

    case TYPES.STAGEYT_A:
        return{
            ...state,
            stageYT_A:[...state.stageYT_A, action.payload] 
        } 
        
    case TYPES.STAGEYT_B:
        return{
           ...state,
           stageYT_B: [...state.stageYT_B, action.payload] 
            }  
            
    default:
         return state
}

}


