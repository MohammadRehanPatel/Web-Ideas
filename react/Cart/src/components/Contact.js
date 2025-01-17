import React,{useState,useEffect} from 'react'
import '../fonts/icomoon/style.css'
import Alert from './Alert'

const Contact = (props) => {

  const [alert, setAlert] = useState(null)
  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1800);
  }
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message:"",
  })

  let name,value
  const getUserData = (event) => {
    name= event.target.name;
    value= event.target.value;

    setUser({ ...user, [name]: value });
  }
  const postData =async (e) => {
    e.preventDefault();

    const { name, email, phone, address, message, } = user;

    if (name&& email&& phone&& address&& message) {
      
   

    const res = await fetch('https://foodsitecontact-default-rtdb.firebaseio.com/foodsiteContact.json', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        name,
        email,
        phone,
        address,
        message
      })
    })
    if (res) {
      setUser({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
      showAlert("Data Stored Succefully",'success')
      }
    } else {
        showAlert("Fill All the Entries",'warning')
    }
  }
return (
  <>
    <Alert alert={alert} />
    <div className="content">

    <div className="container">
    <div className="row align-items-stretch no-gutters contact-wrap">
        <div className="col-md-8">
        <div className="form h-100">
            <h3>Send us a message</h3>
            <form className="mb-5" method="post" id="contactForm" name="contactForm">
            <div className="row">
                <div className="col-md-6 form-group mb-5">
                  <label for="" className="col-form-label">Name *</label>
                <input type="text" className="form-control" name="name" id="name"value={user.name} onChange={getUserData} placeholder="Your name"/>
                </div>
                <div className="col-md-6 form-group mb-5">
                  <label for="" className="col-form-label">Email *</label>
                <input type="text" className="form-control" name="email" id="email" value={user.email} onChange={getUserData} placeholder="Your email"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 form-group mb-5">
                <label for="" className="col-form-label">Phone</label>
                <input type="text" className="form-control" name="phone" id="phone" value={user.phone} onChange={getUserData} placeholder="Phone #"/>
                </div>
                <div className="col-md-6 form-group mb-5">
                <label for="" className="col-form-label">Address</label>
                <input type="text" className="form-control" name="address" id="address" value={user.address} onChange={getUserData} placeholder="Address"/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 form-group mb-5">
                  <label for="message" className="col-form-label">Message *</label>
                <textarea className="form-control" name="message" id="message" cols="30" rows="4" value={user.message} onChange={getUserData} placeholder="Write your message"></textarea>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 form-group">
                <input type="submit" value="Send Message" onClick={postData} className="btn btn-dark rounded-0 btn-hover py-2 px-4"/>
                <span className="submitting"></span>
                </div>
            </div>
            </form>

            <div id="form-message-warning mt-4"></div>
            <div id="form-message-success">
              Your message was sent, thank you!
            </div>

          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-info h-100">
            <h3>Contact Information</h3>
            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, magnam!</p>
            <ul className="list-unstyled">
              <li className="d-flex">
                <span className="wrap-icon icon-room mr-3"></span>
                <span className="text">9757 Aspen Lane South Richmond Hill, NY</span>
              </li>
              <li className="d-flex">
                <span className="wrap-icon icon-phone mr-3"></span>
                <span className="text">+1 (291) 939 9321</span>
              </li>
              <li className="d-flex">
                <span className="wrap-icon icon-envelope mr-3"></span>
                <span className="text">info@mywebsite.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
    </>
)
}

export default Contact