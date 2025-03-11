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
import { GaleriaRotulacionVinil } from "@/Imags/GaleriaRotulacionVinil";
import { GaleriaRecorteVinilTextil } from "@/Imags/GaleriaRecorteVinilTextil";
import { GaleriaImpresionEtiquetas } from "@/Imags/GaleriaImpresionEtiquetas";
import { GaleriaRotulacionVehiculos } from "@/Imags/GaleriaRotulacionVehiculos";
import { GaleriaSenaleticaExterior } from "@/Imags/GaleriaSenaleticaExterior";
import { GaleriaSenaleticaInterir } from "@/Imags/GaleriasSenaleticaInterir";

export default function RecorteVinil(params) {

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
            <Head title="Recorte de Vinil Personalizado"/>
            <Nav/>
            <main>
                <div>
                    <picture>
                        <img src={Banner.RecorteVinilRotulacion} alt="Recorte de Vinil para Empresas" title="Recorte de Vinil para Empresas" loading="lazy"/>
                    </picture>
                </div>
                <section className="colorGr">
                    <h1 className="divCenter h1">Recorte de Vinil y Rotulación Personalizada</h1>
                    <h2 className="divCenter texcenter h3">
                        EL RECORTE DE VINIL CON MÚLTIMPLES APLICACIONES
                    </h2>
                    <h3 className="divCenter texcenter h4">
                        Recorte de Vinil en:
                    </h3>
                </section>
                <section>
                    {/* Renderizar modal solo si está activo */}
                    {activeModal === 'RotulacionRecorteVi' && (  
                        <ServisesFlot
                            Id={'RotulacionRecorteVi'}
                            Titulo={'Recorte de Vinil Adhesivo'}
                            Img={
                                GaleriaRotulacionVinil
                            }
                            ButonUrl={'galeriaRotulacionVinil'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'RotulacionRecorteVi'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'RecorteVinilTex' && (
                        <ServisesFlot
                            Id={'RecorteVinilTex'}
                            Titulo={'Recorte de Vinil Textil'}
                            Img={
                                GaleriaRecorteVinilTextil
                            }
                            ButonUrl={'galeriaRecorteVinilTextirl'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'RecorteVinilTex'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'ImprimirEtiq' && (
                        <ServisesFlot
                            Id={'ImprimirEtiq'}
                            Titulo={'Impresión de Etiquetas'}
                            Img={
                                GaleriaImpresionEtiquetas
                            }
                            ButonUrl={'galeriaImpresionEtiquetas'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'ImprimirEtiq'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'RotulacionVeh' && (
                        <ServisesFlot
                            Id={'RotulacionVeh'}
                            Titulo={'Rotulación de Vehículos'}
                            Img={
                                GaleriaRotulacionVehiculos
                            }
                            ButonUrl={'galeriaRotulacionVehiculos'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'RotulacionVeh'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'SenaleticaExte' && (
                        <ServisesFlot
                            Id={'SenaleticaExte'}
                            Titulo={'Señaletica de Exteriores'}
                            Img={
                                GaleriaSenaleticaExterior
                            }
                            ButonUrl={'galeriaSenaleticaExterior'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'SenaleticaExte'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'SenaleticaInte' && (
                        <ServisesFlot
                            Id={'SenaleticaInte'}
                            Titulo={'Señaletica de Interiores'}
                            Img={
                                GaleriaSenaleticaInterir
                            }
                            ButonUrl={'galeriaSenaleticaInterior'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'SenaleticaInte'}
                            closeModal={closeModal}
                        />
                    )}
                </section>
                <section>
                    <div className="cartsHome">
                        <Tarjeta2 
                            Img={Servicios.Rotulación} 
                            Alt={'RotulacionRecorteVinil'}
                            Clases={'carthre'}
                            openModal={() => openModal('RotulacionRecorteVi')}>
                                Rotulacion o Recorte de Vinil
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.RecorteVinilTextil} 
                            Alt={'RecorteVinilTextil'}
                            Clases={'carthre'}
                            openModal={() => openModal('RecorteVinilTex')}>
                                Recorte de Vinil Textil
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.ImprimirEtiquetas} 
                            Alt={'ImprimirEtiquetas'}
                            Clases={'carthre'}
                            openModal={() => openModal('ImprimirEtiq')}>
                                Impresión de Etiquetas
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.RotulacionVehículos} 
                            Alt={'RotulacionVehículos'}
                            Clases={'carthre'}
                            openModal={() => openModal('RotulacionVeh')}>
                                Rotulación de Vehículos
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.SenaleticaExteriores} 
                            Alt={'SenaleticaExteriores'}
                            Clases={'carthre'}
                            openModal={() => openModal('SenaleticaExte')}>
                                Señaletica de Exteriores
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.SenaleticaInteriores} 
                            Alt={'SenaleticaInteriores'}
                            Clases={'carthre'}
                            openModal={() => openModal('SenaleticaInte')}>
                                Señaletica de Interiores
                        </Tarjeta2>
                    </div>
                </section>
            </main>
            <div className="form-div-duple">
                <div className="conImg">
                    <picture>
                        <img src={UsoGeneral.Recortedevinil} alt="Recorte de Vinil" title="Recorte de Vinil" loading="lazy"/>
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