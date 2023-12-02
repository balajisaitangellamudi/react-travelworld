import { Col } from "reactstrap";
import tourData from "../Assets/data/tours";
import TourCard from "../shared/TourCard";

function FeaturedTourList() {
  console.log(tourData);
  return (
    <>
      {tourData?.map((tour) => (
        <Col lg="3" className="mb-4" key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
}

export default FeaturedTourList;
