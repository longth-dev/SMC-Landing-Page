import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <div className="home-container header-content">
          <div className="brand">
            <img className="brand-logo" src="/src/assets/smc1.png" alt="SMC-Ride" />
            <h2 className="brand-name">SMC-Ride</h2>
          </div>
          <nav className="main-nav">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#features">Features</a>
            <a className="nav-link" href="#how-it-works">How It Works</a>
            <a className="nav-link" href="#benefits">Benefits</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>
          <button className="cta-button">Get the App</button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="home-container hero-grid">
            <div className="hero-content">
              <div className="hero-badge">University Exclusive</div>
              <h1 className="hero-title">
                Ride Smarter. <br />Save More. <br />
                <span className="highlight">Travel Together.</span>
              </h1>
              <div className="hero-text">
                <p className="hero-lead">A smart ride-matching platform for university students.</p>
                <p className="hero-subtext">
                  Find affordable motorcycle rides with fellow students traveling the same route. Connect, share costs, and reach your campus safely.
                </p>
              </div>
              <div className="hero-actions">
                <button className="primary-button">Download App</button>
                <button className="secondary-button">Learn More</button>
              </div>
            </div>
            <div className="hero-media">
              <div className="phone-mockup">
                <img
                  alt="Smartphone showing Google Maps navigation with ride-sharing markers"
                  className="phone-image"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN9ksk_ISIqY71ec20WWW0bw3ouYHuJUmbDTyOMbWYE3ZP35wsYnKhOp8vRXjGsaxvPCR6aUvSkCfd-qFiGAkEs_BQNBnye8smeVIs-4pvU-APW7gmzP_M4JRrVjywHudNUfuDcD-rLglWKAzKUbdjDDUHEkMKGQ23pHipDQV055kLYTnum9RZSOBYiuAzaDTncAtKFgX7hKFbCCHZJ78wOyvwdp0_H8lAEU5JnF7CfS0Zzk0kMLu0cMyjZX-sG42XEJ-b1kwVi54"
                />
                <div className="phone-notch"></div>
              </div>
              <div className="hero-card">
                <div className="hero-card-icon">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <div className="hero-card-text">
                  <p className="hero-card-title">Verified Students</p>
                  <p className="hero-card-subtitle">10k+ Active Users</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <div className="home-container">
            <div className="section-heading">
              <h2>Designed for Students</h2>
              <p>Experience the future of campus mobility with our specialized features.</p>
            </div>
            <div className="feature-grid">
              <article className="feature-card">
                <div className="feature-icon">
                  <span className="material-symbols-outlined">route</span>
                </div>
                <h3>Smart Ride Matching</h3>
                <p>AI-based suggestions for the best routes and timing to ensure you never miss a lecture.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <h3>Cost Sharing</h3>
                <p>Split fare easily with peers through our integrated wallet system. No more awkward cash talks.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">
                  <span className="material-symbols-outlined">map</span>
                </div>
                <h3>Mobility Corridors</h3>
                <p>Dedicated campus-bound paths prioritized for student riders to bypass heavy traffic.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">
                  <span className="material-symbols-outlined">school</span>
                </div>
                <h3>Student-Only Community</h3>
                <p>Rest assured knowing every driver and rider is a verified member of your university network.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="steps" id="how-it-works">
          <div className="home-container">
            <div className="section-heading">
              <h2>How It Works</h2>
              <p>Get started in three simple steps</p>
            </div>
            <div className="steps-grid">
              <div className="steps-divider" aria-hidden="true"></div>
              <article className="step-card">
                <div className="step-number">1</div>
                <div className="step-icon">
                  <span className="material-symbols-outlined">edit_square</span>
                </div>
                <h3>Post or Find</h3>
                <p>Enter your destination and university ID to find available rides on your route.</p>
              </article>
              <article className="step-card">
                <div className="step-number">2</div>
                <div className="step-icon">
                  <span className="material-symbols-outlined">handshake</span>
                </div>
                <h3>Match</h3>
                <p>Connect with fellow students. Review profiles and ratings before confirming.</p>
              </article>
              <article className="step-card">
                <div className="step-number">3</div>
                <div className="step-icon">
                  <span className="material-symbols-outlined">savings</span>
                </div>
                <h3>Share &amp; Save</h3>
                <p>Ride together, split the cost instantly, and reach campus on time.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="benefits" id="benefits">
          <div className="home-container benefits-grid">
            <div className="benefits-cards">
              <div className="benefit-column">
                <article className="benefit-card">
                  <span className="material-symbols-outlined">currency_exchange</span>
                  <h4>Reduce Costs</h4>
                  <p>Up to 60% cheaper than traditional ride-hailing.</p>
                </article>
                <article className="benefit-card">
                  <span className="material-symbols-outlined">eco</span>
                  <h4>Eco-Friendly</h4>
                  <p>Reduce carbon footprint by optimizing motorcycle occupancy.</p>
                </article>
              </div>
              <div className="benefit-column offset">
                <article className="benefit-card">
                  <span className="material-symbols-outlined">schedule</span>
                  <h4>Save Time</h4>
                  <p>Avoid long bus queues and transit delays.</p>
                </article>
                <article className="benefit-card">
                  <span className="material-symbols-outlined">gpp_good</span>
                  <h4>Safe Community</h4>
                  <p>Real-time tracking and emergency university contacts.</p>
                </article>
              </div>
            </div>
            <div className="benefits-content">
              <h2>Better Travel for Better Learning</h2>
              <p>
                We understand the struggles of student commuting. SMC-Ride isn&apos;t just an app; it&apos;s a movement to make education more accessible by solving the transportation hurdle.
              </p>
              <ul className="benefits-list">
                <li>
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>Priority parking at university gates</span>
                </li>
                <li>
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>In-app insurance for every ride</span>
                </li>
                <li>
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>24/7 Student support line</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="home-container">
            <div className="cta-card">
              <div className="cta-glow glow-top"></div>
              <div className="cta-glow glow-bottom"></div>
              <h2>Start Riding Smarter Today</h2>
              <p>Join thousands of students who are already saving money and time on their daily commute.</p>

            </div>
          </div>
        </section>
      </main>

      <footer className="home-footer" id="contact">
        <div className="home-container footer-grid">
          <div>
            <div className="brand footer-brand">
              <img className="brand-logo" src="/src/assets/smc1.png" alt="SMC-Ride" />
              <h2 className="brand-name">SMC-Ride</h2>
            </div>
            <p>The premier ride-matching platform dedicated to student mobility and safety.</p>
          </div>

          <div>
            <h4>Contact Us</h4>
            <ul>
              <li>
                <span className="material-symbols-outlined">mail</span>
                smc-ride@gmail.com
              </li>
              <li>
                <span className="material-symbols-outlined">location_on</span>
                FPT University, TPHCM
              </li>
            </ul>
          </div>
          <div>
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Website">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a href="#" aria-label="Share">
                <span className="material-symbols-outlined">share</span>
              </a>
              <a href="#" aria-label="Camera">
                <span className="material-symbols-outlined">camera</span>
              </a>
            </div>
          </div>
        </div>
        <div className="home-container footer-bottom">
          <p>© 2026 SMC-Ride. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
