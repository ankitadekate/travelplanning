import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value)
  }
  const handleSubmit = () => {
    alert(` Hii,${name} Your message send Successfully...!`)
  }
  return (
    <div>
      <section className="py-3 py-md-5 py-xl-8 contactForm">

        <div className="container">
          <div className="row mb-5" style={{ 'background-color': '#e8edf0' }}>

            {/* first-left-part.... */}
            <div className="col-12 col-lg-6">
              <div className="w-100 p-md-5 p-4">
                <h3 className="mb-4">Contact Us</h3>
                <p>Fill up the form and our Team will get back to you within 24 hours</p>
                <form>
                  <div className="row" >
                    <div className="col-12">
                      <div className='form-group'>
                        <label for="fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" placeholder='Enter Name' value={name} onChange={handleChange} required></input>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className='form-group'>
                        <label for="e-mail" className="form-label">Email <span className="text-danger">*</span></label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <a href="#"><i className="fas fa-envelope theme-color"></i></a>
                          </span>
                          <input type="email" className="form-control" placeholder="Email" required />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className='form-group'>
                        <label className="form-label">Phone Number</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <a href="#"><i className="fa fa-phone theme-color"></i></a>
                          </span>
                          <input type="tel" className="form-control" placeholder='Phone.No'></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 md-6">
                      <div className='form-group'>
                        <label for="subject" className="form-label">Address <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" placeholder='Your address' required></input>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className='form-group'>
                        <label for="message" className="form-label">Message <span className="text-danger">*</span></label>
                        <textarea className="form-control" placeholder='Type your Message...' rows="3" required></textarea>
                      </div>
                    </div>
                    <div className="col-10">
                      <button className="btn theme-bgcolor text-white" type="submit" onClick={handleSubmit}>Send Message</button>

                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Second right part... */}
            <div className="col-12 col-lg-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.054777840338!2d73.79802127389024!3d18.61660578249566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8ff528b5cff%3A0xe229910168b08148!2sKunal%20Plaza%2C%20Tapovan%20Mandir%20Rd%2C%20Savta%20Mali%20Nagar%2C%20Pimpri%20Colony%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411017!5e0!3m2!1sen!2sin!4v1739199303335!5m2!1sen!2sin" width="560" height="650" style={{ "border": "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div class="dbox w-100 text-center">
                <div class="icon d-flex align-items-center justify-content-center theme-bgcolor">
                  <span class="fa fa-map-marker"></span>
                </div>
                <div class="text">
                  <h6 className="text-uppercase font-weight-800">Address</h6>
                  <p> 3rd floor Kunal Plaza, <br />Pimpari-Chichwad Pune.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div class="dbox w-100 text-center">
                <div class="icon d-flex align-items-center justify-content-center theme-bgcolor">
                  <span class="fa fa-phone"></span>
                </div>
                <div class="text">
                  <h6 className="text-uppercase font-weight-800">Phone</h6>
                  <p> Speak with us directly <br /> <a class="theme-color text-decoration-none" href="tel:+15057922430">(505) 792-2430</a></p>
                </div>
              </div>


            </div>
            <div className="col-md-3">
              <div class="dbox w-100 text-center">
                <div class="icon d-flex align-items-center justify-content-center theme-bgcolor">
                  <span class="fa fa-paper-plane"></span>
                </div>
                <div class="text">
                  <h6 className="text-uppercase font-weight-800">E-mail</h6>
                  <p> Write to us directly<br />  <a class="theme-color text-decoration-none" href="travelplanning@gmail.com">travelplanning@gmail.com</a></p>
                </div>
              </div>


            </div>
            <div className="col-md-3">
              <div class="dbox w-100 text-center">
                <div class="icon d-flex align-items-center justify-content-center theme-bgcolor">
                  <span class="fa fa-clock"></span>
                </div>
                <div class="text">
                  <h6 className="text-uppercase font-weight-800">Opening Hours</h6>
                  <p> Our business opening hours.</p>
                  <div>
                    <div className="d-flex justify-content-center mb-1">
                      <p className="text-secondary fw-bold mb-0 me-5">Mon - Fri</p>
                      <p className="text-secondary mb-0"> 9am - 5pm</p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <p className="text-secondary fw-bold mb-0 me-5">Sat - Sun</p>
                      <p className="text-secondary mb-0">9am - 2pm</p>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
