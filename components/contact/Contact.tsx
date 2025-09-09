import styles from "../../styles/Contact.module.scss";
import { sendMail } from "../../lib/utils";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState<string>("");
  const [confirmedEmail, setConfirmedEmail] = useState("");
  const [message, setMessage] = useState<string>("");

  const [validInput, setValidInput] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleInputChange = (cb: (str: string) => void, str: string) => {
    cb(str);
    setValidInput(!!email && !!message);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validInput) return;
    sendMail(email, message);
    setHasSubmitted(true);
    setConfirmedEmail(email);
    setMessage("");
    setEmail("");
  };

  return (
    <section className={styles.contact}>
      <p id="contact" className="hidden">
        Contact
      </p>
      <div className="bg_animation"></div>
      <div className="bg_animation bg2"></div>
      <div className="bg_animation bg3"></div>
      {!hasSubmitted && (
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2>Get in touch...</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => handleInputChange(setEmail, e.target.value)}
            placeholder="Your email"
          />
          <br />
          <textarea
            placeholder="Message.."
            value={message}
            onChange={(e) => handleInputChange(setMessage, e.target.value)}
          />
          <button
            type="submit"
            disabled={!validInput}
            className={styles.submit}
          >
            Send
          </button>
        </form>
      )}
      {!!hasSubmitted && (
        <div className={styles.form}>
          <h2>Thank you!</h2>
          <p>
            An email was sent to your email ({confirmedEmail}) and myself
            (fransjlt@gmail.com). I will be in touch soon.
          </p>
          <p className="text-xs mt-2">
            Please double check that the provided email is correct
          </p>
        </div>
      )}
    </section>
  );
};

export default Contact;
