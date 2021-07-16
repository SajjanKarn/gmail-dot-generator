import Head from "next/head";
import { useState } from "react";

import Header from "../components/Header";

import styles from "../styles/Home.module.css";

const emailMultiplexer = require("email-multiplexer");

export default function Home() {
  const [emailInput, setEmailInput] = useState("");
  const [error, setError] = useState("");
  const [variantEmail, setVariantEmail] = useState([]);

  const handleGenerate = () => {
    if (emailInput === "") {
      setError("Please enter a email!");
      return;
    }

    if (!/^[\w.+\-]+@gmail\.com$/.test(emailInput)) {
      setError("Please enter valid gmail address");
      return;
    }

    const emailVariants = emailMultiplexer(emailInput);
    setVariantEmail(emailVariants);
    setError(`Generated Emails: ${emailVariants.length}`);
  };

  return (
    <>
      <Head>
        <title>GMAIL DOT GENERATOR</title>
        <meta
          name="description"
          content="Gmail generator - Gmail dot Trick, Fake gmail generator, Fake gmail, Googlemail Trick. Create many new Gmail email addresses for free."
        />
        <meta
          name="keywords"
          content="fake email, fake email generator, email generator, Fake gmail generator, gmail generator, gmail dot trick, googlemail trick, google trick"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="container-fluid pt-3">
        <div className="container">
          <h2 className={`text-center py-3 ${styles.header_text}`}>
            GMAIL DOT TRICK - Generate Various valid gmail
          </h2>

          {error && (
            <div className="alert alert-dismissible alert-danger">
              <p>{error}</p>
            </div>
          )}

          <div className="d-flex">
            <input
              type="email"
              placeholder="abc@gmail.com"
              className="form-control"
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <button
              onClick={() => handleGenerate()}
              className="btn btn-primary ms-2"
            >
              Generate
            </button>
          </div>
          <textarea
            rows="15"
            placeholder="Your Emails will appear here...."
            className="form-control my-3"
            value={variantEmail.map((email) => `${email}\n`)}
          ></textarea>
        </div>
      </div>
      <footer className={`bg-primary ${styles.footer}`}>
        <h4 className="text-white">2021 Made With 💚 by Sajjan.</h4>
      </footer>
    </>
  );
}
