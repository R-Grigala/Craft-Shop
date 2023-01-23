import { React, useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebaseConfig';

import '../styles/login.css';

const Singup = () => {
 
  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const auth = getAuth(app);

  const handleInputs = (event) => {
    let inputs = {[event.target.name] : event.target.value}

    setData({...data, ...inputs})
  }

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((response) => {
      console.log(response.user)
    })
    .catch((err) => {
      alert(err.message)
    })
  };

  return (
    <Helmet title='Singup'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Singup</h3>

              <Form className="auth__form">

              <FormGroup className="form__group">
                  <input 
                    placeholder="Username" 
                    name="username" 
                    type="namusername"
                    className="form__group"
                    onChange={event => handleInputs(event)}
                    />
                </FormGroup>
                <FormGroup className="form__group">
                  <input 
                    placeholder="Enter your Email" 
                    name="email" 
                    type="email"
                    className="form__group"
                    onChange={event => handleInputs(event)}
                    />
                </FormGroup>
                <FormGroup className="form__group">
                  <input 
                    placeholder="Password" 
                    name="password" 
                    type="password"
                    className="form__group"
                    onChange={event => handleInputs(event)}
                    />
                </FormGroup>
                {/* <button onClick={handleSubmit}>Sing Up</button> */}
                <button onClick={handleSubmit} className="buy__btn auth__btn">Create an Account</button>
                <p>
                  Already have an acount?
                  <Link to='/login'> Login</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Singup