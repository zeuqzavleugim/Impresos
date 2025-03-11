import { useState } from "react";
import { Head } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import Nav from "@/Layouts/Nav";
import Form from "@/Layouts/Form";
import ServisesFlot from "@/Components/ServisesFlot";
import Tarjeta2 from "@/Components/Tarjeta2";
import { UsoGeneral } from "@/Imags/UsoGeneral";
import { Servicios } from "@/Imags/Servises";
import { Banner } from "@/Imags/Banners";
import { GaleriaVinilAdhesivo } from "@/Imags/GaleriaVinilAdhesivo";
import { GaleriaPapelFotografico } from "@/Imags/GaleriaPapelFotografico";
import { GaleriaTelaCanvas } from "@/Imags/GaleriaTelaCanvas";

export default function ImpresionGeanFormato(params) {

    const [activeModal, setActiveModal] = useState(null);

    // Función para abrir el modal correspondiente
    function openModal(id) {
        setActiveModal(id);
    }

    // Función para cerrar el modal
    function closeModal() {
        setActiveModal(null);
    }

    return(
        <>
            <Head title="Impresión Digital en GranFormato"/>
            <Nav/>
            <main>
                <div>
                    <picture>
                        <img src={Banner.ImpresiónPapelFotográficoCdmx} alt="Impresion Digital y Gran Formato" title="Banner Impresion Digital y Gran Formato" loading="lazy"/>
                    </picture>
                </div>
                <section className="colorGr">
                    <h1 className="divCenter h1">Impresión Profecional en Alta Resolución</h1>
                    <h2 className="divCenter texcenter h3">
                        FOTOS DE ALTA CALIDAD <br /> FOTOS EN ALTA RESOLUCION Y GRAN DEFINICIÓN
                    </h2>
                </section>
                <section>
                    {/* Renderizar modal solo si está activo */}
                    {activeModal === 'VinilAdh' && (  
                        <ServisesFlot
                            Id={'VinilAdh'}
                            Titulo={'vinil de impresión'}
                            Img={
                                GaleriaVinilAdhesivo
                            }
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'VinilAdh'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'PapelFotog' && (
                        <ServisesFlot
                            Id={'PapelFotog'}
                            Titulo={'Papel Fotográfico'}
                            Img={
                                GaleriaPapelFotografico
                            }
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'PapelFotog'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'Canvas' && (
                        <ServisesFlot
                            Id={'Canvas'}
                            Titulo={'Tela Canvas'}
                            Img={
                                GaleriaTelaCanvas
                            }
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'Canvas'}
                            closeModal={closeModal}
                        />
                    )}
                </section>
                <section>
                    <div className="cartsHome">
                        <Tarjeta2 
                            Img={Servicios.VinilAdhesivo} 
                            Alt={'VinilAdhesivo'}
                            Clases={'cartUno'}
                            openModal={() => openModal('VinilAdh')}>
                                Vinil Adhesivo
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.PapelFotográfico} 
                            Alt={'PapelFotografico'}
                            Clases={'cartUno'}
                            openModal={() => openModal('PapelFotog')}>
                                Papel Fotográfico
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.TelaCanvas} 
                            Alt={'TelaCanvas'}
                            Clases={'cartUno'}
                            openModal={() => openModal('Canvas')}>
                                Tela Canvas
                        </Tarjeta2>
                    </div>
                </section>
            </main>
            <div className="form-div-duple">
                <div className="conImg">
                    <picture>
                        <img src={UsoGeneral.ImpresionDigitalGranformato} alt="Creatividad y Diseno Grafico" title="Creatividad y Diseno Grafico" loading="lazy"/>
                    </picture>
                </div>
                <div className="conInfo">
                    <Form/>
                </div>
            </div>
            <Footer/>
        </>
    );
}