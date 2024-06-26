import "./MyWork.css";
import Footer from "../components/Footer";

export default function MyWork() {
  return (
    <>
      <header id="mywork">
        <div className="container">
          <div className="title-text">
            <h1>My Work</h1>
          </div>
          <div className="tree">
            <h2>
              [~]<span style={{ color: "white" }}>/gby</span>${" "}
              <span style={{ color: "yellow" }}>tree</span>
            </h2>
          </div>
          <div className="examples">
            <p>Folder PATH listing</p>
            <p>
              Volume serial number is 744A-400A <br />
              ./gby <br />
              ├───Fun Projects <br />│ └───
              <a href="./MiTM_Attacks_in_Active_Directory.pdf" target="_blank">
                MiTM Attacks in Active Directory
              </a>{" "}
              <br />
              ├───Blogs & Writeups <br />│ ├───
              <a href="https://medium.com/@guyby/us-cyber-open-2024-challenges-writeup-c0761efacb8d">
                US Cyber Open CTF Challenges Writeup
              </a>{" "}
              <br />│ ├───
              <a href="https://medium.com/@guyby/dod-cyber-sentinel-may-2024-osint-solutions-672c5eda5b6c">
                Completing OSINT challenges in a DoD-backed CTF
              </a>{" "}
              <br />│ ├───
              <a
                href="https://medium.com/@guyby/how-a-fake-app-successfully-social-engineered-gen-z-723d5ddf7fa3"
                target="_blank"
              >
                How a fake app successfully social-engineered Gen-Z
              </a>{" "}
              <br />│ └───
              <a
                href="https://medium.com/@guyby/qr-codes-how-secure-are-they-really-23d4295bb9c2"
                target="_blank"
              >
                QR Codes: How Secure Are They, Really?
              </a>{" "}
              <br />
              ├───Cybersecurity Memes <br />│ ├───
              <a href="https://www.linkedin.com/in/gbeny/recent-activity/videos/">
                DDoS Attacks
              </a>{" "}
              <br />│ └───
              <a href="https://www.linkedin.com/in/gbeny/recent-activity/videos/">
                Ransomware
              </a>{" "}
              <br />
              ├───Security Education <br />│ └───
              <a
                href="https://www.tiktok.com/@securedbyguy/video/7272577289131707694"
                target="_blank"
              >
                Phishing Awareness
              </a>{" "}
              <br />
            </p>
          </div>
        </div>
      </header>
      <div>
        <Footer />
      </div>
    </>
  );
}
