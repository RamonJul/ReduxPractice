import {FETCH} from './type'

export const fetch=()=>dispatch=>{
    //dispatch is a resolver or a promise
  
        axios('......').then(res=>
            dispatch({
                typpe:FETCH,
                data:res
                }))

}