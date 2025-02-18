import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="bg-dark py-4 mt-4" style={{backgroundColor: '#2C3E50', color: '#ffffff'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center text-md-start">
              <h5 className='theme-color'>About Us</h5>
              <p className="small">
                Explore The World is your go-to platform for discovering amazing destinations, travel tips, and unforgettable adventures.
              </p>
            </div>

            <div className="col-md-4 text-center">
              <h5 className='theme-color'>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Home</a></li>
                <li><a href="#" className="text-white text-decoration-none">Destinations</a></li>
                <li><a href="#" className="text-white text-decoration-none">About</a></li>
                <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
              </ul>
            </div>

            <div className="col-md-4 text-center text-md-end">
              <h5 className='theme-color'>Connect With Us</h5>
              <div className="d-flex justify-content-center justify-content p-2">
                <a href="#" className="text-white m-3">
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a href="#" className="text-white m-3">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#" className="text-white m-3">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href="#" className="text-white m-3">
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
              </div>
            </div>
          </div>

          <hr className="bg-light mt-3" />

          <div className="text-center">
            <p className="mb-0 small">© 2025 Explore The World. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
