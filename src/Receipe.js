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
             <Card sx={{ maxWidth: 345, margin : '20px' }}>
      <CardMedia
        component="img"
        height="300"
        src={image} 
        alt={label}
      
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {label}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <url href={url} />
        </Typography>
      </CardContent>
      <CardActions className="ingredients__show">
        
        <div   className="button__ingredients"><Button onClick={showIngredientsfunction}  variant="contained">Show Ingredients</Button></div>
        <div>
        {showIngredients ? (
          <div>
        <Ingredients ingredients={ingredients} />
        <Link rel="noopener noreferrer" href={url}  target="_blank" >See More</Link>
        </div>
        ) : <div></div>
      }
      </div>
      
      </CardActions>
    </Card>
          
            <url href={url} />

        
        </>
    )
}

export default Receipe
