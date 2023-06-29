import { configureStore } from "@reduxjs/toolkit";
import stageListReducer from './stageList'


export default configureStore({
    reducer:{
        stageList: stageListReducer
    }
});