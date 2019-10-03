import React from 'react';
import '../Produkter.scss';

const Produkt = (props) => {

    let produktListe = props.alleProduktProp.map(p => {

        return(
            <section className="enkel-produkt">
                <img src={"/img/" + p.udimg} alt="" />
                <h4>{p.udtitel}</h4>
                <p>{p.udpris}</p>
            </section>
        )
    });
    return (
        <section className="products">
            {produktListe}
        </section>
    )
}

export default Produkt;
