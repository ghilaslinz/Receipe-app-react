import React from 'react'

function Ingredients({ingredients}) {
    const {text} = ingredients
    return (
        <div>
              <div>{ingredients.map((ingredient)=>
            
            <div>{ingredient.text} </div>)}</div>
    
        </div>
    )
}

export default Ingredients
