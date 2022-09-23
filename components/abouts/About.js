import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Form, } from 'react-bootstrap';
import { Icon } from '@iconify/react';

function About() {

    return (
        <>
            <section >
                <div className='nav_design  pb-5 pt-3 '>
                    <Container fluid>
                        <Row>
                            <Col md={2} xs={12} lg={4}>
                                <div class="p-4 px-6 ">
                                    <img className='img-fluid img1' src='https://react-outstock.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.99244b61.png&w=256&q=75' />
                                </div>

                            </Col>
                            <Col md={6} xs={12} lg={4}>
                                <div className='main-menu'>
                                    <nav class="navbar navbar-expand-lg navbar-transparent bg-transparent flex space-x-4 ... p-3 d-none d-lg-block">
                                        <button class="navbar-toggler" type="button"
                                            data-toggle="collapse" data-target="#navbarSupportedContent"
                                            aria-controls="navbarSupportedContent" aria-expanded="false"
                                            aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>

                                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul class="navbar-nav mr-auto">
                                                <li class="nav-item dropdown active has-drop">
                                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Home
                                                    </a>
                                                    <ul>
                                                        <li><a class="dropdown-item" href="#">Home Style 1</a></li>
                                                        <li><a class="dropdown-item" href="#">Home Style 2</a></li>
                                                        <li><a class="dropdown-item" href="#">Home Style 3</a></li>
                                                        <li><a class="dropdown-item" href="#">Home Style 4</a></li>
                                                        <li><a class="dropdown-item" href="#">Home Style 5</a></li>
                                                        <li><a class="dropdown-item" href="#">Home Style 6</a></li>
                                                        <li><a class="dropdown-item" href="#">Home Style 7</a></li>

                                                    </ul>
                                                </li>
                                                <li class=" w-100% nav-item dropdown active has-drop">
                                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Shop
                                                    </a>
                                                    
                                                    <Row>
                                                    <ul>
                                                        <Col md={3} xs={3} lg={3}>
                                                        <li><a class="dropdown-item" href="#">Home Style 1</a></li>
                                                        <li><a class="dropdown-item" href="#">Home Style 2</a></li>
                                                        <li><a class="dropdown-item" href="#">Home Style 3</a></li>
                                                        <li><a class="dropdown-item" href="#">Home Style 4</a></li>
                                                        <li><a class="dropdown-item" href="#">Home Style 5</a></li>
                                                        <li><a class="dropdown-item" href="#">Home Style 6</a></li>
                                                        <li><a class="dropdown-item" href="#">Home Style 7</a></li>
                                                        </Col>
                                                        </ul>
                                                    <ul>
                                                        <Col md={3} xs={3} lg={3}>
                                                        <li><a class="dropdown-item" href="#">Home Style 1</a></li>
                                                        <li><a class="dropdown-item" href="#">Home Style 2</a></li>
                                                        <li><a class="dropdown-item" href="#">Home Style 3</a></li>
                                                        <li><a class="dropdown-item" href="#">Home Style 4</a></li>
                                                        <li><a class="dropdown-item" href="#">Home Style 5</a></li>
                                                        <li><a class="dropdown-item" href="#">Home Style 6</a></li>
                                                        <li><a class="dropdown-item" href="#">Home Style 7</a></li>
                                                        </Col>
                                                        </ul>
                                                    </Row>
                                                  
                                                </li>
                                                <li class="nav-item dropdown active has-drop">
                                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Blogs
                                                    </a>
                                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <a class="dropdown-item" href="#">Action</a>
                                                        <a class="dropdown-item" href="#">Another action</a>
                                                        <div class="dropdown-divider"></div>
                                                        <a class="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </li>
                                                <li class="nav-item dropdown">
                                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Pages
                                                    </a>
                                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <a class="dropdown-item" href="#">Action</a>
                                                        <a class="dropdown-item" href="#">Another action</a>
                                                        <div class="dropdown-divider"></div>
                                                        <a class="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link " href="#">Contact</a>
                                                </li>
                                            </ul>

                                        </div>
                                    </nav>
                                </div>
                            </Col>
                            <Col md={4} xs={12} lg={4}>
                                <div className='header__action active  '>
                                    <button href='#'>Search</button>
                                    <button href='#'>Cart</button>
                                </div>

                            </Col>
                            <Col md={6} xs={12} lg={6}>
                                <div className='mt-4 mx-5 my-1 head_content d-flex justify-content-right  align-items-right'>
                                    <h1 class="font-extrabold">Handmade <br />Hand Carved Coffee</h1>
                                </div>
                                <div className='head_small_content d-flex justify-content-right  align-items-right'>
                                    <p><small> Lorem ipsum is a placeholder text commonly used to demonstrate the visual
                                        form of a document or a typeface without relying on meaningful content.
                                    </small></p>
                                </div>
                                <br />
                                <div className='mx-5 d-flex justify-content-right  align-items-right' >
                                    <a href='#' className='head_btn'>DISCOVER  NOW</a>
                                </div>

                            </Col>
                        </Row>
                
                        <Row>
                            <Col  className='head_images mx-auto mt-5' md={10} xl={10} sm={12} lg={10}>
                                <Row>
                                    <Col  md={4} xl={4} lg={4}>
                                        <div className='banner_img p-relative'>
                                            <img className='img-fluid' src='https://react-outstock.vercel.app/assets/img/shop/banner/banner-sm-1.jpg' />
                                            <div className='banner_content p-absolute d-flex justify-content-right align-items-right'>
                                                <p>Sunflower Clock<br />
                                                    Quartz Hands</p>
                                                <br />

                                            </div>
                                            <div className='banner_content p-absolute d-flex justify-content-right align-items-right'>
                                                <a className='banner_btn' href='#'>Discover Now</a>
                                            </div>
                                        </div>


                                    </Col>
                                    <Col md={4} xl={4} lg={4}>
                                        <div className='banner_img p-relative'>
                                            <img className='img-fluid' src='https://react-outstock.vercel.app/assets/img/shop/banner/banner-sm-2.jpg' />
                                            <div className='banner_content p-absolute d-flex justify-content-right align-items-right'>
                                                <p>Chair Kimi No Isu<br />
                                                    Project</p>
                                                <br />

                                            </div>
                                            <div className='banner_content p-absolute d-flex justify-content-right align-items-right'>
                                                <a className='banner_btn' href='#'>Discover Now</a>
                                            </div>
                                        </div>


                                    </Col>
                                    <Col md={4} xl={4} lg={4}>
                                        <div className='banner_img p-relative'>
                                            <img className='img-fluid' src='https://react-outstock.vercel.app/assets/img/shop/banner/banner-sm-3.jpg' />
                                            <div className='banner_content p-absolute d-flex justify-content-right align-items-right'>
                                                <p>Sweeper and Dustpan<br />
                                                    by Jan Kochanski</p>
                                                <br />

                                            </div>
                                            <div className='banner_content p-absolute d-flex justify-content-right align-items-right'>
                                                <a className='banner_btn' href='#'>Discover Now</a>
                                            </div>
                                        </div>


                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </Container>
                </div>

            </section>
        </>


    )
}

export default About