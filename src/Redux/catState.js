import { createSlice  } from "@reduxjs/toolkit";

export const catSlice = createSlice({
    name : 'cats',
    initialState : {
        cats : [],
        loading : false,
        error : false 
    },
    reducers : {
        getCatsFetch : (state) => {
            state.loading = true
            state.cats = []
            state.error = false
        },
        getCatsSuccess : (state,action) => {
            state.cats = action.payload
            state.loading = false
        },
        getCatsFailure : (state) => {
            state.loading = false
            state.cats = []
            state.error = true
        }

    }
})

export const {getCatsFailure ,getCatsFetch ,getCatsSuccess} = catSlice.actions

export default catSlice.reducer