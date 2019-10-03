import React, { useState } from 'react';
import './Rejser.scss';
import Rejse from './Rejse/Rejse';

const Rejser = () => {

    const [rejse, setRejse] = useState([
        { rimg: "malta.jpg", rtitel: "MALTA", rinfo: "Oplev det skønne Malta og det helt fantastiske dyreliv og sammenhold. Vi arrangerer dykkerrejser til Malta hele året rundt", id: 1 },
        { rimg: "norge.JPG", rtitel: "NORGE", rinfo: "Nordeuropas bedste dykkerspots ligger i Norge. Vi har 25 års erfaring med dyk i Norge. Oplev det klareste vand i verden!", id: 2 }
    ]);

    return (
        <section className="all-rejser">
            <div className="everytitle">
                <div className="rejsetitle"><h3>DYK UD I VERDEN</h3></div>
                <div className="rejsetitleextra"></div>
            </div>
            <Rejse alleRejseProp={rejse} />
            <h2 className="overskrift">SE FLERE DESTINATIONER OG MULIGHEDER HER</h2>
        </section>
    )
}

export default Rejser;
