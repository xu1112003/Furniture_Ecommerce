import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import '../styles/home.css'
const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      <section className='hero__section'>
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <div className="hero_content">
                  <p className="hero_subtitle">Trending product in {year}</p>
                  <h2>Make Your Interior More Minimalistic & Modern</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id accusantium quam sed, beatae officia architecto dignissimos quae omnis quisquam rerum et, animi, repellendus assumenda iusto dolores tenetur iste a praesentium.</p>
                  <button className='buy__btn'>SHOP NOW</button>
                </div>
              </Col>
              <Col lg='6' md='6'>
                <div className="hero__img">
                  <img src={heroImg} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
      </section>
    </Helmet>
  )
}

export default Home;