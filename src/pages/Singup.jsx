import { React, useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

import { createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';

import { ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import { setDoc, doc } from 'firebase/firestore';

import { auth } from '../firebaseConfig';
import { storage } from '../firebaseConfig';
import { toast } from 'react-toastify';
import { db } from '../firebaseConfig';

import '../styles/login.css';

const Singup = () => {

  const [file, setFile] = useState("");
 
  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleInputs = (event) => {
    let inputs = {[event.target.name] : event.target.value}

    setData({...data, ...inputs})
  }

  const handleSubmit = () => {
    try {
      createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response.user)
      })
      .catch((error) => {
        toast.error("something went wrong");
      })
      
      // const storageRef = ref(storage, `images/${Date.now() + data.username}`)
      // const uploadTask = uploadBytesResumable(storageRef, file)

      // uploadTask.on((error) => {
      //   toast.error(error.message)
      // },
      // () => {
      //   getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      //     updateProfile(user, {
      //       displayName: data.username,
      //       photoURL: downloadURL,
      //     });

      //     await setDoc(doc(db, "users", user.uid),{
      //       uid: user.uid,
      //       displayName: data.username,
      //       email : data.email,
      //       photoURL: downloadURL,
      //     })
      //   })
      // })
      
    } catch (error){
      toast.error("something went wrong")
    }

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
                <FormGroup className="form__group">
                  <input 
                    type="file"
                    onClick={(e) => setFile(e.target.file[0])}
                  />
                </FormGroup>
                {/* <button onClick={handleSubmit}>Sing Up</button> */}
                <button onClick={handleSubmit} className="buy__btn auth__btn">
                  Create an Account
                </button>
                <p>
                  Already have an acount? <Link to='/login'> Login</Link>
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