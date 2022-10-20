import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section position-relative" id="home">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-success fw-bold f-14 mb-4">Ready to win?</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">
              <span className="text-success fw-bold">Gol Lottery </span>
                it's your key to achieving all your
                <span className="text-success fw-bold"> goals!</span>
              </h1>
              <p className="text-muted mb-4 pb-2">in this space you can see the latest news from our lottery and our latest winning numbers of the two daily draws.</p>
              <a href="#numbers" className="btn btn-success">
                See Today's Numbers <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/images/pngwing.com.png" alt="" className="img-fluid mx-auto d-block floating" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;