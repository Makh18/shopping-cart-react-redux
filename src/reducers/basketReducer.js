import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKETS,INCREASE_QUANTITY, DECREASE_QUANTITY} from '../actions/types'
const initialState={
    basketNumbers:0,
    cartCost:0,
    produits:{
        GreyTshirt:{
            name:"Grey Tshirt",
            tagName:'greyTshirt',
            price:60.00,
            numbers:0,
            inCart:false
        },
        GreenTshirt:{
            name:"Green Tshirt",
            tagName:'greenTshirt',
            price:60.00,
            numbers:0,
            inCart:false
        },
        PinkTshirt:{
            name:"pinkTshirt",
            tagName:'t3',
            price:60.00,
            numbers: 0,
            inCart:false
        }
    }
}

export default(state=initialState,action)=>{

    let addQuantity=""; 
            switch(action.type){
               case ADD_PRODUCT_BASKET:
                   addQuantity = { ...state.produits[action.payload]}
                   addQuantity.numbers += 1;
                   addQuantity.inCart=true;
                   console.log(addQuantity);
                   return {
                    ...state,
                    basketNumbers : state.basketNumbers + 1,
                    cartCost: state.cartCost+state.produits[action.payload].price,
                    produits:{
                        ...state.produits,
                        [action.payload]:addQuantity
                    } 
                   }
                   case GET_NUMBERS_BASKETS:
                       return{
                           ...state

                       }
                       case INCREASE_QUANTITY:
                        addQuantity = { ...state.produits[action.payload]}
                        addQuantity.numbers += 1;
                        console.log(addQuantity);
                       return{
                           ...state,
                           cartCost: state.cartCost+state.produits[action.payload].price,
                           produits:{
                               ...state.produits,
                               [action.payload]:addQuantity
                           }
                            
                           }

                       
                       case GET_NUMBERS_BASKETS:
                       return{
                           ...state

                       }
                      
                default:
                    return state;
            }
}