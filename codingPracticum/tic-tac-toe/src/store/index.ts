import { configureStore } from '@reduxjs/toolkit'
import gameSlice from './gameSlice'
// ...

const RootReducer = {
    game: gameSlice.reducer,
}

export const store = configureStore({
    reducer: RootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
