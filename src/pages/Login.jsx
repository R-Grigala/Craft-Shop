import { React, useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

import '../styles/login.css';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Helmet title='Login'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Login</h3>

              <Form className='auth__form'>
                <FormGroup className='form__group'>
                  <input type='email' placeholder='Enter your email'
                  value={email} onClick={e => setEmail(e.target.value)}/>
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='password' placeholder='Enter your password'
                  value={password} onClick={e => setPassword(e.target.value)}/>
                </FormGroup>

                <button type='submit' className="buy__btn auth__btn">Login</button>
                <p>Don't have an acount? <Link to='/singup'>Create an account</Link></p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login