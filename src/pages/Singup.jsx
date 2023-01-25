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

  const [file, setFile] = useState(null);
  // const [loading, setLoading] = useState(false);
 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    // setLoading(true);

    try {

      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        email, 
        password
      );
      
      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      // const uploadTask = uploadBytesResumable(storageRef, file)

      // uploadTask.on(
      //   (error) => {
      //     toast.error(error.message);
      //   },
      //   () => {
      //     getDownloadURL(uploadTask.snapshot.ref).then(async(
      //       downloadURL) => {
      //         await updateProfile(user, {
      //           displayName: username,
      //           photoURL: downloadURL,
      //         });

      //       await setDoc(doc(db, "users", user.uid),{
      //         uid: user.uid,
      //         displayName: username,
      //         email: email,
      //         photoURL: downloadURL,
      //       });
      //     });
      //   }
      // );

      const uploadTask = uploadBytesResumable(storageRef, file).then(
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(
            async(downloadURL) => {
              await updateProfile(user, {
                displayName: username,
                photoURL: downloadURL,
              });
              
              await setDoc(doc(db, "users", user.uid),{
                uid: user.uid,
                displayName: username,
                email,
                photoURL: downloadURL,
              });
            }
          )
        }
      );

      console.log(user);
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

              <Form className="auth__form" onSubmit={handleSubmit}>
                <FormGroup className="form__group">
                  <input 
                    placeholder="Username" 
                    type="text"
                    className="form__group"
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </FormGroup>
                <FormGroup className="form__group">
                  <input 
                    placeholder="Enter your Email" 
                    type="email"
                    className="form__group"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup className="form__group">
                  <input 
                    placeholder="Enter your Password" 
                    type="password"
                    className="form__group"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </FormGroup>
                <FormGroup className="form__group">
                  <input 
                    type="file"
                    onClick={(e) => setFile(e.target.file?.[0])}
                  />
                </FormGroup>
                {/* <button onClick={handleSubmit}>Sing Up</button> */}
                <button type='submit' className="buy__btn auth__btn">
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