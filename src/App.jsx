
import { useState } from "react";
import { members } from "./data/members";
import "./app.css";

function App() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <main className="app">
      {/* Animated background */}
      <div className="orb orb-one"></div>
      <div className="orb orb-two"></div>

      {/* Navigation */}
      <nav className="navbar">
        <a href="#" className="logo">
          <span className="logo-icon">G2</span>
          GROUP TWO
        </a>

        <a href="#members" className="nav-link">
          Meet the team <span>↗</span>
        </a>
      </nav>

      {/* Hero section */}
      <section className="hero">
        <span className="eyebrow">
          ✦ WELCOME TO OUR CREATIVE SPACE
        </span>

        <h1>
          Five minds.
          <br />
          <span>One vision.</span>
        </h1>

        <p className="hero-description">
          Every person has a story, every idea has a purpose.
          Get to know the people behind Group 2.
        </p>

        <a href="#members" className="explore-button">
          Explore our memos <span>↓</span>
        </a>

        <div className="hero-note">
          <span>✳</span> Built with teamwork and creativity.
        </div>
      </section>

      {/* Members section */}
      <section className="members-section" id="members">
        <div className="section-heading">
          <div>
            <span className="eyebrow">THE PEOPLE BEHIND THE IDEAS</span>
            <h2>Our little universe.</h2>
          </div>

          <span className="member-count">
            05 MEMBERS
          </span>
        </div>

        <div className="memo-grid">
          {members.map((member, index) => (
            <article
              key={member.id}
              className={`memo-card ${member.color}`}
              style={{ "--delay": `${index * 0.12}s` }}
              onClick={() => setSelectedMember(member)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  setSelectedMember(member);
                }
              }}
            >
              <div className="memo-top">
                <span className="memo-number">
                  NO. {member.number}
                </span>
                <span className="memo-symbol">
                  {member.emoji}
                </span>
              </div>

              <div className="memo-content">
                <span className="memo-role">
                  {member.role}
                </span>

                <h3>{member.name}</h3>

                <p>"{member.message}"</p>
              </div>

              <div className="memo-footer">
                <span>OPEN MEMO</span>
                <span className="memo-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-line"></div>
        <h2>Better together.</h2>
        <p>GROUP 2 © 2026 — MADE WITH CREATIVITY.</p>
      </footer>

      {/* Member popup */}
      {selectedMember && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className={`modal-card ${selectedMember.color}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setSelectedMember(null)}
              aria-label="Close memo"
            >
              ×
            </button>

            <span className="memo-number">
              MEMBER {selectedMember.number}
            </span>

            <div className="modal-symbol">
              {selectedMember.emoji}
            </div>

            <span className="memo-role">
              {selectedMember.role}
            </span>

            <h2>{selectedMember.name}</h2>

            <p className="modal-message">
              "{selectedMember.message}"
            </p>

            <div className="modal-divider"></div>

            <p className="modal-description">
              {selectedMember.description}
            </p>

            <span className="modal-signature">
              A MEMBER OF GROUP 2 ✦
            </span>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
