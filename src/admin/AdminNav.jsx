import React from 'react';
import { Container, Row } from 'reactstrap';
import useAuth from '../custom-hooks/useAuth';
import '../styles/admin-nav.css';

import { NavLink } from 'react-router-dom';

const admin__nav = [
    {
        display:'Dashboard',
        path:'/dashboard'
    },
    {
        display:'All-Products',
        path:'/dashboard/all-products'
    },
    {
        display:'Orders',
        path:'/dashboard/orders'
    },
    {
        display:'Users',
        path:'/dashboard/users'
    }
]

const AdminNav = () => {

    const {currentUser} = useAuth()

    return (
        <>
        <header className='admin__header'>
            <div className="admin__nav-top">
                <Container>
                    <div className='admin__nav-wrapper-top'>
                        <div className="logo">
                            <h2>Multimart</h2>
                        </div>
                        <div className="search__box">
                            <input type='text' placeholder='Search....'/>
                            <span><i className='ri-search-line'></i></span>
                        </div>
                        <div className='admin__nav-top-right'>
                            <span>
                                <i className="ri-notification-3-line"></i>
                            </span>
                            <span>
                                <i className="ri-settings-2-line"></i>
                            </span>
                            <img src={currentUser.photoURL} alt="can't"/>
                        </div>
                    </div>
                </Container>
            </div>
        </header>

        <section className='admin__menu p-0'>
            <Container>
                <Row>
                    <div className="admin__navigation">
                        <ul className="admin__menu-list">
                            {
                                admin__nav.map((item, index)=> (
                                    <li className="admin__menu-item" key={index}>
                                        <NavLink to={item.path}>{item.display}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </Row>
            </Container>
        </section>

        </>
    );
};

export default AdminNav;