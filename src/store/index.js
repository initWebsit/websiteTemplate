/*
 + ------------------------------------------------------------------
 | 全局唯一数据中心
 + ------------------------------------------------------------------ 
 */
import { Action, combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './app';

const ACTION_RESET = 'ACTION_RESET';

const rootReducer = (state, action) => {
	if (action.type === ACTION_RESET) {
		state = undefined;
	}
	return combinedReducer(state, action);
};

const combinedReducer = combineReducers({
	app: appReducer,
});

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
			},
		}),
});

/** 重置 redux */
export function reset() {
	return store.dispatch({ type: ACTION_RESET });
}

export default store;

