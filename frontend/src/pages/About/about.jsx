import "./About.css";

function About() {
    return (
        <div className="about-container">
            <h1>About Us</h1>

            <p>
                Smart Interview Preparation Platform helps
                students prepare for technical interviews
                through quizzes, coding challenges, and
                learning resources.
            </p>

            <div className="about-cards">

                <div className="about-card">
                    <h2>Our Mission</h2>
                    <p>
                        Help students become confident
                        and job-ready.
                    </p>
                </div>

                <div className="about-card">
                    <h2>Technologies</h2>
                    <p>
                        React, Node.js, Express.js,
                        MongoDB, JWT
                    </p>
                </div>

                <div className="about-card">
                    <h2>Features</h2>
                    <p>
                        Authentication, Interview Questions,
                        Dashboard, Quizzes and Progress Tracking
                    </p>
                </div>

            </div>
        </div>
    );
}

export default About;