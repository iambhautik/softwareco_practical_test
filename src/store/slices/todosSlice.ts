import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getRequest } from "../../utils/apiUtilities"

interface TodosInterface{
    todos: any[]
}

const initialState: TodosInterface = {
    todos: []
}

export const getTodos = createAsyncThunk('todos/getTodos', async ({ length }: {length: number}, {rejectWithValue}) => {

        const { response, error } = await getRequest({ url: `/todos` })

        console.log('response', response)

        if(error) return rejectWithValue(error)

        return ["Hello Bhautik"]

})

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getTodos.fulfilled, (state, action) => {
            state.todos = action.payload
            console.log("Fulfiled")
        }).addCase(getTodos.rejected, (state, action) => {
            console.log("Rejected")
        }).addCase(getTodos.pending, (state, action) => {
            console.log("Pending")
        })
    }

})

export default todosSlice.reducer