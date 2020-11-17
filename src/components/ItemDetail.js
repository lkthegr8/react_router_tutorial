import React, { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'

function ItemDetail(rr){

        useEffect(()=>{
            fetchItems()
        },[])

        const [items,setItems]=useState(null)

    const fetchItems= async ()=>{
        const data =await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items=await data.json()
        setItems(items.data.find(item=>item.itemId===rr.match.params.id)) 
        
    }


    return items?(<div><h1>{items.item.name}</h1>
        <h1>{items.item.rarity}</h1>
        <h1>{items.item.series}</h1>
        <img src={items.item.images.icon}/></div>):<h1>loading</h1>
      

}

export default ItemDetail