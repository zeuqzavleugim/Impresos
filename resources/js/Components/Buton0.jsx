

export default function Buton0({clases, URL, children, ...props}) {
    
    

    return(
        <>
            <button 
                type="button" 
                className={"Buton0 " + clases } 
                onClick={() => window.location.href = route(URL)}
                {...props}
            >
                {children}
            </button>
        </>
    );
}