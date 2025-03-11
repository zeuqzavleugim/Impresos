import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import Nav from "@/Layouts/Nav";
import Form from "@/Layouts/Form";
import { Colaboradores } from "@/Imags/colaboradores";
import MagicImpresos from '@assets/img/general/Magic-impresos-sevicios.mp4'

export default function Contacto(params) {
    

    return(
        <>
        <Head title="Contacto | Soluciones Creativas B2B"/>
        <Nav/>
        <main>
            <div className="videoContact">
                <video src={MagicImpresos}  autoPlay muted loop className="divCenter" loading="lazy"></video>
            </div>
            <div className="colorGr">
                <h1 className="divCenter h1">MAGIC POP, CONTACTANOS</h1>
                <h2 className="divCenter h3">
                    ¿Ya tienes algo en mente?
                </h2>
                <h2 className="divCenter h3">
                    ¿Quieres hacer que tu negocio crezca?
                </h2>
            </div>
            <div className="fondo1">
                <Form></Form>
            </div>
            <div className="colorGr">
                <h3 className="divCenter h3">
                    Con quien hemos trabajado
                </h3>
            </div>
            <div className="content1">
                <img src={Colaboradores.Vinculate} alt="vinculate" title="Empresa Vinculate" loading="lazy"/>
                <img src={Colaboradores.CmvNgo} alt="CMV NGO" title="Empresa CMV NGO" loading="lazy"/>
                <img src={Colaboradores.CreditoReal} alt="Credito Real" title="Empresa Credito Real" loading="lazy"/>
                <img src={Colaboradores.ElBuenBife} alt="El Buen Bife" title="Empresa El Buen Bife" loading="lazy"/>
                <img src={Colaboradores.Essd} alt="ESSD" title="Empresa ESSD" loading="lazy"/>
                <img src={Colaboradores.FasionCrystals} alt="Fasion Crystals" title="Empresa Fasion Crystals" loading="lazy"/>
                <img src={Colaboradores.GrupoTrebol} alt="Grupo Trebol" title="Empresa Grupo Trebol" loading="lazy"/>
                <img src={Colaboradores.Herbalife} alt="Herbalife" title="Empresa Herbalife" loading="lazy"/>
                <img src={Colaboradores.Hoteles} alt="Hoteles" title="Empresa Hoteles" loading="lazy"/>
                <img src={Colaboradores.Ipade} alt="Ipade" title="Empresa Ipade" loading="lazy"/>
                <img src={Colaboradores.LaChoperia} alt="La Choperia" title="Empresa La Choperia" loading="lazy"/>
                <img src={Colaboradores.Md} alt="MD" title="Empresa MD" loading="lazy"/>
                <img src={Colaboradores.Nutrisa} alt="Nutrisa" title="Empresa Nutrisa" loading="lazy"/>
                <img src={Colaboradores.Olife} alt="Olife" title="Empresa Olife" loading="lazy"/>
                <img src={Colaboradores.Pegalon} alt="Pegalon" title="Empresa Pegalon" loading="lazy"/>
                <img src={Colaboradores.Reckitt} alt="Reckitt" title="Empresa Reckitt" loading="lazy"/>
                <img src={Colaboradores.Stihl} alt="STIHL" title="Empresa STIHL" loading="lazy"/>
                <img src={Colaboradores.Telcel} alt="Telcel" title="Empresa Telcel" loading="lazy"/>
            </div>
        </main>
        <Footer/>
        </>
    );
}