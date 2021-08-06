import {createAction, createReducer} from "@reduxjs/toolkit";

const apiCall = createAction('apiCall')
export default createReducer({
        pizzas: [],
        isLoading: false
    },
    {

        GET_PIZZA: (state, action) => {
            state.pizzas = action.payload
            state.isLoading = true
        },

        IS_LOADING : (state, action)=>{
            state.isLoading = action.payload
        }

    })


export const getPizzas = () => {
    return apiCall({
        url: '/pizzas',
        method: 'get',
        type: 'GET_PIZZA'
    })
}

export const filterPizzaByCategory = (data) => {
    let url = ''
    data.category === null ? url = '/pizzas?_sort='+data.sort+'&_order='+data.order :
        url = '/pizzas?category=' + data.category+'&_sort='+data.sort+'&_order='+data.order
    return apiCall({
        url,
        method: 'get',
        type: 'GET_PIZZA'
    })
}

export const filterPizzaBySortType = (data) => {
    let url = ''
    data.category === null ? url = '/pizzas?_sort='+data.sort+'&_order='+data.order :
        url = '/pizzas?category=' + data.category+'&_sort='+data.sort+'&_order='+data.order
    return  apiCall({
        url: url,
        type: 'GET_PIZZA',
        method : 'get'
    })
}

export const changeIsLoading=(data)=>{
    return {
        type : 'IS_LOADING',
        payload : data
    }
}
