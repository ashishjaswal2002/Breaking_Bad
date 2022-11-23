import React,{useState,useEffect} from "react";
import Header from './components/UI/Header';
import './App.css';
import axios from "axios";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/UI/Search";


function App() {

const[items,setItems] = useState([]);//Use for Fetch Api items or using an Array
const[isLoading,setisLoading] = useState(true); //If fetch is Done then true else False.
const[query,setQuery] = useState('')

useEffect(()=>{
  const fetchItems = async ()=>{
    const result  = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);

 
    setItems(result.data)
    setisLoading(false);//It is getting data so loading false
  
  }
     
     
     fetchItems();
  },[query])
  
  return (
    <div className="App">
  
    <Header/>
    <Search getQuery={(q)=>setQuery(q)}/>
    <CharacterGrid isLoading ={isLoading} items={items}/>
    </div>
  );
}

export default App;
