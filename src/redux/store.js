import { configureStore } from "@reduxjs/toolkit";
import stageListReducer from './stageList'
import stageIndexReducer from './stageIndex'
import characterIndexReducer from './characterIndex'
// import stageIndex from "./stageIndex";


export default configureStore({
    reducer:{
        stageList: stageListReducer,
        stageIndex: stageIndexReducer,
        characterIndex: characterIndexReducer
    }
});