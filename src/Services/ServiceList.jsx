import ServiceCard from "./ServiceCard";
import weatherImg from "../Assets/images/customization.png";
import guideImg from "../Assets/images/guide.png";
import customizationIMg from "../Assets/images/customization.png";
import { Col } from "reactstrap";

const servicesData = [
  {
    imageUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Loserm ipsum dolor sit amet balahjisjioajoj",
  },
  {
    imageUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Loserm ipsum dolor sit amet balahjisjioajoj",
  },
  {
    imageUrl: customizationIMg,
    title: "Customization",
    desc: "Loserm ipsum dolor sit amet balahjisjioajoj",
  },
];

function ServiceList({ serviceData }) {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
}

export default ServiceList;
