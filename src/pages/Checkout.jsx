import React from 'react'
import { Col, Container, FormGroup, Row, Form } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'

import "../styles/checkout.css";
import { useSelector } from 'react-redux';

const Checkout = () => {

  const totalQty = useSelector(state=>state.cart.totalQuantity)
  const totalAmount = useSelector(state=>state.cart.totalAmount)

  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout'/>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-6 fw-bold'>Billing Information</h6>
              <Form className='billing__form'>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your name"/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter your email"/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="Phone number"/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Street address"/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="City"/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Post code"/>
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Country"/>
                </FormGroup>
              </Form>
            </Col>
            <Col lg='4'>
              <div className="checkout__cart">
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br/>
                    free shopping
                  </span>
                  <span>$0</span>
                </h6>
                <h4>Total Cost: <span>${totalAmount}</span></h4>
                <button className='checkout__btn auth__btn w-100'>
                  Place an order
                </button>
              </div>
              
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout