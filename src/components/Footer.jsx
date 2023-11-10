import { Link } from "react-router-dom";
function Footer() {
    return ( 
        <>
        <footer className="footer">
        <div className="icons">
            <Link to="#"><i className="fa-brands fa-twitter fa-3x"></i></Link>
            <Link to="#"><i className="fa-brands fa-facebook fa-3x"></i></Link>
            <Link to="#"><i className="fa-brands fa-github fa-3x"></i></Link>
            <br/>
            <h3 className="c1"> Copyright &#169; Your Website 2023 </h3>
        </div>
    </footer>
        </>
     );
}

export default Footer;