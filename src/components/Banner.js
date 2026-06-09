import { Carousel, Button } from "react-bootstrap";

function Banner() {
  return (
    <Carousel fade>

      {/* Slide 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://tse3.mm.bing.net/th/id/OIP.vAOFhFFJkCMMFMbmaHMIDQHaGX?pid=Api&h=220&P=0-d80222895322"
          alt="First slide"
          style={{ height: "60vh", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h1>New Fashion Collection 2026</h1>
          <p>Discover the latest trends in for 2026.</p>
          <Button variant="light">Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
          alt="Second slide"
          style={{ height: "60vh", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h1>Summer SALE UP TO 50%</h1>
          <p>Enjoy special discount on selected products.</p>
          <Button variant="light">View Products</Button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
          alt="Third slide"
          style={{ height: "60vh", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h1>NEW ARRIVALS</h1>
          <p>Explore our newest clothing collection.</p>
          <Button variant="light">Buy Now</Button>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Banner;