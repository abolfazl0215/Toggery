export const scrollPageCircle=()=>{
    return async dispatch =>{
        await dispatch({type:'NEXT-PAGE'})
    }
}