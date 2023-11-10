import { Link } from "react-router-dom";
import postPhoto from '../images/post-sample-image.jpg';
function Sample() {
    return (
        <>
            <div className="main-sample">

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

                <div className="txt-post">
                    <h2>Man must explore, and this is exploration at its greatest
                        <span className="s1">Problems look mighty small from 150 miles up</span>
                        <span className="s2">Posted by<Link to=""> Start Bootstrap </Link>on August 24, 2023 </span>
                    </h2>
                </div>
            </div>

            <section className="blogs">
                <div className="container2">
                    <div className="blog-post">
                        <p>
                            Never in all their history have men been able truly to conceive of the world as one: Link single sphere, Link globe, having the qualities of Link globe, Link round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: Link globe in practice, not in theory.
                            <br /><br />
                            Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science.
                            <br /><br />
                            What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.
                            <br /><br />
                            Link Chinese tale tells of some men sent to harm Link young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her.
                            <br /><br />
                            For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.
                            <br /><br />

                            <span>The Final Frontier</span>

                            <br /><br />
                            There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is Link task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.
                            <br /><br />
                            There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is Link task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.
                            <br /><br />
                            The dreams of yesterday are the hopes of today and the reality of tomorrow. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next ten.
                            <br /><br />
                            Spaceflights cannot be stopped. This is not the work of any one man or even Link group of men. It is Link historical process which mankind is carrying out in accordance with the natural laws of human development.
                            <br /><br />

                            <span>Reaching for the Stars</span>

                            <br /><br />
                            As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of Link marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with Link finger it would crumble and fall apart. Seeing this has to change Link man.
                            <br /><br />

                        </p>

                        <figure>
                            <img src={postPhoto} alt="" width="100%" />
                            <figcaption>To go places and do things that have never been done before – that’s what living is all about.</figcaption>
                        </figure>

                        <p>

                            Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.
                            <br /><br />
                            As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s Link fundamental truth to our nature, Man must explore, and this is exploration at its greatest.
                            <br /><br />
                            Placeholder text by<Link to="" className='text-decoration-none'> Space Ipsum</Link> · Images by<Link to="" className='text-decoration-none'> NASA on The Commons</Link>

                        </p>

                    </div>

                </div>
            </section>

        </>
    );
}

export default Sample;