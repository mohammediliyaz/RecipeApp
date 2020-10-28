import React from "react";

import Footer from "../../Components/Footer/Footer";
import Layout from "../../Components/layout/layout";
import Navabar from "../../Components/Navbar/Navbar";
import Slide from "../../Components/SlideImageBar/Slide";
import history from "../../history/History";

export default function Home() {
  const allow = localStorage.getItem("key");
  const display = () => {
    if (allow)
      return (
        <div>
          <Navabar />
          <Slide />
          <Layout />
          <Footer />
        </div>
      );
    else {
      alert("Unuathorized");
      history.push("/");
    }
  };

  return <div>{display()}</div>;
}
