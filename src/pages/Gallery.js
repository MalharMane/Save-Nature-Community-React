import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Gallery() {
  return (
    <Container className="my-4">
      <h2 className="section-title">Our Work</h2>
      <Row>
        <Col xs={12} md={6} className="mb-3">
          <Card>
            <Card.Img variant="top" src="/images/trees.jpg" />
            <Card.Body>
              <Card.Title>Tree Plantation</Card.Title>
              <Card.Text>
                We plant trees regularly in urban and rural areas to reduce carbon footprint.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} className="mb-3">
          <Card>
            <Card.Img variant="top" src="/images/nests.jpg" />
            <Card.Body>
              <Card.Title>Bird Nests Initiative</Card.Title>
              <Card.Text>
                Hand-crafted nests are placed to support local bird populations.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} className="mb-3">
          <Card>
            <Card.Img variant="top" src="/images/newspaper.jpg" />
            <Card.Body>
              <Card.Title>Media Recognition</Card.Title>
              <Card.Text>
                Featured in local newspapers for our continuous green efforts.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Gallery;
