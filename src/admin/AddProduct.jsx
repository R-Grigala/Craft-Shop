import React from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';

const AddProduct = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <h4>Add Product</h4>
            <Form>
              <FormGroup className="form__group">
                <span>Product title</span>
                <input type="text" placeholder='Double sofa'/>
              </FormGroup>
              <FormGroup className="form__group">
                <span>Short Description</span>
                <input type="text" placeholder='lorem.....'/>
              </FormGroup>
              <FormGroup className="form__group">
                <span>Description</span>
                <input type="text" placeholder='Description.....'/>
              </FormGroup>
              <div>
                <FormGroup className="form__group">
                  <span>Price</span>
                  <input type="number" placeholder='$100'/>
                </FormGroup>
                <FormGroup className="form__group">
                  <span>Category</span>
                  <select>
                    <option value="chair">Chair</option>
                    <option value="dofa">Sofa</option>
                    <option value="mobile">Mobile</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </FormGroup>
              </div>

              <div>
                <FormGroup className="form__group">
                  <span>Product Image</span>
                  <input type="file" />
                </FormGroup>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProduct;