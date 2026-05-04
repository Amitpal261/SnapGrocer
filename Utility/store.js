import { configureStore } from "@reduxjs/toolkit";
import cartSilce from "./CardSilce";
const appStore = configureStore({
    reducer:{
        cart : cartSilce
    }
})

export default appStore;