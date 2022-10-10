import React,{useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Badge from '@mui/material/Badge'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import Menu from '@mui/material/Menu'
import cart from "./cart.gif"
import { useDispatch, useSelector } from 'react-redux'
import { DLT } from '../redux/actions/action'
import { useEffect } from 'react'
import '../fonts/icomoon/style.css'
import Alert from './Alert'

// import  MenuItem  from '@mui/material/MenuItem'


const Header = () => {

    const [price, setPrice] = useState(0);
    console.log(price)
    const getData = useSelector((state) => state.cartreducer.carts)
    console.log(getData)

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const dlt = (id) => {
        dispatch(DLT(id))
    }
    const total = () => {
        let price = 0;
        getData.map((ele, k) => {
            price = ele.price * ele.qnty + price;
        })
        setPrice(price)
    }
    useEffect(() => {
        total();
    },[total])
    return (
        <>
           
            <Navbar bg="dark" variant="dark" style={{ height: 60,fontSize:"20px" }}>
                <Container >
                    <div className="d-flex justify-content-center align-items-center px-3 ">
                    <NavLink to="/" className='text-decoration-none  txtcolor  m-3 ' >Food List</NavLink>
                    <Nav className="me-auto px-2">
                        <NavLink className='text-decoration-none  icon-home  mx-3 txtcolor ' to="/">Home</NavLink>
                        <NavLink className='text-decoration-none  icon-info_outline mx-3 txtcolor ' to="/about">About</NavLink>
                        <NavLink className='text-decoration-none  icon-contact_mail  txtcolor  mx-3' to="/contact">Contact</NavLink>
                    </Nav>
                    </div>
                    <Badge badgeContent={getData.length} color="primary"
                        id='basic-button'
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'basic-true' : undefined}
                        onClick={handleClick}
                    >
                        <i className='icon-shopping_cart text-light' style={{ fontSize: 30, cursor: "pointer" }}></i>
                    </Badge>
                </Container>
                <Menu
                    id='basic-menu'
                    anchorEL={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
            {
            getData.length ?
                <div className="card_details" style={{width:"24rem",padding:"10px"}}>
                    <Table>
                        <thead>
                            <th>Photo</th>
                            <th>Restaurant Name</th>
                                </thead>
                                <tbody>
                                {
                                getData.map((e) => {
                                    return (
                                        <>
                                        <tr>
                                            <td>
                                            <NavLink to={`/cart/${e.id}` }onClick={handleClose}>
                                            <img src={e.imgdata} style={{ width: "5rem", height: "5rem" }} alt="" />
                                            </NavLink>
                                            </td>
                                            <td>
                                                <p>{e.rname}</p>
                                                <p>Price : ₹ {e.price}</p>
                                                    <p>Quality {e.qnty}</p>
                                                    <p style={{color:"red",fontSize:20,cursor:"pointer"}}>
                                                        <i className="fas fa-trash smalltrash"></i>
                                                    </p>
                                                </td>
                                                <td className='mt-5' style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                                            <i className="fas fa-trash largetrash"onClick={()=>dlt(e.id)}></i>
                                                </td>
                                        </tr>
                                        </>
                                        )
                                    })
                                        }
                                        <p className='text-canter'>Total : ₹ {price} </p>
                            </tbody>
                                </Table>
                            </div> :
                            <div className="card_details d-flex justify-content-center align-items-center " style={{ width: "24rem", padding: 10, position: "relative" }}>
                            <i className='fas fa-close smallclose' style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }} onClick={handleClose} ></i>
                            <p style={{ fontSize: 22 }}>Your Cart is Empty</p>
                            <img src={cart} alt="" className="emptycart_img" style={{ width: "5rem", padding: 10 }} />
                        </div>
                        }
                </Menu>
            </Navbar>
            
        </>
    )
}

export default Header;