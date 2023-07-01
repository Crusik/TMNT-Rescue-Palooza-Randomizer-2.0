import { configureStore } from "@reduxjs/toolkit";
import stageListReducer from './stageList'
import stageIndexReducer from './stageIndex'
// import stageIndex from "./stageIndex";


export default configureStore({
    reducer:{
        stageList: stageListReducer,
        stageIndex: stageIndexReducer
    }
});