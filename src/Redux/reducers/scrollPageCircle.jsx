export const scrollPageCircleReducer=(state=false,action)=>{
    switch(action.type){
        case 'NEXT-PAGE':
            return !state;
        default:
            return state;
    }
}