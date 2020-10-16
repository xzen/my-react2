import React from 'react';
import {
  Col,
  Row,
  Carousel,
} from 'react-bootstrap';

const Item = ({ src, title }) => (
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={src}
      alt={title}
    />
    <Carousel.Caption>
      <h3>{title}</h3>
    </Carousel.Caption>
  </Carousel.Item>
);

const Carrousel = () => (
  <Row>
    <Col>
      <Carousel>
        <Item
          src="https://fr.web.img6.acsta.net/carousels/20/10/09/09/54/1873551.jpg"
          title="Kill Bill : Volume 3"
        />
        <Item
          src="https://fr.web.img2.acsta.net/carousels/20/09/02/17/33/5882606.jpg"
          title="Pour l'amour de leur petit fils"
        />
        <Item
          src="https://fr.web.img5.acsta.net/carousels/20/10/15/16/18/3987232.jpg"
          title="Kickass"
        />
      </Carousel>
    </Col>
  </Row>
);

export default Carrousel;
