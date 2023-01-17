import React from 'react';
import '../styles/cart.css';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';

const Cart = () => {
  return (
    <Helmet title>
      <CommonSection title="Shopping Cart"/>
    </Helmet>
  )
}

export default Cart