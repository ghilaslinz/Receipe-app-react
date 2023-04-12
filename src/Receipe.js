import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Ingredients from './Ingredients'
import { Link } from '@mui/material';
import './Receipe.css'
function Receipe({recipe}) {
    const {label, image, url,ingredients} = recipe.recipe;
    const [showIngredients, setShowIngredients]=useState(false);

    function showIngredientsfunction(){
      setShowIngredients(true);
    }
    return (
     <>
  
          
            <url href={url} />
        
        </>
    )
}

export default Receipe
