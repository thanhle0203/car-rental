import { configureStore, ThunkAction, Action, createSlice } from "@reduxjs/toolkit";

const reducerSlice = createSlice({
    name: 'store',
    initialState: {},
    reducers: {
        someAction: function() {
        }
    }
})

export const store = configureStore({
    reducer: {
        someReducer: reducerSlice.reducer,
    },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;