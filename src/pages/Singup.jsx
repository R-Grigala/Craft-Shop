import { React, useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebaseConfig';

import '../styles/login.css';

const Singup = () => {

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
 
  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleInputs = (event) => {
    let inputs = {[event.target.name] : event.target.value}

    setData({...data, ...inputs})
  }

  const signup = async(e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("start")
      const auth = getAuth(app);
      console.log("MID")
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("end")
      const user = userCredential.user;
      console.log(user);

    } catch(error) {}
  };

  return (
    <Helmet title='Singup'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Singup</h3>

              <Form className='auth__form' onSubmit={signup}>
                <FormGroup className='form__group'>
                  <input 
                    type='text' 
                    placeholder='Username'
                    onClick={e => handleInputs(e)}
                  />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input 
                    type='email' 
                    placeholder='Enter your Email' 
                    onClick={e => handleInputs(e)}
                  />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input 
                    type='password' 
                    placeholder='Enter your password'
                    onClick={e => handleInputs(e)}
                  />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input 
                    type='file'

                    onClick={e => setFile(e.target.files[0])}
                  />
                </FormGroup>

                <button type='submit' className="buy__btn auth__btn">Create an Account</button>
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