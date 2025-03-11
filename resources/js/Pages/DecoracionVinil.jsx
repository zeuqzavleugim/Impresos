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
import { GaleriaMicroperforado } from "@/Imags/GaleriaMicroperforado";
import { GaleriaWallfabric } from "@/Imags/GaleriaWallfabric";
import { GaleriaTranslucido } from "@/Imags/GaleriaTranslucido";
import { GaleriaEsmerilado } from "@/Imags/GaleriaEsmerilado";
import { GaleriaElectrostatico } from "@/Imags/GaleriaElectrostatico";
import { GaleriaPizarrones } from "@/Imags/GaleriaPizarrones";
import { GaleriaFloorGrafic } from "@/Imags/GaleriaFloorGrafic";
import { GaleriaAcabadosArqui } from "@/Imags/GaleriaAcabadosArqui";
import { GaleriaPolarizado } from "@/Imags/GaleriaPolarizado";
import { GaleriaMetalizado } from "@/Imags/GaleriaMetalizado";

export default function DecoracionVinil(params) {

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
            <Head title="Soluciones Personalizadas para tus Espacios"/>
            <Nav/>
            <main>
                <div>
                    <picture>
                        <img src={Banner.VinilosDecorativos} alt="decoracion de Vinil" title="decoracion de Vinil" loading="lazy"/>
                    </picture>
                </div>
                <section className="colorGr">
                    <h1 className="divCenter h1">Decoración con Vinil</h1>
                    <h2 className="divCenter texcenter h2">
                        DECORA TU NEGOCIO CON NUESTRAS DIFERENTES APLICACIONES DE VINIL
                    </h2>
                </section>
                <section>
                    {/* Renderizar modal solo si está activo */}
                    {activeModal === 'VinilAdh' && (  
                        <ServisesFlot
                            Id={'VinilAdh'}
                            Titulo={'Vinil Adhesivo'}
                            Img={
                                GaleriaVinilAdhesivo
                            }
                            ButonUrl={'galeriaVinilAdhesivo'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'VinilAdh'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'Microperf' && (
                        <ServisesFlot
                            Id={'Microperf'}
                            Titulo={'Decoracion con Microperforado'}
                            Img={
                                GaleriaMicroperforado
                            }
                            ButonUrl={'galeriaMicroperforado'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'Microperf'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'WallFabric' && (
                        <ServisesFlot
                            Id={'WallFabric'}
                            Titulo={'Wallfabric, Wallpaper, Papel Tapiz'}
                            Img={
                                GaleriaWallfabric
                            }
                            ButonUrl={'galeriaWallfabric'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'WallFabric'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'Translu' && (
                        <ServisesFlot
                            Id={'Translu'}
                            Titulo={'Translúcido'}
                            Img={
                                GaleriaTranslucido
                            }
                            ButonUrl={'galeriaTranlucido'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'Translu'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'VinilEsmerilado' && (
                        <ServisesFlot
                            Id={'VinilEsmerilado'}
                            Titulo={'Vinil Esmerilado'}
                            Img={
                                GaleriaEsmerilado
                            }
                            ButonUrl={'galeriaEsmerilado'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'VinilEsmerilado'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'VinilElectro' && (
                        <ServisesFlot
                            Id={'VinilElectro'}
                            Titulo={'Vinil Electroestático'}
                            Img={
                                GaleriaElectrostatico
                            }
                            ButonUrl={'galeriaElestrostatico'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'VinilElectro'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'PizarronesPersona' && (
                        <ServisesFlot
                            Id={'PizarronesPersona'}
                            Titulo={'Pizarrones Personalizados'}
                            Img={
                                GaleriaPizarrones
                            }
                            ButonUrl={'galeriaPizarrones'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'PizarronesPersona'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'FloorGraphic' && (
                        <ServisesFlot
                            Id={'FloorGraphic'}
                            Titulo={'FloorGraphic'}
                            Img={
                                GaleriaFloorGrafic
                            }
                            ButonUrl={'galeriaFloor'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'FloorGraphic'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'AcabadosArquitectonicos' && (
                        <ServisesFlot
                            Id={'AcabadosArquitectonicos'}
                            Titulo={'Acabados Arquitectónicos'}
                            Img={
                                GaleriaAcabadosArqui
                            }
                            ButonUrl={'galeriaArquitec'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'AcabadosArquitectonicos'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'Polarizado' && (
                        <ServisesFlot
                            Id={'Polarizado'}
                            Titulo={'Vinil Polarizado'}
                            Img={
                                GaleriaPolarizado
                            }
                            ButonUrl={'galeriaPolarizado'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'Polarizado'}
                            closeModal={closeModal}
                        />
                    )}
                    {activeModal === 'Metalizado' && (
                        <ServisesFlot
                            Id={'Metalizado'}
                            Titulo={'Vinil Metalizado'}
                            Img={
                                GaleriaMetalizado
                            }
                            ButonUrl={'galeriaMetalizado'}
                            ButonTit={'Galeria'}
                            isOpen={activeModal === 'Metalizado'}
                            closeModal={closeModal}
                        />
                    )}
                </section>
                <section>
                    <div className="cartsHome">
                        <Tarjeta2 
                            Img={Servicios.VinilFotografico}
                            Alt={'RotulacionRecorteVinil'}
                            Clases={'cartwo'}
                            openModal={() => openModal('VinilAdh')}>
                                Vinil Adhesivo
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.Microperforado} 
                            Alt={'Microperforado'}
                            Clases={'cartwo'}
                            openModal={() => openModal('Microperf')}>
                                Microperforado
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.VinilosparaForrarMuebles1} 
                            Alt={'WallFabric'}
                            Clases={'cartwo'}
                            openModal={() => openModal('WallFabric')}>
                                Wall Fabric
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.VinilTranslucido} 
                            Alt={'Translucido'}
                            Clases={'cartwo'}
                            openModal={() => openModal('Translu')}>
                                Translúcido
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.VinilEsmerilado} 
                            Alt={'VinilEsmerilado'}
                            Clases={'cartwo'}
                            openModal={() => openModal('VinilEsmerilado')}>
                                Esmerilado
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.VinilElectrostático} 
                            Alt={'VinilElectro'}
                            Clases={'cartwo'}
                            openModal={() => openModal('VinilElectro')}>
                                Vinil Electroestático
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.PizarronesPersonalizados} 
                            Alt={'PizarronesPersona'}
                            Clases={'cartwo'}
                            openModal={() => openModal('PizarronesPersona')}>
                                Pizarrones Personalizados
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.FloorGraphicPrecio} 
                            Alt={'FloorGraphic'}
                            Clases={'cartwo'}
                            openModal={() => openModal('FloorGraphic')}>
                                Vinil Floor Graphic
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.VinilAcabadosArquitectonicos} 
                            Alt={'AcabadosArquitectonicos'}
                            Clases={'cartwo'}
                            openModal={() => openModal('AcabadosArquitectonicos')}>
                                Acabados Arquitectónicos 
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.PolarizadaVidrios} 
                            Alt={'Polarizado'}
                            Clases={'cartwo'}
                            openModal={() => openModal('Polarizado')}>
                                Vinil Polarizado
                        </Tarjeta2>
                        <Tarjeta2 
                            Img={Servicios.SustratoMetalico} 
                            Alt={'Metalizado'}
                            Clases={'cartwo'}
                            openModal={() => openModal('Metalizado')}>
                                Vinil Metalizado 
                        </Tarjeta2>
                    </div>
                </section>
            </main>
            <div className="form-div-duple">
                <div className="conImg">
                    <picture>
                        <img src={UsoGeneral.DecoraciónconVinil} alt="Recorte de Vinil" title="Recorte de Vinil" loading="lazy"/>
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