import { configureStore } from "@reduxjs/toolkit";
import modeSlicer from './features/modeSlice';

const store = configureStore({
    reduced: {
        mode: modeSlicer
    }
})

export default store