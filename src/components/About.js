import React from 'react'

export default function About() {
  return (
    <div>

      <div className="about heroimage">
        <div className=" widthLimit">
          <div className="herotext">About Us</div>
        </div>
      </div>

      <div className='container'>

        <div className='row padding-bottom-5 padding-top-5'>
          <div className='col-md-6'>
            <h2>Our History & Story</h2>
            <p>Travel planning, the world's largest travel platform, helps 463 million travelers each month 
              make every trip their best trip. Travelers across the globe use the Travel planning site and app 
              to browse more than 859 million reviews and opinions of 8.6 million accommodations, 
              restaurants, experiences, airlines and cruises.<br /><br /> Whether planning or on a trip, travelers turn to 
              Travel planning to compare low prices on hotels, flights and cruises, book popular tours and 
              attractions, as well as reserve tables at great restaurants. Travel planning, the ultimate travel 
              companion, is available in 49 markets and 28 languages.</p>
          </div>
          <div className='col-md-6'>
            <img src="../../images/about3.jpg" alt="about" style={{'width': '100%'}}/>
          </div>
        </div>

        <div className='row padding-bottom-5'>
        <div className='col-md-6'>
            <img src="../../images/about4.jpg" alt="about" style={{'width': '100%'}}/>
          </div>
          <div className='col-md-6'>
            <h2>Our Mission </h2>
            <p>Helping millions of people become better traveller. Travel Planning, the world's largest travel guidance platform, helps millions of people each month 
              become better travelers, from planning to booking to taking a trip. Travelers across the globe use 
              Travel Planning website and app to discover where to stay, what to do and where to eat based on 
              guidance from those who have been there before. <br /><br />With more than a billion reviews and contributions, 
              travelers turn to Travel Planning to find deals on accommodations, book experiences, reserve tables at 
              delicious restaurants and discover great places nearby.</p>
          </div>
          
        </div>

        <div className='row padding-bottom-5'>
          <div className='col-md-12 text-center'>
            <h2>Our Perfect Team </h2>
          </div>
        </div>
        <div className='row padding-bottom-5'>
          <div className='col-md-4'>
            {/* <img src="../../images/team1.jpg" alt="about" style={{'width': '100%'}}/> */}
            <div className='team-image'>
              <div className="theme-bordercolor" style={{'backgroundImage': 'url(../../images/team1.jpg)'}}></div>
            </div>
            <div className='team-info'>
              <h5 className='team-name'>Aachal Shukla</h5>
              <p className='team-designation'>Creative Developer</p>
              <p className='team-description'>Bring ideas to life with our powerful UI design features, start designing smarter today. 
                Create stunning UI designs with Figma, the smart solution for modern design teams.</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='team-image'>
              <div className="theme-bordercolor" style={{'backgroundImage': 'url(../../images/team5.jpeg)'}}></div>
            </div>
            <div className='team-info'>
              <h5 className='team-name'>Aniket Bhattacharya</h5>
              <p className='team-designation'>Creative Developer</p>
              <p className='team-description'>Bring ideas to life with our powerful UI design features, start designing smarter today. 
                Create stunning UI designs with Figma, the smart solution for modern design teams.</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='team-image'>
              <div className="theme-bordercolor" style={{'backgroundImage': 'url(../../images/team3.jpg)'}}></div>
            </div>
            <div className='team-info'>
              <h5 className='team-name'>Aniket Patil</h5>
              <p className='team-designation'>Creative Developer</p>
              <p className='team-description'>Bring ideas to life with our powerful UI design features, start designing smarter today. 
                Create stunning UI designs with Figma, the smart solution for modern design teams.</p>
            </div>
          </div>
          </div>
          <div className='row padding-bottom-5 justify-content-center'>
            <div className='col-md-4'>
              <div className='team-image'>
                <div className="theme-bordercolor" style={{'backgroundImage': 'url(../../images/team7.jpg)'}}></div>
              </div>
              <div className='team-info'>
                <h5 className='team-name'>Ankita Dekate</h5>
                <p className='team-designation'>Creative Developer</p>
                <p className='team-description'>Bring ideas to life with our powerful UI design features, start designing smarter today. 
                  Create stunning UI designs with Figma, the smart solution for modern design teams.</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='team-image'>
                <div className="theme-bordercolor" style={{'backgroundImage': 'url(../../images/team6.png)'}}></div>
              </div>
              <div className='team-info'>
                <h5 className='team-name'>Ashutosh Kumar</h5>
                <p className='team-designation'>Creative Developer</p>
                <p className='team-description'>Bring ideas to life with our powerful UI design features, start designing smarter today. 
                  Create stunning UI designs with Figma, the smart solution for modern design teams.</p>
              </div>
            </div>
        </div>

      </div>

    </div>
  )
}
