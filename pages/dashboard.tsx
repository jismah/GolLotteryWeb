import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap'
import Link from 'next/link'

const Dashboard = () => {
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
          Welcome to <Link href="/dashboard">Dashboard</Link>
        </h1>

        <Form>
          <Row className='pt-5'>
            <h4 className="fw-bold">
            Winning numbers of the first batch (2:00 PM)
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
                />
              </FormGroup>
            </Col>
          </Row>

          <Row className='pt-4'>
            <h4 className="fw-bold">
            Winning numbers of the second batch (8:00 PM)
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
                />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup check>
            <Input
              id="exampleCheck"
              name="check"
              type="checkbox"
            />
            <Label
              check
              for="exampleCheck"
            >
              I'm sure to make the changes
            </Label>
          </FormGroup>
          <Button className="btn btn-success mt-3">
            Save the changes
          </Button>
        </Form>

      </main>
    </div>
  )
}

export default Dashboard
