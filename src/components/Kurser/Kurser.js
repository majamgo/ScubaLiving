import React from 'react';
import './Kurser.scss';
import PADI from '../../img/padi.jpg';

const Kurser = () => {
    return (
        <section className="all-kurser">
            <div className="everytitle">
                <div className="kursustitle"><h3>PADI - DYKKERCERTIFIKAT</h3></div>
                <div className="kursustitleextra"></div>
            </div>
            <section className="padi-kursus">
                <div className="kursustxt">
                <h5>TAG ET ANERKENDT DYKKER CERTIFIKAT</h5>
                <p>Her finder du et stort udvalg af dykkerkurser lige fra begynder til professional. Vi er et af Danmarks førende dykkercentre, som uddanner fra PADI organisationen. Når du vælger at ttage et dykkercertifikat hos os, får du ikke kun et internationalt anerkendt dykkercertifikat til markedets bedste priser, du får også et dykkerkursus, hvor kvaliteten er i top</p>
               <br/><p>Vi har kompetente instruktører på vores dykkerkurser. Erfaring, tillid og sikkerhed er vigtigt, når du dykker med os, derfor står vi klar med et stort hold af kompetente intruktører.</p>
               </div> <img src={PADI} alt="PADI logo"/>
            </section>
            <h2 className="overskrift">SE ALLE KURSER OG CERTIFIKATER HER</h2>
        </section>
    )
}

export default Kurser;
