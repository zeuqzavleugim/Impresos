import { RedesSoci } from "@/Imags/RedesSoci";

export default function WhatsButon() {
    return(
        <>
        <a href="https://wa.me/525536615473?text=Hola%20Magic%20Pop%20Impresiones,%20quiero%20saber%20más%20sobre%20tus%20servicios,%20me%20podrías%20apoyar?" 
            target="_blanck"
            className="btn-flotante">
                <img src={RedesSoci.WhatsB} alt="Boton de whatsapp" title="Boton de whatsapp" loading="lazy"/>
        </a>
        </>
    );
}