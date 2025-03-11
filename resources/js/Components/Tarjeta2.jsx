import { useRef } from "react";

export default function Tarjeta2({Img, children, Clases, Id, Alt, openModal}) {
    
    const imgRef = useRef(null);
    const h3Ref = useRef(null);

    function Zoom() {
        if (imgRef.current && h3Ref.current) {
            imgRef.current.style.transform = 'scale(1.4)';
            h3Ref.current.style.top = '120%';
        }
    }

    function Normal() {
        if (imgRef.current && h3Ref.current) {
            imgRef.current.style.transform = 'scale(1)';
            h3Ref.current.style.top = '75%';
        }
    }

    return(
        <>
            <button type="button" className={Clases} onClick={openModal}>
                <img src={Img} alt={Alt} ref={imgRef} title={Alt}
                    onMouseMoveCapture={Zoom}
                    onMouseOutCapture={Normal}
                    loading="lazy"
                />
                <h2 className="h3" ref={h3Ref}><strong>{children}</strong></h2>
            </button>
        </>
    );
}