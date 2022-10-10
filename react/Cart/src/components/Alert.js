import React from 'react'
import '../fonts/icomoon/style.css'
import l from './img/l.gif'
const Alert = (props) => {
return (
	<>
		<div style={{height:"50px"}}>
			{props.alert && <div className="container">
				<div className="row ">
					<div className={`alert alert-${props.alert.type} shadow`} role="alert">
						<div className="row no-gutters  d-flex justify-content-center align-items-center">
							{/* <div className="col-4"> */}
							<img src={l} className="card-img" style={{height:"60px",width:"150px"}} alt="Gears" />
							{/* <i className='icon-gears text-center'></i> */}
							{/* </div> */}
							<h4 className='font-weight-light text-center' >{props.alert.msg}</h4>
						</div>
					</div>
				</div>
			</div>}
		</div>
		   {/* <div style={{ height: '50px' }}>
              {props.alert && <div className={`alert alert-warning d-flex align-items-center alert-dismissible fade show `} role="alert">
				<strong>
				{props.alert.msg}
				</strong> 
              </div>}
    </div> */}
    </>
)
}

export default Alert