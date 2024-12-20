import { useSelector, useDispatch } from "react-redux"
import { Button } from "react-bootstrap"
import { Container } from "react-bootstrap"
import {removeFromCart} from "../cartSlice"
import {increment, decrement} from "../cartSlice"


const Cart=()=>{

    const cart = useSelector(state=> state.cart.cart2)
    const dispatch = useDispatch()

    const ans = cart.map((item)=>(
        <div className="card" style={{width: "18rem",margin:"10px"}}>
            <img src={item.image} className="card-img-top" alt={item.name} style={{height:"200px"}}/>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                
                
                <div className="d-flex">
                    <Button variant="outline-secondary" onClick={()=>dispatch(decrement(item.id))} style={{marginRight:"10px"}}>-</Button>
                    <p className="card-text" style={{margin:"0px 10px"}}>{item.quantity}</p>
                    <Button variant="outline-secondary" onClick={()=>dispatch(increment(item.id))}>+</Button>
                </div>

                <Button variant="primary" onClick={()=>dispatch(removeFromCart(item.id))}>Remove from Cart</Button>
            </div>
        </div>
    ))

    return (    
        <>
          <Container fluid className="container" style={{display:"flex",flexWrap:"wrap"}}>
            {ans}
          </Container>
        </>
    )
}

export default Cart