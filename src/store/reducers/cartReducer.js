import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalPrice: 0,
    totalCount: 0,
    countItem : []
}

export default createReducer(initialState, {

    ADD_PIZZA: (state, action) => {
        let check = false
        state.items.map(item => {
            if (item.id === action.payload.id &&
                item.size === action.payload.size &&
                item.type === action.payload.type) {
                item.count = item.count + 1
                check = true
            }
            return item
        })
        !check && state.items.push(action.payload)

        state.totalPrice = state.items.reduce((sumPrice, obj) => sumPrice + obj.price * obj.count, 0)
        state.totalCount = state.items.reduce((sumPizza, obj) => sumPizza + obj.count, 0)
    },

    DELETE_PIZZA: (state, action) => {
        state.items.map(item => {
            if (item.id === action.payload.id &&
                item.size === action.payload.size &&
                item.type === action.payload.type) {
                item.count = item.count - 1
            }
            return item
        })

        state.items = state.items.filter(item => item.count !== 0)
        state.totalPrice = state.items.reduce((sumPrice, obj) => sumPrice + obj.price * obj.count, 0)
        state.totalCount = state.items.reduce((sumPizza, obj) => sumPizza + obj.count, 0)

    },

    DELETE_ALL_PIZZA: (state, action) => {
        state.items = []
        state.totalPrice = 0
        state.totalCount = 0
    },

    DELETE_ITEM_PIZZA: (state, action) => {
        state.items = state.items.filter(item => {
            if (item.id === action.payload.id &&
                item.size === action.payload.size &&
                item.type === action.payload.type) {
                return false
            }
            return true
        })

        state.totalPrice = state.items.reduce((sumPrice, obj) => sumPrice + obj.price * obj.count, 0)
        state.totalCount = state.items.reduce((sumPizza, obj) => sumPizza + obj.count, 0)
    },

    GET_PIZZA_COUNT : (state, action)=>{
        let sum = 0
        state.items.map(item=>{ if(item.id === action.payload) sum = sum+item.count})
        state.countItem.push({
            id : action.payload,
            count : sum
        })
    },

    CLEAR_GET_PIZZA_COUNT : (state, action) =>{
        state.countItem = []
    }

})


export const addPizza = obj => {
    return {
        type: 'ADD_PIZZA',
        payload: obj
    }
}
export const deleteAllPizza = () => { //bunda xamma pitsalar o'chiriladi
    return {
        type: 'DELETE_ALL_PIZZA',
    }
}
export const deletePizza = (data) => { //bunda bitta pitsa o'chiriladi
    return {
        type: 'DELETE_PIZZA',
        payload: data
    }
}
export const deleteItemPizza = (data) => { //bunda id, size, type bo'yicha pitsa item o'chiriladi
    return {
        type: 'DELETE_ITEM_PIZZA',
        payload: data
    }
}
export const getPizzaCount = (data) => { //pitsalarni id si bo'yicha soni xisoblaydi
    return {
        type: 'GET_PIZZA_COUNT',
        payload: data
    }
}
export const clearGetPizzaCount = () => {
    return {
        type: 'CLEAR_GET_PIZZA_COUNT',
    }
}