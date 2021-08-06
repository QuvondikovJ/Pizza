import { createReducer } from "@reduxjs/toolkit";

export default createReducer({
        activeCategory: null,
        activeSortType: 0
},
    {
        SET_CATEGORY: (state, action) => {
            state.activeCategory = action.payload
        },

        SET_SORT: (state, action) => {
            state.activeSortType = action.payload
        },

    })

export const changeCategory = (data) => {
    return {
        type: 'SET_CATEGORY',
        payload: data
    }
}

export const changeSortType = (data) =>{
    return {
        type: 'SET_SORT',
        payload: data
    }
}
