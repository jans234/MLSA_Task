/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Muhammad Afaq",
  title: "Data Analyst",
  email: "Muhammad.Afaq@studentambassadors.com",
  gitHub: "https://github.com/jans234",
  instagram: "https://instagram.com/mafaq84?igshid=NzZlODBkYWE4Ng==",
  linkedIn: "https://www.linkedin.com/in/muhammad-afaq-6b90b6250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  medium: "",
  twitter: "microsoft",
  youTube: "Code",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
