import {GET_NUMBERS_BASKETS} from './types';
export const getNumbers=() => {
    return(dispatch)=>{
        console.log("getting all basket Numbers");
        dispatch({
            type:GET_NUMBERS_BASKETS
        })
    }
}