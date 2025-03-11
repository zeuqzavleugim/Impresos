import { Icons } from "@/Imags/Icons";
import { RedesSoci } from "@/Imags/RedesSoci";
export default function Nav() {

    return(
        <>
            <nav className="navbar  fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand iconNav" href={route('home')}> <img src={Icons.MagicPop} alt="IconoMagicPop" title="IconoMagicPop" loading="lazy"/></a>
                    <div className=" positionNav">
                        <a href="#" className="nav-link"><picture><img src={Icons.Correo} alt="correo" title="correo" loading="lazy"/></picture></a>
                        <a href="tel:5526524180" className="nav-link"><picture><img src={Icons.Telefono} alt="telefono" title="telefono" loading="lazy"/></picture></a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title iconNav" id="offcanvasNavbarLabel"><img src={Icons.MagicPop} alt="IconoMagicPop" title="IconoMagicPop"/></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link" href={route('impresion')}>Impresión Profecional en Alta Resolución</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={route('decoracion')}>Decoración con Vinil</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={route('recorte')}>Recorte de Vinil</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={route('servicioContacto')}>Contacto</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={route('servicioBlogs')}>Blog</a>
                                </li>
                                <li className="nav-item redesFooter">
                                    <a className="nav-link" href="https://www.facebook.com/MagicPopOficial"><picture><img src={RedesSoci.Facebook} alt="Facebook Redes" title="Facebook Redes" loading="lazy"/></picture></a>
                                    <a className="nav-link" href="https://www.instagram.com/magicpopmxvinil?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><picture><img src={RedesSoci.Instagram} alt="Instagram Redes" title="Instagram Redes" loading="lazy"/></picture></a>
                                    <a className="nav-link" href="https://www.tiktok.com/@magicpopviniles?_t=8r2T2yKiCMX&_r=1"><picture><img src={RedesSoci.TikTok} alt="TikTok Redes" title="TikTok Redes" loading="lazy"/></picture></a>
                                    <a className="nav-link" href="https://wa.me/525536615473?text=Hola%20Magic%20Pop%20Impresiones,%20quiero%20saber%20más%20sobre%20tus%20servicios,%20me%20podrías%20apoyar?" target="_blanck"><picture><img src={RedesSoci.WhatsB} alt="Whats Redes" title="Whats Redes" loading="lazy"/></picture></a>
                                    <a className="nav-link" href="#"><picture><img src={Icons.Correo} alt="coreo" title="coreo" loading="lazy"/></picture></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
    
}