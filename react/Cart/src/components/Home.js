import  Carousel  from 'react-bootstrap/Carousel'
import c1 from './img/c1.jpg';
import c2 from './img/c3.jpg';
import c3 from './img/c4.jpg';
import React from 'react'

const Home = () => {
return (
    <>
        <section style={{backgroundColor:"#ddd"}}>

        <div className="container mt-2" >

        <Carousel>
            <Carousel.Item>
            <img src={c1} alt="" className="d-block w-100" style={{height:"500px"}} />
            </Carousel.Item>
            <Carousel.Item>
            <img src={c2} alt="" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
            <img src={c3} alt="" className="d-block w-100" />
            </Carousel.Item>
        </Carousel>
        </div>
        </section>
    </>
)
}

export default Home