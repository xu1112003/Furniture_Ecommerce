import React from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import products from '../assets/data/products'
import { useParams } from 'react-router-dom'
import '../styles/product-detail.css'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import ProductsList from '../components/UI/ProductsList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify'

const ProductDetail = () => {
  const[tab, setTab] = useState('desc')
  const reviewUser = useRef('')
  const reviewMsg = useRef('')
  const dispatch = useDispatch()
  const [rating, setRating] = useState(null)
  const {id} = useParams()
  const product = products.find(item => item.id === id)
  const {imgUrl, productName, price, avgRating, reviews,category, description, shortDesc} = product
  const relatedProducts = products.filter(item => item.category === category)
  const submitHandler = (e) => {
    e.preventDefault()
    const reviewUserName = reviewUser.current.value
    const reviewUserMsg = reviewMsg.current.value

  }
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price
      })
    )
    toast.success('Product added succesfully')
  }
  return (
    <Helmet title={productName}>
      <CommonSection title={productName}/>
      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg='6'>
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating ">
                  <span onClick={() => setRating(1)}><i class='ri-star-s-fill'></i></span>
                  <span onClick={() => setRating(2)}><i class='ri-star-s-fill'></i></span>
                  <span onClick={() => setRating(3)}><i class='ri-star-s-fill'></i></span>
                  <span onClick={() => setRating(4)}><i class='ri-star-s-fill'></i></span>
                  <span onClick={() => setRating(5)}><i class='ri-star-half-s-line'></i></span>
                </div>
                <p>
                  (<span>{avgRating}</span> ratings)
                </p>
              </div>
              <div className='d-flex align-items-center gap-5'>
                <span className="product__price">${price}</span>
                <span>Category: {category.toUpperCase()}</span>
              </div>
              <p className='mt-3'>{shortDesc}</p>
              <motion.button  whileTap={{scale: 1.2}} className='buy__btn mt-3' onClick={addToCart}>
                  Add to Cart
              </motion.button>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tab__wrapper d-flex align-items-center
              gap-5">
                <h6 className={`${tab === 'desc' ? 'active__tab' : ''}`}
                onClick={() => setTab('desc')}
                >Description</h6>
                <h6 className={`${tab === 'rev' ? 'active__tab' : ''}`}
                onClick={() => setTab('rev')}
                >Reviews ({reviews.length})</h6>
              </div>
              <div className="tab__content mt-5">
                
              </div>
              {
                tab === 'desc' ? (
                  <div className="tab__content mt-5">
                    <p>{description}</p>
                  </div>
                ) : (
                  <div className="product__review">
                    <div className="review__wrapper">
                      <ul>
                        {
                          reviews.map((item, index) => (
                            <li key={index} className='mb-4'>
                              <h6>Jojn Doe</h6>
                              <span className='text-warning'>{item.rating} (ratings)</span>
                              <p>{item.text}</p>
                            </li>
                          ))
                        }
                      </ul>
                      <div className="review__form">
                        <h4>Leave your experience</h4>
                        <form action="" onSubmit={submitHandler}>
                          <div className="form__group">
                            <input type="text" placeholder='Enter name'ref={reviewUser}/>


                          </div>
                          <div className="form__group d-flex align-items-center gap-5">
                            <span>1 <i class='ri-star-s-fill'></i></span>
                            <span>2 <i class='ri-star-s-fill'></i></span>
                            <span>3 <i class='ri-star-s-fill'></i></span>
                            <span>4 <i class='ri-star-s-fill'></i></span>
                            <span>5 <i class='ri-star-s-fill'></i></span>

                          </div>
                          <div className="form__group">
                            <textarea ref={reviewMsg} rows={4} type="text" placeholder='Review Message...'/>
                          </div>
                          <button type='submit' className="buy__btn">Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
                )
              }

            </Col>

            <Col lg='12' className='mt-5'>
              <h2 className="related__title">You might also like</h2>
            </Col>
            <ProductsList data={relatedProducts}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetail