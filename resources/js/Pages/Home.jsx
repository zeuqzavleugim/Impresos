import { Head } from "@inertiajs/react";
import Nav from "@/Layouts/Nav";
import Footer from "@/Layouts/Footer";
import Tarjeta1 from "@/Components/Tarjeta1";
import Form from "@/Layouts/Form";
import { Servicios } from "@/Imags/Servises";
import { UsoGeneral } from "@/Imags/UsoGeneral";
import { Colaboradores } from "@/Imags/colaboradores";
import MagicImpresos from '@assets/img/general/Magic-impresos-sevicios.mp4';

export default function Home(params) {
    
    return(
        <>
            <Head title="Decoracion e Impresiones" />
            <Nav/>
            <main>
                <div className="videoHome">
                    <video src={MagicImpresos}  autoPlay muted loop className="divCenter"></video>
                </div>
                <div className="colorGr">
                    <h1 className="divCenter h1">Impresion, recorte y decoración en alta resolución</h1>
                    <h2 className="divCenter h2">En Magic pop tenemos todo para tu negocio</h2>
                </div>
                <div>
                    <h3 className="divCenter h4">Nuestros Servicios</h3>
                    <div className="cartsHome">
                        <Tarjeta1 
                            Ruta={route('impresion')} 
                            Img={Servicios.ImpresionAltaResolucionSustratosEspeciales} 
                            Id={'impresion'} >
                                Impresión Profecional en Alta Resolución
                        </Tarjeta1>
                        <Tarjeta1 
                            Ruta={route('decoracion')} 
                            Img={Servicios.VinilDecorativoColumnas} 
                            Id={'decoracion'} >
                                Decoración con Vinil
                        </Tarjeta1>
                        <Tarjeta1 
                            Ruta={route('recorte')}                             
                            Img={Servicios.CortadoraVinilCDMX} 
                            Id={'recorte'}>
                                Recorte de Vinil
                        </Tarjeta1>
                    </div>
                </div>
                <div className="colorGr">
                    <h3 className="divCenter h4">Realizamos todo el proceso</h3>
                    <h4 className="divCenter h5">Asesoramiento, Impresión e Instalación</h4>
                    <div className="flex">
                        <div className="conInfo">
                            <h5 className="h4">SOMOS UNA AGENCIA ESPECIALIZADA EN ESTRATEGIAS DE COMUNICACIÓN VISUAL</h5>
                            <ul>
                                <li className="PointBlue">Fotógrafos profesionales.</li>
                                <li className="PointBlue">Instituciones educativas.</li>
                                <li className="PointBlue">Plazas, negocios y locales comerciales.</li>
                                <li className="PointBlue">Contamos con equipos de corte e impresión de última generación.</li>
                            </ul>
                        </div>
                        <div className="conImg">
                            <picture>
                                <img src={UsoGeneral.InstalacióndeVinilCircular} alt="instalacion" title="instalacion" loading="lazy"/>
                            </picture>
                        </div>
                    </div>
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
                <div className="fondo1">
                    <Form></Form>
                </div>
            </main>
            <Footer/>
        </>
    );
}