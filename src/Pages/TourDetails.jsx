import "../styles/TourDetails.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import avatar from "../Assets/images/avatar.jpg";
import { useParams } from "react-router-dom";
import tourData from "../Assets/data/tours";
import calculateAvgRating from "../Utils/AvgRating";
import { useRef, useState } from "react";
import Bookings from "../Bookings/Bookings";

function TourDetails() {
  const { id } = useParams();
  const reviewsMsgRef = useRef("");
  const [tourRating, setTourrating] = useState(null);

  const tour = tourData.find((tour) => tour.id === id);
  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    distance,
    maxGroupSize,
    address,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewsMsgRef.current.value;
    alert(`${reviewText},${tourRating}`);
  };
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="" />
                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i
                        className="ri-star-fill"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "not rated"
                      ) : (
                        <span>({reviews?.length})</span>
                      )}
                    </span>
                    <span>
                      <i class="ri-map-pin-line"></i>
                      {address}
                    </span>
                  </div>
                  <div className="tour__extra__details">
                    <span>
                      <i class="ri-map-pin-fill"></i>
                      {city}
                    </span>

                    <span>
                      {" "}
                      <i class="ri-money-dollar-circle-line"></i>${price} /per
                      person
                    </span>
                    <span>
                      {" "}
                      <i class="ri-pin-distance-line"></i>${distance} /per
                      person
                    </span>

                    <span>
                      <i class="ri-group-line"></i>
                      {maxGroupSize} people
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                {/* ----tour review sec----*/}
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length})reviews</h4>
                  <Form onSubmit={submitHandler}>
                    <div className="  d-flex align-items-center gap-3  mb-4 rating__group">
                      <span onClick={() => setTourrating(1)}>
                        1 <i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setTourrating(2)}>
                        {" "}
                        2 <i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setTourrating(3)}>
                        {" "}
                        3 <i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setTourrating(4)}>
                        4 <i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setTourrating(5)}>
                        5 <i class="ri-star-s-fill"></i>
                      </span>
                    </div>
                    <div className="review__input">
                      <input
                        type="text"
                        ref={reviewsMsgRef}
                        placeholder="Share your thoughts"
                        required
                      />
                      <button className="btn primary__btn">Submit</button>
                    </div>
                  </Form>
                  <ListGroup className="user__reviews">
                    {reviews?.map((review) => (
                      <div className="review__item">
                        <img src={avatar} alt="" />
                        <div className="w-100">
                          <div className="div d-flex align-items-center justify-content-between">
                            <h5>Balaji sai</h5>
                            <span className="d-flex align-items-center">
                              5 <i class="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <p>
                            {new Date("06-28-2000").toLocaleDateString(
                              "en-US",
                              options
                            )}
                          </p>

                          <h6>amazing tour.........</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
                {/* ----tour review sec----*/}
              </div>
            </Col>
            <Col lg="4">
              <Bookings tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default TourDetails;
