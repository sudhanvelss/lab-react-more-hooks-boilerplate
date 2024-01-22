import React, { useReducer, useRef, useState } from "react";
import TodoItem from "./Todoitem";

const initialState = [
    {
    data : "rough data",
    ishidden : false
    }
]

function todoReducer(state, action){
    switch(action.type){
        case "ADD_ITEM":
            return[...state,{
                data:action.payload,
                ishidden : false
            }]
        case "CHANGE_HIDDEN_VALUE":
            return state.map((ele, i)=> {
                return i == action.payload ? {...ele, ishidden:!ele.ishidden} : ele
            })
    }
    return state
}
function Todo(){
    const[todoData, dispatch] = useReducer(todoReducer, initialState)

    const returnedData = useRef(null)
    return(
        <>
        <input type="text" 
        placeholder="enter anything here..."
        ref={returnedData}
        onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value.trim() !== "") {
                dispatch({ type: "ADD_ITEM", payload: e.target.value });
                e.target.value = "";
            }
            
        }}
        />
        <div>
            {
            todoData.map((e, i)=>{
                    return <TodoItem ele={e} index={i} key={i} dispatch={dispatch}/>
                })
            }
        </div>
        <button
        onClick={()=> {
            returnedData.current.focus()
        }}>Go back to writing</button>
        </>
    )
    }

export default Todo;