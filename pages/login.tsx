import { useRouter } from 'next/router'
import Head from 'next/head'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'

const Login = () => {
  const router = useRouter()
  const { user, login } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async (e: any) => {
    e.preventDefault()

    console.log(user)
    try {
      await login(data.email, data.password)
      router.push('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div

    >
      <Head>
        <title>Gol Lottery | Login</title>
        <meta name="description" content="Gol Lottery Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.main}
        >
        <div className="card-body">
          <h1 className="text-center my-3 ">Log in</h1>
          <h5 className="text-center fw-light my-3 ">Enter your credencials to access your account</h5>
          <Form onSubmit={handleLogin}>
            <Form.Group className="form-floating mb-3" controlId="formBasicEmail">
              <Form.Control
                onChange={(e: any) =>
                  setData({
                    ...data,
                    email: e.target.value,
                  })
                }
                value={data.email}
                required
                id="floatingInput"
                type="email"
              />
              <Form.Label htmlFor="floatingInput">Email</Form.Label>
            </Form.Group>

            <Form.Group className="form-floating mb-3" controlId="formBasicPassword">
              <Form.Control
                onChange={(e: any) =>
                  setData({
                    ...data,
                    password: e.target.value,
                  })
                }
                value={data.password}
                id="floatingInput"
                required
                type="password"
              />
              <Form.Label htmlFor="floatingInput" >Password</Form.Label>
            </Form.Group>
            <div className="d-grid mb-3 mt-5">
              <Button className="shadow" variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
