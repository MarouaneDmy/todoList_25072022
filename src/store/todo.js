import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        list: [
            {
                "id": 1,
                "title": "List my TODOs",
                "description": "As a user I would like to list my current todos",
                "state": true,
            },
            {
                "id": 2,
                "title": "Change a TODO state",
                "description": "As a user I would like to change a todo state by checking a 'box'",
                "state": false,
            },
            {
                "id": 3,
                "title": "Detail a TODO",
                "description": "As a user I would like to display one of my todo in a separate or dedicated view. This todo will contain its title and a description (which is a new information not shown in the previous view).",
                "state": false,
            },
            {
                "id": 4,
                "title": "Add a new TODO",
                "description": "As a user I would like to add a new todo in my list",
                "state": false,
            }
        ]
    },
    reducers: {
        create:(state, action)=>{
            state.list.push(action.payload)
        },
        edit:(state, action)=>{
            state.list = action.payload
        }
    },
})

export const { create } = todoSlice.actions

export default todoSlice.reducer