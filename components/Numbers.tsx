import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Service = () => {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


  return (
    <section className="section" id="numbers">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h2 className="fw-bold text-dark"><span className="text-success">Winning Numbers</span></h2>
            </div>
          </Col>
        </Row>
        <div className="card p-3 mb-5 bg-body">
          <div className="card-body pt-5 pb-5">

            <Row className="justify-content-center">
              <Col lg={6} md={8}>
                <div className="title text-center">
                  <h4 className="fw-bold text-dark">Midday (1:00 PM) - {date}</h4>
                </div>
              </Col>

            </Row>

            <Row className="justify-content-center">
              <div className="circle">0</div>
              <div className="circle">0</div>
              <div className="circle">0</div>
              <div>-</div>
              <div className="circle">0</div>
              <div className="circle">0</div>
              <div className="circle">0</div>
              <div className="circle">0</div>
            </Row>
            <Row className="pt-5 justify-content-center">
              <Col lg={6} md={8}>
                <div className="title text-center">
                  <h4 className="fw-bold text-dark">Night (7:00 PM) - {date}</h4>
                </div>
              </Col>

            </Row>
            <Row className="justify-content-center">
              <div className="circle">0</div>
              <div className="circle">0</div>
              <div className="circle">0</div>
              <div>-</div>
              <div className="circle">0</div>
              <div className="circle">0</div>
              <div className="circle">0</div>
              <div className="circle">0</div>
            </Row>
          </div>
        </div>

      </Container>
    </section>
  );
}

export default Service;