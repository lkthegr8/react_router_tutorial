import React, { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'

function ItemDetail(rr){

        useEffect(()=>{
            fetchItems()
        },[])

        const [items,setItems]=useState([])

    const fetchItems= async ()=>{
        const data =await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items=await data.json()
        console.log(items.data);
        setItems(items.data.find(item=>item.itemId===rr.match.params.id)) 
    }

    console.log(rr.match.params.id);
    console.log(items);

    return (
      <div>
        <h1>{items.item.name}</h1>
        <h1>{items.item.rarity}</h1>
        <h1>{items.item.series}</h1>
        <img src={items.item.images.icon} />
      </div>
    );
}

export default ItemDetail

