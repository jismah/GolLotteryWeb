import { doc, getDoc, getFirestore, limit, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import { database } from '../config/firebase';

const Service = () => {

  // MIDDDAY NUMBERS
  const [Midday1, setMidday1] = useState(0);
  const [Midday2, setMidday2] = useState(0);
  const [Midday3, setMidday3] = useState(0);
  const [Midday4, setMidday4] = useState(0);
  const [Midday5, setMidday5] = useState(0);
  const [Midday6, setMidday6] = useState(0);
  const [Midday7, setMidday7] = useState(0);

  // NIGHT NUMBERS
  const [Night1, setNight1] = useState(0);
  const [Night2, setNight2] = useState(0);
  const [Night3, setNight3] = useState(0);
  const [Night4, setNight4] = useState(0);
  const [Night5, setNight5] = useState(0);
  const [Night6, setNight6] = useState(0);
  const [Night7, setNight7] = useState(0);

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const getNumbersMidday = async () => {
    const docRef = doc(database, "WinningNumbersMidday");
    const docSnap = await getDoc(docRef);
    const data = docSnap.exists() ? docSnap.data() : null;
    if (data) {
      setMidday1(data.number1Midday);
      setMidday2(data.number2Midday);
      setMidday3(data.number3Midday);
      setMidday4(data.number4Midday);
      setMidday5(data.number5Midday);
      setMidday6(data.number6Midday);
      setMidday7(data.number7Midday);
    } else {
      console.log("ERROR!");
      return null;
    }
  };

  const getNumbersNight = async () => {
    const docRef = doc(database, "WinningNumbersNight", "4nC9SJxlgKwcKDIaaBhE");
    const docSnap = await getDoc(docRef);
    const data = docSnap.exists() ? docSnap.data() : null;
    if (data) {
      setNight1(data.number1Night);
      setNight2(data.number2Night);
      setNight3(data.number3Night);
      setNight4(data.number4Night);
      setNight5(data.number5Night);
      setNight6(data.number6Night);
      setNight7(data.number7Night);
    } else {
      console.log("ERROR!");
      return null;
    }
  };

  useEffect(() => {
    getNumbersMidday();
    getNumbersNight();
  });

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
              <div className="circle">{Midday1}</div>
              <div className="circle">{Midday2}</div>
              <div className="circle">{Midday3}</div>
              <div>-</div>
              <div className="circle">{Midday4}</div>
              <div className="circle">{Midday5}</div>
              <div className="circle">{Midday6}</div>
              <div className="circle">{Midday7}</div>
            </Row>
            <Row className="pt-5 justify-content-center">
              <Col lg={6} md={8}>
                <div className="title text-center">
                  <h4 className="fw-bold text-dark">Night (7:00 PM) - {date}</h4>
                </div>
              </Col>

            </Row>
            <Row className="justify-content-center">
              <div className="circle">{Night1}</div>
              <div className="circle">{Night2}</div>
              <div className="circle">{Night3}</div>
              <div>-</div>
              <div className="circle">{Night4}</div>
              <div className="circle">{Night5}</div>
              <div className="circle">{Night6}</div>
              <div className="circle">{Night7}</div>
            </Row>
          </div>
        </div>

      </Container>
    </section>
  );
}

export default Service;