import toast from 'react-hot-toast';
import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlistItems: []
    },
    reducers: {
        addToWishlist(state, action) {
            const isInWishlist = state.wishlistItems.findIndex(item => item.id === action.payload.id);
            if(isInWishlist > -1){
                toast("Product already in wishlist", { icon: "ℹ️", position: "bottom-left" });
            } else {
                state.wishlistItems.push(action.payload);
                toast.success("Added To Wishlist", { position: "bottom-left" });
            }
            
        },
        deleteFromWishlist(state, action){
            state.wishlistItems = state.wishlistItems.filter(item => item.id !== action.payload);
            toast.error("Removed From Wishlist", { position: "bottom-left" });
        },
        deleteAllFromWishlist(state){
            state.wishlistItems = []
        }
    },
});

export const { addToWishlist, deleteFromWishlist, deleteAllFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
