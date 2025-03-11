export default function TarjetaBlog({Title, URL, children, Img, ...props}) {
    
    return(
        <>
            <a href={route(URL)} className="TarjetBlog">
                <img src={Img} alt={Title} title={Title} loading="lazy"/>
                <div>
                    <h2>{Title}</h2>
                    <p>{children}</p>
                </div>
            </a>
        </>
    );
}