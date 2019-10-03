import React, { useState } from 'react';
import './Produkter.scss';
import Produkt from './Produkt/Produkt';

const Produkter = () => {

    const [udstyr, setUdstyr] = useState([
        { udimg: "reg.jpg", udtitel: "REGULATOR MED RESIST", udpris: "KR. 899,-", id: 1 },
        { udimg: "fine.jpg", udtitel: "REJSEFINNE", udpris: "KR. 999,-", id: 2 },
        { udimg: "ur.jpg", udtitel: "UR", udpris: "KR. 1199", id: 3 },
        { udimg: "handske.jpg", udtitel: "COLDWATER GLOVES", udpris: "KR. 1499,-", id: 4 }
    ]);

    return (
        <section className="all-products">
            <div className="everytitle">
            <div className="producttitle"><h3>MEST POPULÆRE DYKKERUDSTYR</h3></div>
            <div className="producttitleextra"></div>
            </div>
            <Produkt alleProduktProp={udstyr} />
            <h2 className="overskrift">SE MERE LÆKKERT UDSTYR HER</h2>
        </section>
    )
}

export default Produkter;
