import React from "react";
import { useState } from "react";
import data from "../../data.json";
import "../views/waiter.css"

const products = data.products;

function MenuTypeButton() {
  return (
    <div className="typeMenuButtons">
      {/* al botón asociar un evento que renderice un menú según selección, useState() o useEffect()*/}
      <button className="typeMenuButton" onClick={()=>console.log('desayuno')}>DESAYUNO</button>
      <button className="typeMenuButton" onClick={()=>console.log('menú diario')}>MENÚ DIARIO</button>
    </div>
  );
}

const order = [];

function MenuProducts() {
  return (
    <div className="productButtonContainer">
      {products.map((product) =>
      //el evento para que sume el producto debe estar en este botón, lo suma al array 'orden'
      <button className="productButton" id={product.id} onClick={(ev)=>console.log(ev.target.id)}>{product.name} {product.price}</button>)}      
    </div>
  );
}

function Order() {
  //acá debería usar useState para cambiar el estado y sumar
  //si orden != -1, por cada elemento retornar lo que sigue:
  //si orden == -1 retornar solo el div orden, para mantener el espacio en la pantalla
  return (
    <div className="order">
      <p>{order}</p>
    </div>
  );
}

function CreateWaiterView() {
  return (
    <div className="waiterViewContainer">
      <MenuTypeButton />
      <MenuProducts />
      <Order />
    </div>
  );
}

export default CreateWaiterView;
