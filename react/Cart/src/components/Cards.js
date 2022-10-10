import Card  from 'react-bootstrap/Card'
import Button  from 'react-bootstrap/Button'
import React, { useState } from 'react'
import Home from './Home';
import CardData from './CardData'
import "./style.css"
import { useDispatch } from 'react-redux'
import {ADD} from '../redux/actions/action'

const Cards = () => {
  const [data, setData] = useState(CardData)

  const dispatch = useDispatch();
  const send = (e) => {
    // console.log(e)
    dispatch(ADD(e))
  }
  return (
    <>
      <Home />
      <div className="container mt-3">
        <h2 className='text-center ' style={{backgroundColor:"#ddd",borderRadius:"8px"}}>Food List</h2>
      </div>
      <div className="row d-flex justify-content-center align-item-center">
        {
          data.map((element, id)=>{
          return(
            <>
              <Card style={{width:"22rem",border:"none"}} className="mx-2 mt-4 card_style" >
          <Card.Img variant="top" src={element.imgdata} style={{height:"16rem",width:"100%"}} className="mt-3" />
          <Card.Body>
                    <Card.Title>{element.rname }</Card.Title>
                  <Card.Text>
                    Price : Rs. {element.price }
                  </Card.Text>
                  <div className="button_div d-flex justify-content-center">
            <Button variant="dark" className="col-lg-12 btn-hover" onClick={()=>send(element)} >Add to Cart</Button>
                  </div>
          </Card.Body>
        </Card>
            </>
          )
          })
        }
        
      </div>
    </>
  )
}

export default Cards