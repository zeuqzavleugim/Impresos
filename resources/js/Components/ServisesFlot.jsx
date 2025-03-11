import Buton1 from "./Buton1";
import Buton0 from "./Buton0";
import { useEffect, useRef } from "react";
import { RedesSoci } from "@/Imags/RedesSoci";
import { Icons } from "@/Imags/Icons";
import { UsoGeneral } from "@/Imags/UsoGeneral";


export default function ServisesFlot({Id, Titulo, Img, isOpen, closeModal, ButonUrl, ButonTit}) {
    const containerRef = useRef(null);
    const rectRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (rectRef.current && !rectRef.current.contains(event.target)) {
                closeModal();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [closeModal]);

    return(
        <>
        <div className={`servisio-flot-container ${isOpen ? 'show' : ''}`} id={Id} ref={containerRef}>
            <div className="servisio-flot" id={`info-${Id}`} ref={rectRef}>
                <Buton1 onClick={closeModal} clases={'position-close'}></Buton1>
                <div className="servisio-flot-carocel">
                    <h2 className="h2" >{Titulo}</h2>
                    <div id={`carouselImgs${Id}`} className="carousel slide">
                        <div className="carousel-inner">
                            {Img.map((imagen, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <img
                                        src={imagen.img} // Usar la propiedad 'img' de cada objeto
                                        alt={imagen.alt} // Usar la propiedad 'alt'
                                        title={imagen.titulo} // Usar la propiedad 'titulo'
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target={`#carouselImgs${Id}`} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" style={{
                                backgroundImage: `url(${UsoGeneral.Flechaizquierda})`,
                                width: '10vw'
                            }} aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#carouselImgs${Id}`} data-bs-slide="next">
                            <span className="carousel-control-next-icon" style={{
                                backgroundImage: `url(${UsoGeneral.Flechaderecha})`,
                                width: '10vw'
                            }} aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="servisio-flot-butons">
                    <ul>
                        <li className=" redesServises">
                            <a className="nav-link" href="https://wa.me/525536615473?text=Hola%20Magic%20Pop%20Impresion,%20quiero%20saber%20más%20sobre%20tus%20servicios,%20me%20podrías%20apoyar?" target="_blanck"><picture><img src={RedesSoci.WhatsB} alt="Whats Redes" title="Whats Redes"/></picture></a>
                            <a href="tel:5526524180" className="nav-link"><picture><img src={Icons.Telefono} alt="telefono" title="telefono" /></picture></a>
                            <a className="nav-link" href={route('servicioContacto')}><picture><img src={Icons.Correo} alt="coreo" title="coreo" /></picture></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}