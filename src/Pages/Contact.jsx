import { Link } from 'react-router-dom';
function Contact() {
    return (
        <>
            <div className="main-contact">

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
                    <h2>Contact Me<br /><span>Have questions? I have answers.</span></h2>
                </div>
            </div>

            <section className="contact">
                <div className="container2">
                    <div className="title">
                        <h2>Want to get in touch? Fill out the form below to send me link message and I will get back to you as soon as possible!</h2>
                    </div>
                    <form className="input">
                        <input type="text" id="full name" placeholder="Name" required className="name" />
                        <input type="email" id="email" placeholder="Email Address" required className="email" />
                        <input type="text" id="phone number" placeholder="Phone Number" required className="phone" />
                        <textarea name="message" id="message" placeholder="Message" ></textarea>
                        <input type="button" value="Send" className="btn" />
                    </form>

                </div>
            </section>

        </>
    );
}

export default Contact;