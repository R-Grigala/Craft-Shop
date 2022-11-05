import React, {useState, useEffect} from 'react'

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import products from "../assets/data/products"

import Helmet from '../components/Helmet/Helmet';

import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';

import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';

import counterImg from '../assets/images/counter-timer-img.png'

const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(()=>{
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );


    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
  }, []);

  return <Helmet title={"Home"}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="hero__subtitle">Trending products in {year}</p>
              <h2>Make Your Interior More Minimalistic & Modern </h2>
              <p>Lorem Ipsum is simply dummy text of 
                the printing and typesetting industry. </p>
              <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
            </div>
          </Col>
          <Col lg='6' md='6' >
            <div className="hero__img">
              <img src={heroImg} alt=''/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Services/>
    <section className='trending__products'>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section__title'>Trending Products</h2>
          </Col>
          <ProductsList data={trendingProducts}/>
        </Row>
      </Container>
    </section>

    <section className="best__sales">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section__title'>Best Sales</h2>
          </Col>
          <ProductsList data={bestSalesProducts}/>
        </Row>
      </Container>
    </section>

    <section className="timer__count">
      <Container>
        <Row>
          <Col lg='6' md='6'></Col>

          <Col lg='6' md='6' className='text-end'>
            <img src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>

  </Helmet>;
}

export default Home