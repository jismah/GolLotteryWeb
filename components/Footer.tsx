
import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
    const links = [
        {
            id: 1, title: "Follow Us",
            child: [
                { title: "Facebook", link: "/" },
                { title: "Twitter", link: "/" },
                { title: "Youtube", link: "/" },
                { title: "Instagram", link: "/" }
            ]
        },
        {
            id: 2, title: "About Us",
            child: [
                { title: "Contact Us", link: "/" },
                { title: "FAQs", link: "/" },
            ]
        },
    ];

    return (
        <section className="footer section" id="contact">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="mb-4">
                            <p className="text-muted mt-4 mb-2">info@gollottery.com</p>
                            <h6 className="text-muted font-weight-normal">+1 (919) 771-7955</h6>
                            <Link href='/dashboard'>
                                <a className="mt-4 mb-2">
                                    Sign In
                                </a></Link>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <Row>
                            {
                                links.map((link, key) =>
                                    <Col key={key} md={4}>
                                        <h6 className="text-dark mb-3">{link.title}</h6>
                                        <ul className="list-unstyled company-sub-menu">
                                            {
                                                link.child.map((fLink, key) =>
                                                    <li key={key}><a href={fLink.link}>{fLink.title}</a></li>
                                                )
                                            }
                                        </ul>
                                    </Col>
                                )
                            }

                            <Col md={4}>
                                <h6 className="text-dark mb-3">Our Address</h6>
                                <p className="text-muted f-14">Mall ST. Albans #4 Avenue Comercial Street 180, Jamaica</p>
                                <h6 className="text-muted pb-2">Email: gol.lottery.jamaica@gmail.com</h6>
                                <ul className="list-unstyled footer-social-list mt-4">
                                    <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="mdi mdi-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="mdi mdi-linkedin"></i></a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={12}>
                        <div className="text-center text-muted">
                            <p className="mb-0 f-15">2022 © Gol Lottery. Design by Aeroware</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Footer;
