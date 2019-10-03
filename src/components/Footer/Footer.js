import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="main-footer">
            <section className="footer-txt">
                <h6>PRAKTISKE OPLYSNINGER</h6>
                <p>Om Scuba Living</p>
                <p>Kontakt</p>
                <p>Handelsbetingelser</p>
                <p>Persondatapolitik</p>
                <p>Åbningstider</p>
            </section>
            <section className="footer-txt">
            <h6>PRAKTISKE OPLYSNINGER</h6>
            <p>Hovedkategorier</p>
            <p>Dykkerudstyr</p>
            <p>Dykkerrejser</p>
            <p>Dykkerkurser</p>
            <p>Service</p>
            </section>
            <section className="footer-txt">
                <h6>SOCIALE MEDIER - FØLG OS HER</h6>
                <p>LinkedIn</p>
                <p>Facebook</p>
                <p>Instagram</p>
            </section>
        </footer>
    )
}

export default Footer;
