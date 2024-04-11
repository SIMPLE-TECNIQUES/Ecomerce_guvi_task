import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";
function HeaderSlider() {
  return (
    <Fragment>
      <Carousel variant="dark" style={{ maxHeihgt: "650px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="../img/slider/pure-pu-ladies-shoulder-bag.png"
            alt="pure pu ladies bag"
          />
          <Carousel.Caption className="bg-white">
            <h5>Summer Collection Pure PU Ladies Shoulder Bag </h5>
            <p>lorem ipsum</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="../img/slider/young-handsome-guy-smart-suit.png"
            alt="pure mustard oil"
          />
          <Carousel.Caption className="bg-white">
            <h5>100% Cotton Men Blac Suits</h5>
            <p>lorem ipsom</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="../img/slider/blender-fruits-kitchen-space.png"
            alt="smart blender home appliance"
          />
          <Carousel.Caption className="bg-white">
            <h5>Decorate Your Smart Kitchen</h5>
            <p>lorem ipsom</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
}

export default HeaderSlider;
