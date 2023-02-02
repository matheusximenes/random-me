import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Item {
    title: string;
    hide: boolean;
    id: string;
}

type state = {
    items: Item[]
}

const initialState: state = {
    items: []
}


export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Item>) => {
            state.items.push(action.payload)
        },
        delete: (state, action: PayloadAction<string>) => {
            const newItems = state.items.filter((i: Item) => i.id !== action.payload )
            state.items = newItems;
        },
        update: (state, action: PayloadAction<Item>) => {
            const index = state.items.findIndex(i => i.id === action.payload.id)
            state.items[index] = action.payload;
        },
    }
}) 

export const {add, update} = itemSlice.actions;
export default itemSlice.reducer;