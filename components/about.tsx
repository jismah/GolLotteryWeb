import React from 'react';
import { Container, Row, Col } from "reactstrap";


const About = () => {

  return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">About<span className="text-success"> Us</span></h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            {/* <img
              className="img-fluid rounded"
              alt="logo"
              src="/images/gollotteryLogo.jpeg"
            /> */}
          </Col>
          <Col md={{ size: 7, offset: 1 }}>
            <Row>
              <Col md={12}>
                <h6 className="text-dark fw-bold fs-5 f-20 mb-3">What's Gol Lottery?</h6>
                <p className="text-muted font-weight-light">Welcome! Gol Lottery Program is a Lottery made in Jamaica for the purpose of two daily draws where you can search for the winning numbers at 1:00 PM and 7:00 PM everyday on our website or our digital plataform like Facebook, Twitter, Youtube and Instagram.</p>
              </Col>

            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;