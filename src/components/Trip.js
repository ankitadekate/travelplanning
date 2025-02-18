import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Trip() {

  const [destinations, setDestinations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  let navigate = useNavigate()


  // Fetch data from the API
  useEffect(() => {
    axios
      .get("https://www.freetestapi.com/api/v1/destinations")
      .then((response) => {
        // Assuming the API returns 50 destinations
        setDestinations(response.data); // Limit to 50 destinations
        // Set recent guides (mock data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDestinationClick = (destination) => {
    localStorage.setItem("selectedDestination", JSON.stringify(destination))
    navigate('/tripDetails')
  };

  return (
    <div>
      <div className="Trip">
        <div class="heroimage mb-5">
          <div class=" widthLimit">
            <div class="herotext">
              <h1>Explore travel guides and itineraries</h1>
              <br></br>

              <input
                type="text"
                placeholder="Search for a destination"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-box theme-bordercolor"
              />
              <br /><br />
              <h2>Or browse our most popular destinations</h2>
            </div>

          </div>
        </div>


        <section className="popular-destinations page-container">
          <h3 className="mb-4">Explore popular destinations</h3>
          <div className="destination-grid">
            {filteredDestinations.map((destination) => (
              <div
                key={destination.id}
                className="destination-card theme-bordercolor"
                onClick={() => handleDestinationClick(destination)}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="destination-image"
                />
                <h3 className="ps-2">{destination.name}</h3>
                <p className="truncate-text ps-2">{destination.description}</p>

              </div>
            ))}
          </div>
        </section>


      </div>
    </div>
  )
}
