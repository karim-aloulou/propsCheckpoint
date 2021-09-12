import React from 'react';

const Profile=(props)=>(
    <div>
    <section>
    <h1 style={{color:"black"}}>fullname: {props.fullname}</h1>
    <h2 style={{color:"blue"}}>bio:  {props.bio}</h2>
    <h2 style={{color:"red"}}>profession: {props.profession}</h2>
    </section>
    <picture>
    <img src="/karim.jpg" alt="myPic" />   
    </picture>
    
    </div>
)

const HandleName=(props) =>{
    
    return alert({props});
  }
  export  {Profile,HandleName};
