import {createStroe} from 'redux'

// 1
const initialState = {
    productsLoaded: false,
    products: [],
    //haal de data uit tabletop

 //21 test: 'Hello World!'
}
 export function loadProducts() {
    return { type: "LOAD_PRODUCTS", payload: products}
 }


//2
function reducer(state, action) {
    if (action.type === "LOAD_PRODUCTS") {
        return {
            ...state,
            productsLoaded: true,
            products: action.payload,
        }
    }

    //22 console.log(state, action)
    return state
}

//3
const store = createStroe(reducer, initialState)

//4
export default store