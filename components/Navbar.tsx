import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

const NavbarComp = () => {
  const { user, logout } = useAuth()
  const router = useRouter()

  return (
    <Navbar className='navbar navbar-dark bg-dark' expand="lg">
      <Container fluid>
        <span className="navbar-brand mb-0 h1">
          <Navbar.Brand>Gol Lottery Admin</Navbar.Brand>
        </span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {user ? (
              <>
                <Nav.Link
                  onClick={() => {
                    router.push('/')
                  }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    logout()
                    router.push('/login')
                  }}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Link href="/" passHref>
                  <Nav.Link>Back to Home</Nav.Link>
                </Link>

              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default NavbarComp
