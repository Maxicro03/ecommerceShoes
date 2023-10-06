import banner from "../images/banner.jpg";

const Banner = () => {
    return(
        <div className="contenedorBanner">
            <img src={banner} className="bannerPrincipal" alt="banner" />
        </div>
    )
}

export default Banner