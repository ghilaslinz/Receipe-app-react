import logo from './logo.svg';
import './App.css';
import Child from './Child'
import React, {useState} from 'react'
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import Receipe from './Receipe'
import './App.css'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';


function App() {
  const [results, setResult]=useState([]);
  const [recipes, setRecipes]=useState([]);
  const [inputWord, setInputword]=useState([]);
 
  /*const parentMethod=(data)=>{
    console.log(data);
  }*/
  //  
  {/*
  async function getData() {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=3a4d49b2&app_key=fb8fc7b7373603facad91bdf5267f542`
    ).then(response => response.json())
  // .then(result => ReceipDetails(result));
    console.log(JSON.stringify(response.hits))
setResult(response.hits)
  }
*/}
function onChange(e) {
  console.log(e.target.value);
  setInputword(e.target.value)
}
async function getData(){
  if (inputWord !== "") {
 const result= await axios.get(`https://api.edamam.com/search?q=${inputWord}&app_id=3a4d49b2&app_key=fb8fc7b7373603facad91bdf5267f542`)
 if (!result.data.more) {
  alert("No food with such name");
}
 console.log(result.data.hits)
setRecipes(result.data.hits);
setInputword("")
  }else{
    alert("please fill the form");
  }
}
const onSubmit = (e)=>{
e.preventDefault();
getData();
}
  const url = "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=3a4d49b2&app_key=fb8fc7b7373603facad91bdf5267f542";
 
// 
  return (
    <div className="App">
      <h1>Receipe App</h1>
      <p>Developed by Ghilas Belkaci</p>
     <Paper
     
      component="form"
      sx={{ p: '2px 4px',marginTop:'50px',marginBottom:'50px',margin:'auto', display: 'flex', alignItems: 'center', width: 600 }}
    >
    
      <InputBase
      onChange={onChange} 
      value={inputWord}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter the name of a meal (pizza, pasta...etc)"
        inputProps={{ 'aria-label': 'Enter the name of a meal (pizza, pasta...etc)' }}
      />
    
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
      <Button type="submit" onClick={onSubmit} variant="contained">Search</Button>
      </IconButton>
    </Paper>
<div className="recipes">
{recipes.map((recipe)=>


<Receipe key={uuidv4()} recipe={recipe} />

)}
</div>

    {/* <Child childData="hello"  parentMethod={parentMethod}/>*/}

    </div>
 
  );
  }

export default App;
