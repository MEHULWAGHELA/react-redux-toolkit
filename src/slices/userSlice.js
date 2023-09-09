import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addReducer(state, action) {
            return action.payload
        }
    }
})

export default userSlice.reducer
export const { addReducer } = userSlice.actions