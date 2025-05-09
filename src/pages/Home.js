import React from "react";
import { Container, Carousel, Card, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <Container fluid className="p-0">
      {/* Hero Section */}
      <section className="text-center bg-success text-white py-5">
        <motion.h2
          className="text-center mb-4 display-5 fw-bold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Save Nature Community
        </motion.h2>

        <p className="lead">
          We are a community of nature lovers working towards a greener and better future.
        </p>

        <motion.div
          className="mt-3"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        <div className="d-flex justify-content-center">
        <Button
  variant="light"
  className="fw-bold blinking-btn mx-auto d-block"
  style={{ maxWidth: "260px" }}
  onClick={() => {
    document.getElementById("events-section").scrollIntoView({ behavior: "smooth" });
  }}
>
  🌍 Upcoming Event: World Environment Day  5 June 2025
</Button>



</div>

        </motion.div>
      </section>




      <section className=" py-4">
   <Container className="text-center">
    <h5>Connect with Us</h5>
    <a
     href="https://www.instagram.com/savenaturecommunity/?igsh=aGV0d2ZtamczNXQw#"
      target="_blank"
      rel="noopener noreferrer"
      className=""
    >
      <FaInstagram /> @SaveNatureCommunity
    </a>
  </Container>
</section>




      {/* Our Team Work Carousel */}
      <section className="bg-light py-4">
        <Container>
        <h2 className="text-center">
  🌿 Our Team Work
</h2>


          <Carousel interval={2000}>
            {["team1", "team2", "team3", "team4", "team5", "team6"].map((img, i) => (
              <Carousel.Item key={i}>
                <img
                  className="d-block w-100"
                  src={`/images/${img}.jpg`}
                  alt={`Team ${i + 1}`}
                  style={{
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* Who We Are Section */}
      <section className="bg-success text-white py-5">
        <Container>
          <motion.h2
            className="text-center mb-4"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            🌱 Who We Are
          </motion.h2>

          <p className="fs-5 text-center">
            We are a group of passionate individuals committed to raising awareness about the
            importance of trees, biodiversity, and natural balance. We conduct plantation drives,
            community events, and nature-based workshops.
          </p>
        </Container>
      </section>

      {/* We Are In News Carousel */}
      <section className="bg-white py-4 border-top border-bottom">
        <Container>
          <motion.h2
            className="text-center mb-4"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            📰 We Are In News
          </motion.h2>

          <Carousel interval={4000}>
            {["news1", "news2", "news3"].map((img, i) => (
              <Carousel.Item key={i}>
                <img
                  className="d-block w-100"
                  src={`/images/${img}.jpg`}
                  alt={`News ${i + 1}`}
                  style={{
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <p className="text-center mt-3 text-muted">
            Appreciated by <strong>Pudhari</strong>, <strong>Sakal</strong>, and <strong>Lokmat</strong> newspapers
          </p>
        </Container>
      </section>

      {/* Our Goal Section */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <section className="bg-light py-5">
          <Container>
            <motion.h2 className="text-center mb-4">🎯 Our Goal</motion.h2>
            <p className="fs-5 text-center text-dark">
              🌳 Plant more trees • ♻️ Reuse & recycle waste • 🌍 Reduce pollution<br />
              Our mission is to give Mother Earth back her strength by taking small, consistent actions
              that create lasting change.
            </p>
          </Container>
        </section>
      </motion.div>

      {/* Upcoming Events Section */}
      <section id="events-section" className="bg-success text-white py-5">
        <Container>
          <motion.h2
            className="text-center mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            🌍 Upcoming Events
          </motion.h2>
          <p className="fs-5 text-center">
            Join us on <strong>World Environment Day</strong> for a mega tree plantation drive and eco-awareness workshop.
            Let's make a difference together by planting the seeds of a greener future.
          </p>
        </Container>
      </section>

      {/* Gallery Cards */}
      <section className="bg-white py-5">
        <Container>
          <motion.h2
            className="text-center mb-4"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            📸 Our Work
          </motion.h2>

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
                    Featured in newspapers for our continuous green efforts.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>


      <section className="bg-dark text-white py-4">
  <Container className="text-center">
    <h5>Connect with Us</h5>
    <a
     href="https://www.instagram.com/savenaturecommunity/?igsh=aGV0d2ZtamczNXQw#"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white fs-3"
    >
      <FaInstagram /> @SaveNatureCommunity
    </a>
  </Container>
</section>

    </Container>




  );
}

export default Home;
