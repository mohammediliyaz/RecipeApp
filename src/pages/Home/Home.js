import React from "react";

import Footer from "../../Components/Footer/Footer";
import Layout from "../../Components/layout/layout";
import Navabar from "../../Components/Navbar/Navbar";
import Slide from "../../Components/SlideImageBar/Slide";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default function Home() {
  const loading = useSelector((state) => state.loading);
  console.log(loading);
  const display = () => {
    return (
      <div>
        <Navabar />
        <Slide />
        <Layout />
        <Footer />
      </div>
    );
  };

  return <div>{display()}</div>;
}
