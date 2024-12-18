import Carousel from "react-bootstrap/Carousel";
import Img1 from "./Img1.jpg";
import Img2 from "./Img2.jpg";
import Img3 from "./Img3.jpg";
export default function Slide() {
  return (
    <div 
  style={{
    zIndex:1
  }}  >
      <Carousel class="my-10" data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ width: "1300px", height: "600px" }}
            src={Img2}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ width: "1200px", height: "600px" }}
            src={Img1}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ width: "1300px", height: "600px" }}
            src={Img3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
