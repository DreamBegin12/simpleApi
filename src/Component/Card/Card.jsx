import React from 'react';
import "./Card.css";
import { useEffect, useState } from 'react';
import axios from "axios";


const Card = () => {
    const[userlist,setUserlist]=useState([]);
    


    useEffect(()=>{
        setTimeout(()=>{
            axios.get("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole")
            .then(res=>setUserlist(res.data))
        },1000)
            
    },[])

  return (
    <>
    <div className="App">
        {
            userlist.map(user  =>(
                <div className="card">
        <img src={"https://i.pravatar.cc/150?"+ user.first} alt="user" />
        <h1>{user.first}{user.last}</h1>
        <h2>{user.email}</h2>
        <h3>{user.address}</h3>
      </div>

            

            ))}
            
        
      
      </div>
    </>
  )
}

export default Card;
