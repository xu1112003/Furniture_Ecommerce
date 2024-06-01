import React from 'react'
import './footer.css'
import { Container, Row, Col,ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/eco-logo.png'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
            <div className="logo">
              
              <div >
                <h1 className="text-white mb-4">Multimart</h1>
              </div>
            </div>
            <p className="footer__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea veritatis hic laudantium dicta tempore optio, labore dolorem, laboriosam consequatur obcaecati provident suscipit eos placeat, beatae eveniet possimus id minima reprehenderit!
            </p>
          </Col>
          <Col lg='3'>
            <div className="footer__quick-links">
              <h4 className="quick__link-title text-white mb-4">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile Phone</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Arm chair</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2'>
            <div className="footer__quick-links">
                <h4 className="quick__link-title text-white mb-4">Useful Links</h4>
                <ListGroup>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/shop'>Shop</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/cart'>Cart</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/login'>Login</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Privacy Policy</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
          </Col>
          <Col lg='3'>
          <div className="footer__quick-links">
              <h4 className="quick__link-title text-white mb-4">Contact</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0 d-flex fs-5 align-items-center '>
                  <span><i class='ri-map-pin-line text-white mx-2'></i></span>
                  <p>136 Cau Dien, Bac Tu Liem, Ha Noi</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex fs-5 align-items-center '>
                  <span><i class='ri-phone-line text-white mx-2'></i></span>
                  <p>+0123456789</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex fs-5 align-items-center '>
                  <span><i class='ri-mail-line text-white mx-2'></i></span>
                  <p>chienxu@gmail.com</p>
                </ListGroupItem>

                
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className='footer__copyright'>Copyright in {year}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer