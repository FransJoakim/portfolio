import styles from "../../styles/Home.module.scss";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <p id="contact" className="hidden">
        Contact
      </p>

      <div className="bg_animation"></div>
      <div className="bg_animation bg2"></div>
      <div className="bg_animation bg3"></div>
      <div className={styles.form}>
        <h2>Get in touch...</h2>
        <input placeholder="Your email" />
        <br />
        <textarea placeholder="Message.." />
        <button className="bg-blue-400 p-2 m-2">Send</button>
      </div>
    </section>
  );
};

export default Contact;
