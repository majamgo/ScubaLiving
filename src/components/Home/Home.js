import React from 'react';
import './Home.scss';
import Header from '../Header/Header';
import Produkter from '../Produkter/Produkter';
import Rejser from '../Rejser/Rejser';
import Kurser from '../Kurser/Kurser';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <article>
            <Header />
            <Produkter />
            <Rejser />
            <Kurser />
            <Footer />
        </article>
    )
}

export default Home;
