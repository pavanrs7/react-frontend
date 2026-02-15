//import "./Home.css"
import "./Home.css"

import heropic from "../assets/heropic.jpeg"
import {Link} from "react-router-dom";
function Home() {
    return (
        <div className ="home-hero">
            <h1></h1>
            {/*<div className = "hero-image">
            <img src ={heropic} alt="Picture" className="hero-img"></img>
            </div>
            <div className="hero-text">
                <p> Namaste! Welcome to the world of Rhythm!</p>
            </div>*/}
            <section className="hero-section">
                <div className = "hero-image-layer">
                    <img src={heropic} alt="Musician with Instrument" className="hero-img-cover" />
                </div>  
                <div className="hero-content">
                    <p className = "hero-text">Namaste! Welcome to the world of Rhythm!</p>
                </div> 
            </section>
            <div className = "quote-section">
                <p className ="quote"> "Music is the highest art and to those who understand, is the highest worship"</p>
                <p className = "viveka"> - Vivekananda</p>
            </div>
            <div className="YTvideos">
                {/* This row makes the videos side-by-side */}
                <div className="videos-row"> 
        
                    {/* FIRST Video Container */}
                    <div className="ytshorts">
                           <iframe src="https://youtube.com/embed/HvjDGQow8Sw?autoplay=1" 
                            title="YouTube video player 1" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen></iframe>
                    </div>
        
                    {/* SECOND Video Container */}
                    <div className="ytshorts">
                        {/* Note: I removed autoplay/mute from the second one unless that's intended, as autoplay is usually blocked on mobile */}
                        <iframe 
                            src="https://www.youtube.com/embed/Cb1Fml_SDUo?" 
                            title="YouTube video player 2" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                        ></iframe>
                    </div>
        
                </div> {/* end .videos-row */}

                {/* The link below the videos */}
                <div className="watch-more">
                    <a href="https://www.youtube.com/@srimrid2004" className="Watch">Watch More Videos</a>
                </div>

            </div>

            <div className = "instrument">
                <span className="mrid"> What is Mridanga ? </span>
                <Link to= "https://darbar.org/the-mridangam-an-ancient-divine-drum/" className="know-more">Click here!</Link>
                
            </div>
            <section className="LearnSection-Container"> 
                {/* This section now spans the full width of the screen */}
    
                <div className="LearnSection-FullWidth-Image">
                    {/* The image will be applied as a background via CSS */}
                    {/*< img src = "https://kalamandalam.edu.in/wp-content/uploads/2024/05/mridangam1-Photoroom.jpg"></img>*/}
                </div>
    
                <div className="LearnSection-Content">
                     {/* Content is placed in a separate layer to keep it centered and readable */}
                    <h2 className="LearnSection__title">Ready to Dive Deeper?</h2>
                    <p className="LearnSection__description">
                        Lets explore the world of Rhythm!
                    </p>
                    <a href="/Learn" className="LearnSection__button">Start Learning Now</a>
                </div>
            </section>
        </div>
        

        
    );
    
}
export default Home;