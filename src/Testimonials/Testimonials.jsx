import Slider from "react-slick";
import ava01 from "../Assets/images/ava-1.jpg";
import ava02 from "../Assets/images/ava-2.jpg";
import ava03 from "../Assets/images/ava-3.jpg";
function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 200,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testinomial py-4 px-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          convallis quis risus nec aliquam. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5 className="mb-0 mt-3">Balaji Sai</h5>
            <p>Customers</p>
          </div>
        </div>
      </div>
      <div className="testinomial py-4 px-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          convallis quis risus nec aliquam. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5 className="mb-0 mt-3">Lucy</h5>
            <p>Customers</p>
          </div>
        </div>
      </div>{" "}
      <div className="testinomial py-4 px-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          convallis quis risus nec aliquam. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5 className="mb-0 mt-3">Sanjay Rama Swamy</h5>
            <p>Customers</p>
          </div>
        </div>
      </div>
      <div className="testinomial py-4 px-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          convallis quis risus nec aliquam. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5 className="mb-0 mt-3">Sanjay Rama Swamy</h5>
            <p>Customers</p>
          </div>
        </div>
      </div>
    </Slider>
  );
}
export default Testimonial;
