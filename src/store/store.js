import {configureStore} from "@reduxjs/toolkit";
import {apiCall} from "./middleware";
import pizzaReducer from './reducers/pizzaReducer'
import filterReducer from "./reducers/filterReducer";
import cartReducer from "./reducers/cartReducer";

const store = configureStore({
    reducer : {pizzaReducer, filterReducer, cartReducer},
    middleware : [apiCall]
})

export default store;