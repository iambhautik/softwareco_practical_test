import { configureStore } from '@reduxjs/toolkit';
import { todosSlice } from './slices/todosSlice';

export const store = configureStore({
	reducer: {
		todosSlice	: todosSlice.reducer
	},
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;