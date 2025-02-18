import React, { useState, useEffect } from 'react'

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: "", rating: 5, comment: "", photos: [] });
  const [modalImage, setModalImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment && newReview.photos.length > 0) {
      setReviews([...reviews, { ...newReview, id: Date.now() }]);
      setNewReview({ name: "", rating: 5, comment: "", photos: [] });
      console.log('Review', newReview)
    }
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files).slice(0, 3);
    setNewReview({ ...newReview, photos: files });
    console.log('Review', newReview)
  };

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  useEffect(() => {
    setReviews([{
      id: 1,
      photos: ['../../images/paris1.jpg', '../../images/paris2.jpg', '../../images/paris3.jpg'],
      name: 'Ankita Dekate',
      rating: 5,
      comment: 'Enhance your Paris sightseeing experience on a glamorous Seine River cruise, including dinner and live music. Enjoy unobstructed views of the sights, and pass world-famous Paris monuments lit up after dark. Live music and dishes inspired by classic French cuisine create an unforgettable atmosphere. A range of menu options provide a custom experience for every budget and taste.'
    },
    {
      id: 2,
      photos: ['../../images/dubai1.jpg', '../../images/dubai2.jpg', '../../images/dubai3.jpg'],
      name: 'Ashutosh Kumar',
      rating: 3,
      comment: 'Experience several desert pursuits in one outing, including ATV-driving—something many tours only offer at an extra cost—on this red-dune desert tour from Dubai. Skip the hassle of transport and logistical planning; and be free to simply enjoy the dunes and activities provided. Zoom off on an ATV, ride a camel, go sandboarding; enjoy henna art and Arabian-costume photos; and conclude with a barbecue-buffet dinner and live shows.'
    },
    {
      id: 3,
      photos: [ '../../images/dubai2.jpg', '../../images/dubai3.jpg'],
      name: 'Aachal Shukla',
      rating: 2,
      comment: 'Skip the hassle of transport and logistical planning; and be free to simply enjoy the dunes and activities provided. Zoom off on an ATV, ride a camel, go sandboarding; enjoy henna art and Arabian-costume photos; and conclude with a barbecue-buffet dinner and live shows.'
    }])
  }, [])


  return (
    <div>
      <div className="review py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row mb-5" style={{ 'background-color': '#e8edf0' }}>


            {/* Flex container for form and photo cards */}
            <div className="d-flex align-items-start">
              {/* Left column with form */}
              <div className="col-md-6">
                <div className="w-100 p-md-5 p-4">
                  <h3 className="mb-4">Write a review</h3>
                  <p>Stories like yours are what helps travellers have better trips. Share your experience and help out a fellow traveller!</p>

                  <form onSubmit={handleSubmit}>


                    <div className='form-group'>
                      <label for="fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
                      <input type="text" placeholder="Enter Name" value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        className="form-control" required />
                    </div>

                    <div className='form-group'>
                      <label for="review" className="form-label">Review <span className="text-danger">*</span></label>
                      <textarea placeholder="Enter Review" value={newReview.comment} rows="10"
                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                        className="form-control" required></textarea>
                    </div>

                    <div className='form-group'>
                      <label for="review" className="form-label">Rating <span className="text-danger">*</span></label>
                      <div className="d-flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`bi bi-star${i < newReview.rating ? "-fill text-warning" : " text-secondary"}`}
                            style={{ cursor: "pointer", fontSize: "1.5rem" }}
                            onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
                          ></i>
                        ))}
                      </div>
                    </div>

                    {/* Photo upload section */}
                    <div className='form-group'>
                      <input type="file" accept="image/*" multiple
                        onChange={handlePhotoUpload} className="form-control mb-3" max={3} />
                      <div className="">
                        {newReview.photos.map((photo, index) => (
                          <img
                            key={index}
                            src={typeof(photo) == "string" ? photo : URL.createObjectURL(photo)}
                            alt={`Uploaded ${index + 1}`}
                            className="img-thumbnail me-2"
                            style={{ width: "100px", height: "100px", objectFit: "cover", cursor: "pointer" }}
                            onClick={() => openModal(typeof(photo) == "string" ? photo : URL.createObjectURL(photo))} // Open modal on click
                          />
                        ))}
                      </div>
                    </div>
                    <button type="submit" className="btn theme-bgcolor" style={{ color: "white" }}>
                      Submit Review
                    </button>
                  </form>
                </div>
              </div>

              {/* Right column with uploaded photos and reviews */}
              <div className="col-md-6">
                <div className="row">
                  {reviews.map((review) => (
                    <div key={review.id} className="col-12"> {/* Updated this to col-12 */}
                      <div className="card border-0 p-4"> {/* Card width adjusted */}
                        <div className="card-body bg-white">
                          {/* Display Photos in a Horizontal Line */}
                          <div className="d-flex justify-content-between mb-3">
                            {review.photos.map((photo, index) => (
                              <div key={index} className="me-2" style={{ flex: 1 }}>
                                <img
                                  src={typeof(photo) == "string" ? photo : URL.createObjectURL(photo)}
                                  alt={`Uploaded ${index + 1}`}
                                  className="img-fluid rounded"
                                  style={{ objectFit: "contain", height: "200px", width: "100%", cursor: "pointer" }}
                                  onClick={() => openModal(typeof(photo) == "string" ? photo : URL.createObjectURL(photo))}
                                />
                              </div>
                            ))}
                          </div>

                          {/* Display Review Below Images */}
                          <h5 className="card-title theme-color">
                            {review.name}
                          </h5>
                          <div className="d-flex gap-1 my-2">
                            {[...Array(5)].map((_, i) => (
                              <i
                                key={i}
                                className={`bi ${i < review.rating ? "bi-star-fill text-warning" : "bi-star text-secondary"}`}
                              ></i>
                            ))}
                          </div>
                          <p className="card-text">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Enlarged Image */}
        {modalImage && (
          <div className="modal fade show" style={{ display: "block" }} id="imageModal" tabIndex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="imageModalLabel">Image</h5>
                  <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                </div>
                <div className="modal-body text-center">
                  <img src={modalImage} alt="Enlarged" className="img-fluid" />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary theme-bgcolor" onClick={closeModal}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}
