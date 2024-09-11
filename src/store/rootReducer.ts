import { combineReducers } from "redux";

const rootReducer = (asyncReducers: any) => (state: any, action: any) => {
    const combinedReducer = combineReducers({
        ...asyncReducers,
    });
    return combinedReducer(state, action);
};

export default rootReducer;
