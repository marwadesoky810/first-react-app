import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className='container my-5'>
    <div className='row '>
    <div className="contact-title my-2  ">
          <h2 className="fw-bolder fs-1 text-center mt-5">CONATCT SECTION</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3 text-black"></div>
            <i className="fa-solid fa-star "></i>
            <div className="line ms-3 text-black"></div>
          </div>
        </div>
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">userName</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">userAge</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">userEamil</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">userPass</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <button type="submit" class="btn btn-success">Send Message</button>
</form>
    </div>
  </div>
  )
}
