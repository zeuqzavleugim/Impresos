export default function Buton1({clases, ...props}) {
    
    return(
        <>
        <button type="button" className={"Buton1 " + clases } {...props} >X</button>
        </>
    );
}