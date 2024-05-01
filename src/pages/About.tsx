import { Link } from "react-router-dom";
import "./About.css";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <header id="about">
        <div className="container">
          <div className="text">
            <h1>About</h1>
            <div className="catread">
              <h2>
                [~]<span style={{ color: "white" }}>/gby</span>$
                <span style={{ color: "yellow" }}> cat README.md</span>
              </h2>
            </div>
            <div className="paragraphsDiv">
              <p>
                My name is Guy and am a cybersecurity professional with strong
                industry foundational knowledge and experience in governance,
                risk & compliance.{" "}
              </p>
              <p>
                I’ve worked with several security frameworks and standards (NIST
                CSF, ISO 27001, HIPAA) and have directly assisted in developing
                security program strategies for executives.
              </p>
              <p>
                On the technical side of things, I bring a proactive approach to
                cybersecurity with a blend of skills associated with IAM as well
                as securing Web Application and Active Directory environments. I
                have a strong background in programming, IT and networking
                through my B.S. in Computer Science from Binghamton University.
              </p>
              <p>
                I am extremely passionate about cybersecurity awareness. I
                create videos and post writeups for the general public educating
                them on current cyber risks; phishing, online scams, recent data
                breaches and more.
              </p>
              <p>
                To that end, I am a Content Creator. I retain nearly 10 years of
                experience in making engaging narratives, and building social
                accounts from ground zero to 100,000+ followers and getting
                millions of unique views per month, with some accounts totaling
                at over 200 million lifetime impressions. Skilled in crafting
                unique campaigns where tech and humor become one.
              </p>
            </div>
            <div className="alwaysPlug">
              <p>
                <br></br>
                To learn more about what I have accomplished, please check out
                my{" "}
                <Link
                  to="route"
                  onClick={(event) => {
                    event.preventDefault();
                    window.open("/guy_benyishai_resume.pdf");
                  }}
                >
                  Resume
                </Link>
                . For examples of my work, see my{" "}
                <Link to="/mywork">Portfolio</Link>.{" "}
              </p>
            </div>
          </div>
        </div>
      </header>
      <div>
        <Footer />
      </div>
    </>
  );
}
