import { Card, CardBody } from "reactstrap";
import "./TourCard.css";
import { Link } from "react-router-dom";
import calculateAvgRating from "../Utils/AvgRating";

function TourCard({ tour }) {
  const { id, title, city, photo, price, featured, reviews } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={photo} alt="" />
          {featured && <span>Featured</span>}
        </div>
        <CardBody>
          <div
            className="card__top"
            d-flex
            align-items-center
            justify-content-between
          >
            <div className="d-flex align-items-center justify-content-between">
              <span className="tour__location">
                <i className="ri-map-pin-line"></i>
                {city}
              </span>
              <span className="tour__rating">
                <i className="ri-star-fill"></i>
                {avgRating === 0 ? null : avgRating}
                {totalRating === 0 ? (
                  "not rated"
                ) : (
                  <span>({reviews.length})</span>
                )}
              </span>
            </div>
          </div>

          <h5 className="tour__title">
            <Link to={`/tours/${id}`}>{title}</Link>
          </h5>
          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ${price} <span className="card__bottom-span">/per person</span>
            </h5>
            <button className="btn booking__btn">
              <Link to={`/tours/${id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
export default TourCard;
