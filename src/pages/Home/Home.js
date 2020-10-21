import React, { Component } from "react";

import Footer from "../../Components/Footer/Footer";
import Layout from "../../Components/layout/layout";
import Navabar from "../../Components/Navbar/Navbar";
import Slide from "../../Components/SlideImageBar/Slide";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navabar />
        <Slide />
        <Layout />
        <Footer />
      </div>
    );
  }
}
