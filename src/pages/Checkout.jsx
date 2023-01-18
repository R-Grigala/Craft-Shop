import React from 'react'
import { Col, Container, FormGroup, Row, Form } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'

const Checkout = () => {
  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout'/>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-6 fw-bold'>Billing Information</h6>
              <Form>

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
            <Col lg='4'></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout