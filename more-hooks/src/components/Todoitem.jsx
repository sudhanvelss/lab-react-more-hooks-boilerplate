import React from "react";

export default function TodoItem(props){
    let {ele, index, dispatch} = props;
    let {data, ishidden} = ele;
    return(
        <>
        <h3>{ishidden? "the content is hidden": data}</h3>
        <button
        onClick={() => {
            dispatch({type: "CHANGE_HIDDEN_VALUE", payload : index})
        }}>Toggle</button>
        </>
    )
}