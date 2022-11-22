import React,{useState,useEffect} from "react";
import logo from '../../img/logo.png';

const Header = ()=>{
    const[items,setItem] = useState([]);
    const[isLoading,setisLoading] = useState(true);

    useEffect(()=>{

    })
    

  return (
    <header className="center">
        <img src={logo} alt=''/>

    </header>
    )
}
export default Header;