import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [destinations, setDestinations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  let navigate = useNavigate()
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDestinationClick = (destination) => {
    localStorage.setItem("selectedDestination", JSON.stringify(destination))
    navigate('/tripDetails')
  };
  useEffect(() => {
    fetch('https://www.freetestapi.com/api/v1/destinations')
      .then(response => response.json())
      .then(data => setDestinations(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

 
  return (
    <div>
      <div className="jumbotron text-center" style={{
        backgroundColor: '#ffff',
        backgroundImage: `url(../../images/home1.jpg)`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '100px 0'
      }}>
        <h1 className="display-4 text-center" style={{ color: '#2C3E50', textShadow: '2px 2px 4px rgba(255,255,255,0.5)' }}>Explore The World</h1>
        <p className="lead text-center text-dark" style={{ color: '#fff' }}>Discover new places and create unforgettable memories</p>
        <div className="search-container mt-4" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <input
            type="text"
            className="search-input theme-bordercolor"
            placeholder="Search for a destination"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="search-button theme-bgcolor theme-bordercolor" >Search</button>
        </div>
      </div>



      <div className="container home">
        <div className='row'>
          <div className='col-md-12'>
            <div className="py-4">
              <h2 >Top Destinations</h2>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {filteredDestinations.slice(0, 6).map((destination) => (
            <div className="col-md-4 p-3" key={destination.id}
            onClick={() => handleDestinationClick(destination)}>
              <div className="card h-100" style={{
                width: '100%',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out'
              }}>
                <img
                  src={destination.image}
                  className="card-img-top"
                  alt={destination.name}
                  style={{
                    objectFit: 'cover',
                    height: '200px',
                    transition: 'transform 0.3s ease-in-out'
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" style={{ fontWeight: '600' }}>{destination.name}</h5>
                  {/* <p className="card-text flex-grow-1">{destination.description}</p> */}
                  <p className="card-text flex-grow-1"><span className='text-bold'>Top Attraction:</span>
                    {destination.top_attractions?.map((attraction, index) => (
                      <span key={index}> {attraction}, </span>
                    ))}
                  </p>
                  <p className="card-text flex-grow-1"><span className='text-bold'>Local Dishes: </span>
                    {destination.local_dishes?.map((dish, index) => (
                      <span key={index}> {dish}, </span>
                    ))}
                  </p>
                  <a
                    className="mt-auto theme-color text-12"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      <div className="container home">
        <div className='row'>
          <div className='col-md-12'>
            <div className="py-4">
              <h2>Top Attractions</h2>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {filteredDestinations
            .filter(destination => destination.top_attractions)
            .slice(8, 16)
            .map((destination) => (
              <div className="col-md-3 p-3" key={destination.id}
              onClick={() => handleDestinationClick(destination)}>
                <div className="card h-100" style={{
                  width: '100%',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease-in-out'
                }}>
                  <img
                    src={destination.image}
                    className="card-img-top"
                    alt={destination.name}
                    style={{
                      objectFit: 'cover',
                      height: '200px',
                      transition: 'transform 0.3s ease-in-out'
                    }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title" style={{ fontWeight: '600' }}>{destination.name}</h5>
                    <p className="card-text flex-grow-1">{destination.description}</p>
                    <a
                      className="mt-auto theme-color text-12"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

     
    </div>
  )
}
