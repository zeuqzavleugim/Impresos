
export default function Tarjeta1({Img, children, Id, Alt, Ruta}) {
    
    Alt = children;
    let vista = document.getElementById(Id);
    let h3 = document.getElementById(Alt);

    function Zoom() {
        vista.style.transform = 'scale(1.4)';
        h3.style.top = '120%';
    }
    function Normal() {
        vista.style.transform = 'scale(1)';
        h3.style.top = '75%';
    }
    

    return(
        <>
        <div className="cartUno">
            <a href={Ruta}>
                <img src={Img} alt={Alt} id={Id} title={Alt} onMouseMoveCapture={Zoom} onMouseOutCapture={Normal} loading="lazy"/>
                <h2 className="h3" id={Alt}><strong>{children}</strong></h2>
            </a>
        </div>
        </>
    );
}