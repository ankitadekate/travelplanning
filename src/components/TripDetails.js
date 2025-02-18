import React, { useState, useEffect } from 'react'

export default function TripDetails() {
    const [destinations, setDestinations] = useState([]);


    useEffect(() => {
        const data = localStorage.getItem("selectedDestination")
        if (data) {
            setDestinations(JSON.parse(data));
        }

    }, [])

    return (
        <div>
            <div className='container tripDetail'>
                <div className='row'>
                    <div className='col-md-12'>
                        <img
                            src={destinations.image}
                            alt={destinations.name}
                            className="destination-image"
                        />
                        <h5 className="herotext theme-color py-4">{destinations.name}, {destinations.country}, {destinations.continent}</h5>
                    </div>
                </div>

                <div className='row py-2'>
                    <div className='col-md-6'>
                    <p> {destinations.description}</p>
                    <a className="theme-bgcolor abutton" href="/contact">Enquiry Now</a>
                    </div>
                </div>

                <div className='row py-4'>
                    <div className='col-md-3'>
                        <div className='small-cards'>
                            <p><span className='text-bold'>Population</span><br /> {destinations.population}</p>
                        </div>
                        
                    </div>
                    <div className='col-md-3'>
                        <div className='small-cards'>
                        <p><span className='text-bold'>Currency</span><br /> {destinations.currency}</p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='small-cards'>
                        <p><span className='text-bold'>Language</span><br /> {destinations.language}</p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='small-cards'>
                        <p><span className='text-bold'>Best Time to Visit</span> <br />{destinations.best_time_to_visit}</p>
                        </div>
                    </div>
                    
                </div>

                <div className='row py-4'>
                    <div className='col-md-12'>
                        <h5 className='trip-heading'>Top Attrations</h5>
                    </div>
                    {
                        destinations.top_attractions?.map((attraction, index) => (
                            <div className='col-md-3'>
                                <img className="img_box" src={`../../images/top_attraction${index}.jpg`} style={{'width': '100%'}}/>
                                <h6 className="trip-heading" key={index}>{attraction}</h6>
                            </div>
                        ))
                    }
                    
                </div>

                <div className='row py-4'>
                    <div className='col-md-12'>
                        <h5 className='trip-heading'>Local Dishes </h5>
                    </div>
                    {
                        destinations.local_dishes?.map((dish, index) => (
                            <div className='col-md-4'>
                                 <img className="img_box" src={`../../images/dish${index}.jpg`} style={{'width': '100%'}}/>
                                <h6 className="trip-heading" key={index}>{dish}</h6>
                            </div>
                        ))
                    }
                </div>

                <div className='row py-4'>
                    <div className='col-md-12'>
                        <h5 className='trip-heading'>Activities to do</h5>
                    </div>
                    {
                        destinations.activities?.map((activity, index) => (
                            <div className='col-md-4'>
                                 <img className="img_box" src={`../../images/activities${index}.jpg`} style={{'width': '100%'}}/>
                                <h6 className="trip-heading" key={index}>{activity}</h6>
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}
