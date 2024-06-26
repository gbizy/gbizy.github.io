//import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./Contact.css";
import Footer from "../components/Footer";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_fw45l3w",
          "template_f0712kj",
          form.current,
          "fFSlDvV0ymJP0Fqft"
        )
        .then(
          (result) => {
            form.current?.reset();
            console.log(result.text);
            alert("Message successfully sent!");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <>
      <div className="container-contact-page">
        <div className="text-zone">
          <h1>Contact Me</h1>
          <div className="mail_here">
            <h2>
              [~]${" "}
              <span style={{ color: "yellow" }}>
                mail -s "Important Thing Here" you@example.com
              </span>
            </h2>
          </div>
          <div className="Contact-Form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <div className="name-email">
                  <li className="name">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    ></input>
                  </li>
                  <li className="email">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    ></input>
                  </li>
                </div>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  ></input>
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <div className="submit-wrapper">
                  <li className="submit">
                    <input
                      type="submit"
                      className="flat-button"
                      value="Send"
                    ></input>
                  </li>
                </div>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
