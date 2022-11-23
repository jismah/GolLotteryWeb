import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import { Form, Row, Col, FormGroup, Label, Input } from 'reactstrap'
import { Toast, ToastContainer, Button } from 'react-bootstrap'
import Link from 'next/link'

import { database } from "../config/firebase";
import { collection, addDoc, Timestamp, query, orderBy, limit, getDocs } from 'firebase/firestore';

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const dbInstanceMidday = collection(database, 'WinningNumbersMidday');
  const [number1Midday, setNumber1Midday] = useState('');

  const [number2Midday, setNumber2Midday] = useState('');
  const [number3Midday, setNumber3Midday] = useState('');
  const [number4Midday, setNumber4Midday] = useState('');
  const [number5Midday, setNumber5Midday] = useState('');
  const [number6Midday, setNumber6Midday] = useState('');
  const [number7Midday, setNumber7Midday] = useState('');

  const dbInstanceNight = collection(database, 'WinningNumbersNight');
  const [number1Night, setNumber1Night] = useState('');
  const [number2Night, setNumber2Night] = useState('');
  const [number3Night, setNumber3Night] = useState('');
  const [number4Night, setNumber4Night] = useState('');
  const [number5Night, setNumber5Night] = useState('');
  const [number6Night, setNumber6Night] = useState('');
  const [number7Night, setNumber7Night] = useState('');

  const currentDate = new Date().getTime();

    // EVENTO DEL BOTON MEDIODIA
  const saveNumbersMidday = () => {
    addDoc(dbInstanceMidday, {
      number1Midday: Number(number1Midday),
      number2Midday: Number(number2Midday),
      number3Midday: Number(number3Midday),
      number4Midday: Number(number4Midday),
      number5Midday: Number(number5Midday),
      number6Midday: Number(number6Midday),
      number7Midday: Number(number7Midday),
      createdAt: Timestamp.fromDate(new Date(currentDate)),

    }).then(() => {
      setNumber1Midday(''),
        setNumber2Midday(''),
        setNumber3Midday(''),
        setNumber4Midday(''),
        setNumber5Midday(''),
        setNumber6Midday(''),
        setNumber7Midday('')
    })
    setShow(true);
  };

  // EVENTO DEL BOTON NOCHE
  const saveNumbersNight = () => {
   
    addDoc(dbInstanceNight, {
      number1Night: Number(number1Night),
      number2Night: Number(number2Night),
      number3Night: Number(number3Night),
      number4Night: Number(number4Night),
      number5Night: Number(number5Night),
      number6Night: Number(number6Night),
      number7Night: Number(number7Night),
      createdAt: Timestamp.fromDate(new Date(currentDate)),

    }).then(() => {
      setNumber1Night(''),
        setNumber2Night(''),
        setNumber3Night(''),
        setNumber4Night(''),
        setNumber5Night(''),
        setNumber6Night(''),
        setNumber7Night('')
    })

    setShow(true);
  }

  return (
    <div>
      <Head>
        <title>Gol Lottery</title>
        <meta name="description" content="Gol Lottery Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome <Link href="/dashboard">Dashboard</Link>
        </h1>

        <Form>
          <Row className='pt-5'>
            <h4 className="fw-bold">
              Winning numbers of the first batch (1:00 PM)
            </h4>
          </Row>
          <Row >
            <Col md={4}>
              <FormGroup>
                <Label for="number1">
                  Number #1
                </Label>
                <Input
                  id="number1Midday"
                  name="number1Midday"
                  placeholder="Enter number #1"
                  type="number"
                  onChange={(e) => setNumber1Midday(e.target.value)}
                  value={number1Midday}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="number2">
                  Number #2
                </Label>
                <Input
                  id="number2"
                  name="number"
                  placeholder="Enter number #2"
                  type="number"
                  onChange={(e) => setNumber2Midday(e.target.value)}
                  value={number2Midday}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="number3">
                  Number #3
                </Label>
                <Input
                  id="number3"
                  name="number"
                  placeholder="Enter number #3"
                  type="number"
                  onChange={(e) => setNumber3Midday(e.target.value)}
                  value={number3Midday}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row >
            <Col md={3}>
              <FormGroup>
                <Label for="number4">
                  Number #4
                </Label>
                <Input
                  id="number4"
                  name="number"
                  placeholder="Enter number #4"
                  type="number"
                  onChange={(e) => setNumber4Midday(e.target.value)}
                  value={number4Midday}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="number5">
                  Number #5
                </Label>
                <Input
                  id="number5"
                  name="number"
                  placeholder="Enter number #5"
                  type="number"
                  onChange={(e) => setNumber5Midday(e.target.value)}
                  value={number5Midday}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="number6">
                  Number #6
                </Label>
                <Input
                  id="number6"
                  name="number"
                  placeholder="Enter number #6"
                  type="number"
                  onChange={(e) => setNumber6Midday(e.target.value)}
                  value={number6Midday}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="number7">
                  Number #7
                </Label>
                <Input
                  id="number7"
                  name="number"
                  placeholder="Enter number #7"
                  type="number"
                  onChange={(e) => setNumber7Midday(e.target.value)}
                  value={number7Midday}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup check>
            <Input
              id="exampleCheck"
              name="check"
              type="checkbox"
              checked={checked1}
              onChange={(e) => setChecked1(e.currentTarget.checked)}
            />
            <Label
              check
              for="exampleCheck"
            >
              I'm sure to make the changes
            </Label>
          </FormGroup>
          <Button disabled={!checked1} variant="outline-success" onClick={saveNumbersMidday} className="btn mt-3">
            Save Numbers
          </Button>

          <Row className='pt-4'>
            <h4 className="fw-bold">
              Winning numbers of the second batch (7:00 PM)
            </h4>
          </Row>
          <Row >
            <Col md={4}>
              <FormGroup>
                <Label for="number1">
                  Number #1
                </Label>
                <Input
                  id="number1"
                  name="number"
                  placeholder="Enter number #1"
                  type="number"
                  onChange={(e) => setNumber1Night(e.target.value)}
                  value={number1Night}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="number2">
                  Number #2
                </Label>
                <Input
                  id="number2"
                  name="number"
                  placeholder="Enter number #2"
                  type="number"
                  onChange={(e) => setNumber2Night(e.target.value)}
                  value={number2Night}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="number3">
                  Number #3
                </Label>
                <Input
                  id="number3"
                  name="number"
                  placeholder="Enter number #3"
                  type="number"
                  onChange={(e) => setNumber3Night(e.target.value)}
                  value={number3Night}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row >
            <Col md={3}>
              <FormGroup>
                <Label for="number4">
                  Number #4
                </Label>
                <Input
                  id="number4"
                  name="number"
                  placeholder="Enter number #4"
                  type="number"
                  onChange={(e) => setNumber4Night(e.target.value)}
                  value={number4Night}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="number5">
                  Number #5
                </Label>
                <Input
                  id="number5"
                  name="number"
                  placeholder="Enter number #5"
                  type="number"
                  onChange={(e) => setNumber5Night(e.target.value)}
                  value={number5Night}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="number6">
                  Number #6
                </Label>
                <Input
                  id="number6"
                  name="number"
                  placeholder="Enter number #6"
                  type="number"
                  onChange={(e) => setNumber6Night(e.target.value)}
                  value={number6Night}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="number7">
                  Number #7
                </Label>
                <Input
                  id="number7"
                  name="number"
                  placeholder="Enter number #7"
                  type="number"
                  onChange={(e) => setNumber7Night(e.target.value)}
                  value={number7Night}
                />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup check>
            <Input
              id="exampleCheck"
              name="check"
              type="checkbox"
              checked={checked2}
              onChange={(e) => setChecked2(e.currentTarget.checked)}
            />
            <Label
              check
              for="exampleCheck"
            >
              I'm sure to make the changes
            </Label>
          </FormGroup>
          <Button disabled={!checked2} variant="outline-success" onClick={saveNumbersNight} className="btn mt-3">
            Save Numbers
          </Button>

          <ToastContainer className="p-3" position='bottom-end'>
            <Toast onClose={() => setShow(false)} show={show} delay={4000} autohide>
              <Toast.Header closeButton={false}>
                <img
                  src="/images/bgVerde.jpeg"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Changes Successfully Updated</strong>
                <small>Now</small>
              </Toast.Header>
              <Toast.Body>The new numbers are available to the public!</Toast.Body>
            </Toast>
          </ToastContainer>
        </Form>

      </main>
    </div>
  )
}

export default Dashboard
