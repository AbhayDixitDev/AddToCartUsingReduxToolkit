import { useState, useEffect } from "react"
import axios from "axios"
import { Button } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { addTocart } from "../cartSlice";

const Home=()=>{
    const [products,setProducts]=useState([]);
    const dispatch = useDispatch();

    useEffect(()=>{
        axios.get("http://localhost:4000/components")
        .then((res)=>setProducts(res.data))
    },[])
   const ans = products.map((item)=>(
            <div className="card" style={{width: "18rem",margin:"10px"}}>
                <img src={item.image} className="card-img-top" alt={item.name} style={{height:"200px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <Button variant="primary" onClick={()=>dispatch(addTocart({...item,quantity:1}))}>Add to Cart</Button>
                </div>
            </div>
       
   ))

    return (    
        <>
            <div fluid className="container" style={{display:"flex",flexWrap:"wrap"}}>
            {ans}
            </div>
        </>
    )
}

export default Home