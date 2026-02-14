import "./Learn.css";
import { useState } from "react";
import pic from "../assets/mypic2.JPG.jpeg";
import heroImage from "../assets/WhatsApp Image 2026-02-14 at 10.41.25 PM.jpeg";

function Learn() {
  const [showForm, setShowForm] = useState(false);
  const [priorExperience, setPriorExperience] = useState("");
  const [guruName, setGuruName] = useState("");
  const [yearsLearnt, setYearsLearnt] = useState("");

  const toggleModal = () => setShowForm(!showForm);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      priorExperience,
      guruName,
      yearsLearnt,
      email: e.target.email.value,
      phone: e.target.phone.value,
      level: e.target.level.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch(
        "https://backend-mridvatsa.vercel.app/", // ✅ Replace with your actual backend Vercel URL
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        alert("Registration submitted successfully!");
        toggleModal();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to connect to server.");
    }
  };

  return (
    <main className="learn-page-main">
      <section
        className="learn-hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <div className="hero-text-content">
            <h1 className="learn-page-title">Let's Learn!</h1>
            <h2>Master Indian Percussion Play Anything!</h2>
          </div>
        </div>
      </section>

      <section className="learn-content why-mrid">
        <h2 className="section-head">Why Learn Mridanga?</h2>
        <div className="placeholder-box">
          <ul className="mrid-info">
            <li>
              <strong>King of Percussion:</strong> Instrument which produces the
              Nāda(divine tone) with a combo of both heavy and soft sounds.
            </li>
            <li>
              <strong>Divine Trinity:</strong> One of the three divine
              instruments with the Veena and Flute.
            </li>
            <li>
              <strong>Ancient Heritage:</strong> Traceable back to Sangam
              literature.
            </li>
            <li>
              <strong>Gateway:</strong> It allows one to play other percussion
              instruments like Khanjira, Ghatam, and Tabla.
            </li>
            <li>
              <strong>Global Reach:</strong> Enables collaboration with any
              genre of music including Djembe, Congas, and Timpani.
            </li>
          </ul>
        </div>
      </section>

      <section className="learn-content why-here">
        <h2 className="section-head">Why learn here?</h2>
        <div className="placeholder-box">
          <div className="teacher-info-flex">
            <div className="teacher-image-container">
              <img src={pic} alt="Srivatsa" className="rounded-teacher-img" />
            </div>
            <div className="teacher-text-content">
              <p className="why">
                You will be learning from <strong>Srivatsa</strong>, who has
                been immersed in this art form since the age of 6. With over 5
                years of teaching experience and a performing career that began
                at age 11, he brings deep practical knowledge to every lesson.
              </p>
              <p className="why">
                You will explore the nuances of the{" "}
                <strong>Andhra style</strong> of mridangam, renowned for its
                exceptional tonal quality and graceful, smooth accompaniment.
              </p>
              <a href="/About" className="know-more-btn">
                Know more!
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="quote-container">
        <div className="quote-practice">
          <p className="quote-p">
            One Ounce of practice is worth a thousand pounds of theory
          </p>
          <p className="quote-author"> - Swami Vivekananda</p>
        </div>
      </div>

      <div className="register-container">
        <div className="register-box">
          <h2 className="register-head">
            Ready to Begin Your Mridanga Journey?
          </h2>
          <button className="register-btn" onClick={toggleModal}>
            Register Now!
          </button>
        </div>
      </div>

      {/* Modal Popup */}
      {showForm && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={toggleModal}>
              &times;
            </button>

            <h3>Student Registration</h3>

            {/* ✅ onSubmit added here */}
            <form className="registration-form" onSubmit={handleSubmit}>
              {/* ✅ name="name" added */}
              <input type="text" name="name" placeholder="Full Name" required />

              <div className="radio-group">
                <label>Prior learning experience?</label>
                <div className="radio-options">
                  <label>
                    <input
                      type="radio"
                      name="experience"
                      value="Yes"
                      onChange={(e) => setPriorExperience(e.target.value)}
                    />{" "}
                    Yes &emsp;
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="experience"
                      value="No"
                      onChange={(e) => setPriorExperience(e.target.value)}
                    />{" "}
                    No
                  </label>
                </div>
              </div>

              {/* Conditional Fields */}
              {priorExperience === "Yes" && (
                <div className="conditional-fields">
                  <input
                    type="text"
                    placeholder="Previous Guru name"
                    value={guruName}
                    onChange={(e) => setGuruName(e.target.value)}
                    required
                  />
                  <input
                    type="number"
                    placeholder="No. of years learnt"
                    value={yearsLearnt}
                    onChange={(e) => setYearsLearnt(e.target.value)}
                    required
                  />
                </div>
              )}

              {/* ✅ name="email" added */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />

              {/* ✅ type="tel" and name="phone" added */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                minLength={10}
                maxLength={10}
                required
              />

              {/* ✅ name="level" added */}
              <select name="level">
                <option>Select Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>

              {/* ✅ name="message" added */}
              <textarea
                name="message"
                placeholder="Any message (optional)"
              ></textarea>

              <button type="submit" className="submit-btn">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default Learn;
