import "./About.css";
import { useEffect, useState } from "react";

const pics = [
  { id: 1, src: pic1 },
  { id: 2, src: pic2 },
  { id: 3, src: pic3 },
  { id: 4, src: pic4 },
  { id: 5, src: pic5 },
  { id: 6, src: pic6 },
];
// Placeholder for image
import profilePic from "../assets/mypic.jpeg";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";

function AboutPage() {
  // --- SLIDESHOW LOGIC ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const numSlides = pics.length;

  // Auto-play effect
  useEffect(() => {
    const intervalId = setInterval(goToNext, 6000); // Change slide every 5 seconds
    return () => clearInterval(intervalId);
  }, [numSlides]);

  // Handler functions
  const goToNext = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === numSlides - 1 ? 0 : prevIndex + 1,
    );
  };

  const goToPrev = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? numSlides - 1 : prevIndex - 1,
    );
  };
  return (
    <main className="about-page-main">
      {/* 1. Profile and Full Bio Section (Two-Column Layout) */}
      <section className="about-section about-profile-bio-section">
        <h1 className="page-main-title">Who am I?</h1>

        <div className="profile-bio-container">
          {/* Left Column: Circular Image */}
          <div className="profile-image-container">
            <img
              src={profilePic}
              alt="Srivatsa profile picture"
              className="circular-profile-image"
            />
          </div>

          {/* Right Column: Full Bio Text */}
          <div className="full-bio-text-box">
            <h2 className="section-title bio-heading">Full Biography</h2>
            <p className="bio-text-content justified-text">
              Srivatsa was initiated into the the divine art of Mridanga at the
              tender age of 6 under the tutelage of Senior Mridanga Vidwan Dr.
              Nandyala Rama Murty. He is under the tutelage of Mridangam Maestro
              "Sangeetha Natak Academy" Awardee Vidwan Dr. Patri Satish Kumar,
              Chennai since 2021. Srivatsa belongs to the Andra Style of
              mridangam which is known for its clarity, tonal purity, smooth
              following of the Krithis(songs) and intricate yet graceful
              rhythmic patterns. He started performing from the age of 10 and
              has since then been an active performer in various prestigious
              sabhas and festivals. He has performed across prestigious venues
              like The Madras Music Academy, The Bangalore Gayana Samaja, Navya
              Nataka Samiti (hyderabad), etc. Srivatsa has accompanied several
              prominent artists like Pattabhirama Pandit, N.R Prashanth,
              "Karnataka Kalashree" B.G Srinivas, etc. <br></br>
              <p>
                Apart from performing, he is also passionate in teaching and
                spreading the art form to students. He has been teaching
                students both offlie and online since 2021.
              </p>
            </p>
          </div>
        </div>
      </section>

      {/* 2. Achievements Section */}
      <section className="about-section about-achievements-section">
        <h2 className="section-title center-title">Achievements</h2>
        <div className="achievements-slideshow">
          <div className="achievements-list">
            <ul>
              <li> "B" Graded Artist of All India Radio at the age of 19</li>
              <li>
                {" "}
                1st Prize from Ranga Sourabha, State Level competition for 3
                consecutive years (2023,2024,2025)
              </li>
              <li>1st Prize from Navya Nataka Samiti, Hyderabad.</li>
              <li>
                1st Prize from Percussive Arts Center, Bangalore at the age of
                12.
              </li>
              <li>1st Prize from Veenadhari Insititute</li>
              <li>
                "Outstanding finalist" from SaPa academy led by Padma Bhushan
                Dr.L Subramanium
              </li>
              <li>
                {" "}
                Many more prizes from various instituions like Gayana samaja,
                Malleshwaram Sangeetha sabha,etc
              </li>
            </ul>{" "}
            <br></br>
          </div>
        </div>
        <div className="slideshow">
          <div className="slideshow-container">
            {/* 1. Slides (Map through data) */}
            {pics.map((pic, index) => (
              <div
                key={pic.id}
                className={`media-slide ${index === currentSlide ? "active" : ""}`}
              >
                <img
                  src={pic.src}
                  alt={pic.caption}
                  className="slideshow-image"
                />

                <div className="media-caption">
                  <p>{pic.caption}</p>
                </div>
              </div>
            ))}

            {/* 2. Navigation Arrows */}
            <button className="prev-button" onClick={goToPrev}>
              &#10094;
            </button>
            <button className="next-button" onClick={goToNext}>
              &#10095;
            </button>

            {/* 3. Dot Indicators */}
            <div className="slideshow-dots">
              {pics.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentSlide ? "active-dot" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="about-page-footer"></footer>
    </main>
  );
}

export default AboutPage;
