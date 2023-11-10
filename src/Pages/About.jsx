import { Link } from "react-router-dom";
function About() {
    return (
        <>
            <div className="main-about">

                <nav className="container1">
                    <div className="navbar py-4">
                        <div className="logo"><Link to="/" className='text-decoration-none'><h2>Start Bootstrap</h2></Link></div>
                        <div className="links">
                            <ul>
                                <li><Link to="/" className='text-decoration-none'>Home</Link></li>
                                <li><Link to="/About" className='text-decoration-none'>About</Link></li>
                                <li><Link to="/Sample" className='text-decoration-none'>Sample Post</Link></li>
                                <li><Link to="/Contact" className='text-decoration-none'>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="txt">
                    <h2>About Me<br /><span>This is what I do.</span></h2>
                </div>
            </div>

            <section className="blogs">
                <div className="container2">
                    <div className="blog-about">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</h2>
                    </div>
                    <div className="blog-about">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!.</h2>
                    </div>
                    <div className="blog-about">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!</h2>
                    </div>

                </div>
            </section>
        </>

    );
}

export default About;