import "../styles/Home.css";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import heroImg1 from "../Assets/images/hero-img01.jpg";
import heroImg2 from "../Assets/images/hero-img02.jpg";
import heroImg3 from "../Assets/images/hero-img03.jpg";
// import heroVideo from "../Assets/images/heroVideo.mp4";
import worldImg from "../Assets/images/world.png";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../Services/ServiceList";
import FeaturedTourList from "../Featured-tours/FeaturedTourList";
import experienceImg from "../Assets/images/experience.png";
import MansoryImagesGallery from "../Image-gallery/MansoryImagesGallery";
import Testimonial from "../Testimonials/Testimonials";
import Newsletter from "../shared/Newsletter";

function Home() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="world img" />
                </div>
                <h1>
                  Travelling opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Some travel to learn more while some travel to take a break
                  from their life. No matter the reason, travelling opens a big
                  door for us to explore the world beyond our imagination and
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__imgbox">
                <img src={heroImg1} alt="heroimg1" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__imgbox mt-4">
                {/*----<video src={heroVideo} controls />----*/}
                <img src={heroImg3} alt="heroimg1" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__imgbox mt-5">
                <img src={heroImg2} alt="heroimg2" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/*----hero Section start----*/}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="service__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/*---featured tour section start---*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/*---featured tour section end---*/}
      {/*---Experience sec starts---*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experience <br />
                  we will serve you
                </h2>
                <p>
                  Lorem ipsun dolr sit amet, consecttur adisiping elit. <br />{" "}
                  Quas aliquam, hic tempora investore suspist unde.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12+</span>
                  <h6>Sucessful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*---Experience sec ends---*/}
      {/*---Gallery section start---*/}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit Your customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MansoryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/*---Gallery section ends---*/}
      {/*---Testimonial sec Starts---*/}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love..."} />
              <h2 className="testimonial__title">
                What our fans say about us...
              </h2>
            </Col>
          </Row>
          <Col lg="12">
            <Testimonial />
          </Col>
        </Container>
      </section>
      {/*---Testimonial sec ends---*/}
      <Newsletter />
    </>
  );
}
export default Home;
