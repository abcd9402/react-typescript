import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import { Address, Resturant } from './model/resturant';

let data:Resturant ={
  name:'누나네 식당',
  category: 'western',
  address:{
    city:'incheoi',
    detail:'somewhere',
    zipCode:23425634
  },
  menu:[{name:'rose pasta',price:2000,category:"PASTA"},{name:"garlic steak",price:3000,category:"MEAL"}]
}
const  App:React.FC = () => {
  const [myRestaurant,setMyRestaurant] = useState<Resturant>(data);
  const changeAddress = (address:Address) =>{
    setMyRestaurant({...myRestaurant,address:address})
  }
  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress}/>
    </div>
  );
}

export default App;
