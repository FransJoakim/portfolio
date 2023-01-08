import styles from "../../styles/Contact.module.scss";
import { sendMail } from "../../lib/utils";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    sendMail(email, message);
    // setHasSubmitted(true);
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
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
          />
          <br />
          <textarea
            placeholder="Message.."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      )}
      {!!hasSubmitted && (
        <div className={styles.form}>
          <h2>Thank you!</h2>
          <p>
            An email was sent to your email ({email}) and myself
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
