import CommonSection from "../shared/CommonSection";
import "../styles/Tours.css";
import TourCard from "../shared/TourCard";
import { Container, Col, Row } from "reactstrap";
import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";
import tourData from "../Assets/data/tours";
import { useState, useEffect } from "react";
function Tours() {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
  }, []);
  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {tourData?.map((tour) => (
              <Col lg="3" ket={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}
            <Col lg="12" className="mb-4">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => {
                      setPage(number);
                    }}
                    className={page === number ? "active__page" : ""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
}
export default Tours;
