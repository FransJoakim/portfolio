import styles from "../../styles/Home.module.scss";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className="bg_animation"></div>
      <div className="bg_animation bg2"></div>
      <div className="bg_animation bg3"></div>
      <div className={styles.form}>
        <h2 id="contact">Get in touch</h2>
        <input placeholder="Your email" />
        <br />
        <textarea placeholder="Message.." />
      </div>
    </section>
  );
};

export default Contact;
