import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        //original attribute: name, image, cost
        //new attribute: quantity
        const newItem  = action.payload;

        const existedItem = state.items.find(item => item.name == newItem.name);
        if(existedItem){
            existedItem.quantity++;
        }
        else {
            newItem.quantity = 1;
            state.items.push(newItem);
        }
    },
    removeItem: (state, action) => {
        const toBeRemoveItem  = action.payload;
        const existedItem = state.items.find(item => item.name == toBeRemoveItem.name);

        if(existedItem) {
            state.items = state.items.filter(item => item.name != toBeRemoveItem);
        }
    },
    updateQuantity: (state, action) => {
        //get name and amount
        const toBeUpdatedItem  = action.payload;

        const existedItem = state.items.find(item => item.name == toBeUpdatedItem.name);
        if(existedItem) {
            existedItem.quantity = toBeUpdatedItem.quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
