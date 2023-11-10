import { Link } from 'react-router-dom';
function Home() {
    return (

        <>
            <div className="main-home">

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
                    <h2>Clean Blog<br /><span>Link Blog Theme by Start Bootstrap</span></h2>
                </div>
            </div>
            <div className="blogs">
                <div className="container2">
                    <div className="blog">
                        <Link to="/Sample" className='text-decoration-none'><h2>Man must explore, and this is exploration at its greatest<br /><span>Problems look mighty small from 150 miles up</span></h2></Link>
                        <p>Posted by <span className="s"><Link to="./Sample" className='text-decoration-none'>Start Bootstrap</Link></span> on September 24, 2023 </p>
                    </div>

                    <div className="blog">
                        <Link to="/Sample" className='text-decoration-none'><h2>I believe every human has Link finite number of heartbeats. I don't intend to waste any of mine.</h2></Link>
                        <p>Posted by <span className="s"><Link to="./Sample" className='text-decoration-none'>Start Bootstrap</Link></span> on September 18, 2023 </p>
                    </div>

                    <div className="blog">
                        <Link to="/Sample" className='text-decoration-none'><h2>Science has not yet mastered prophecy<br /><span>We predict too much for the next year and yet far too little for the next ten.</span></h2></Link>
                        <p> Posted by <span className="s"><Link to="./Sample" className='text-decoration-none'>Start Bootstrap</Link></span> on August 24, 2023 </p>
                    </div>

                    <div className="blog">
                        <Link to="/Sample" className='text-decoration-none'><h2>Failure is not an option<br /><span>Many say exploration is part of our destiny, but it’s actually our duty to future generations.</span></h2></Link>
                        <p>Posted by <span className="s"><Link to="./Sample" className='text-decoration-none'>Start Bootstrap</Link></span> on July 8, 2023 </p>
                    </div>

                    <div className="btn"><button>Older Posts <i className="fa-solid fa-arrow-right"></i></button></div>
                </div>
            </div>
        </>

    );
}

export default Home;