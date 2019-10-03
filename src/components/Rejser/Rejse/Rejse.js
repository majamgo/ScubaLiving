import React from 'react';
import '../Rejser.scss';

const Rejse = (props) => {

    let rejseListe = props.alleRejseProp.map(r => {

        return (
            <section className="enkel-rejse">
                <div className="rejse-bill">
                    <img src={"/img/" + r.rimg} alt="" />
                </div>
                <div className="rejse-txt">
                    <h3>{r.rtitel}</h3>
                    <p>{r.rinfo}</p>
                </div>
            </section>
        )
    });
    return (
        <section className="rejser">
            {rejseListe}
        </section>
    )
}

export default Rejse;
