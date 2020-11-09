import React from "react";

import Footer from "../../Components/Footer/footer";
import Layout from "../../Components/layout/layout";
import Navabar from "../../Components/Navbar/Navbar";
import Slide from "../../Components/SlideImageBar/Slide";
import history from "../../history/History";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

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
      toast.error("UNAUTHORIZED", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
      });
      history.push("/");
    }
  };

  return <div>{display()}</div>;
}
