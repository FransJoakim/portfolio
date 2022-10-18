import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { signIn, createUser } from "../lib/firebase";

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img className={styles.header_Image} src="./me.png" />
        <div className={styles.header_Name}>
          Frans Joakim
          <br />
          Løitegaard Titulaer
        </div>
      </header>
      <main className={styles.projects}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signIn(email, password);
          }}
        >
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" value="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
};

export default Home;
