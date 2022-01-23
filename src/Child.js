import React from 'react'

function Child(props) {
  
    return (
        <div>
            {props.childData}
            <button onClick={()=> {props.parentMethod("hello kounir")}}></button>
        </div>
    )
}

export default Child
