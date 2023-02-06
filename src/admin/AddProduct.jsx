import React,{useState} from 'react';
import { toast } from 'react-toastify';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';

import { db, storage } from '../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

  const [enterTitle, setEnterTitle] = useState('');
  const [enterShortDesc, setEnterShortDesc] = useState('');
  const [enterDescription, setEnterDescription] = useState('');
  const [enterCategory, setEnterCategory] = useState('');
  const [enterPrice, setEnterPrice] = useState('');
  const [enterProductImg, setEnterProductImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const AddProduct = async(e) =>{
    e.preventDefault();
    setLoading(true);

    // const product = {
    //   title: enterTitle,
    //   shortDesc: enterShortDesc,
    //   description: enterDescription,
    //   category: enterCategory,
    //   price: enterPrice,
    //   imgUrl: enterProductImg
    // };

    // ====== Add Product to the Firebase Database ====== 

    try {

      const docRef = await collection(db,'products');

      const storageRef = ref(storage,`productImages/${Date.now() + enterProductImg.name}`)
      const uploadTask = uploadBytesResumable(storageRef, enterProductImg)

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              console.log('Upload is Error');
              break;
          }
        },
        (error) => {
          toast.error(error.message);
        },
        ()=>{
          getDownloadURL(uploadTask.snapshot.ref).then(
            async(downloadURL)=>{
              await addDoc(docRef, {
                title: enterTitle,
                shortDesc: enterShortDesc,
                description: enterDescription,
                category: enterCategory,
                price: enterPrice,
                imgUrl: downloadURL,
              })
            }
          )
        }
      );

      setLoading(false);
      toast.success('Product Successfully Added!');
      navigate('/dashboard/all-products');

    } catch(error){

      setLoading(false);
      toast.error("Product Don't Added!");
    }
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            {
              loading ? (
              <h4 className='py-5'>Loading.....</h4> 
              ) : ( 
              <>
              <h4 className='mb-5'>Add Product</h4>
              <Form onSubmit={AddProduct}>
                <FormGroup className="form__group">
                  <span>Product title</span>
                  <input type="text" placeholder='Double sofa' value={enterTitle} onChange={e=> setEnterTitle(e.target.value)} required/>
                </FormGroup>
                <FormGroup className="form__group">
                  <span>Short Description</span>
                  <input type="text" placeholder='lorem.....' value={enterShortDesc} onChange={e=> setEnterShortDesc(e.target.value)} required/>
                </FormGroup>
                <FormGroup className="form__group">
                  <span>Description</span>
                  <input type="text" placeholder='Description.....' value={enterDescription} onChange={e=> setEnterDescription(e.target.value)} required/>
                </FormGroup>
                <div className='d-flex align-items-center justify-content-between gap-5'>
                  <FormGroup className="form__group w-50">
                    <span>Price</span>
                    <input type="number" placeholder='$100' value={enterPrice} onChange={e=> setEnterPrice(e.target.value)} required/>
                  </FormGroup>
                  <FormGroup className="form__group w-50">
                    <span>Category</span>
                    <select className='w-100 p-2' value={enterCategory} onChange={e=> setEnterCategory(e.target.value)} required>
                      <option value="chair">Chair</option>
                      <option value="sofa">Sofa</option>
                      <option value="mobile">Mobile</option>
                      <option value="watch">Watch</option>
                      <option value="wireless">Wireless</option>
                    </select>
                  </FormGroup>
                </div>

                <div>
                  <FormGroup className="form__group">
                    <span>Product Image</span>
                    <input 
                      type="file" 
                      onChange={e => setEnterProductImg(e.target.files[0])}
                      required
                    />
                  </FormGroup>
                </div>

                <button className="buy__btn" type='submit'>Add Product</button>

              </Form>
              
              </>
              )
            }
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProduct;