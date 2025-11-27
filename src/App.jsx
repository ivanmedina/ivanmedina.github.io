import React from "react";
import "semantic-ui-css/semantic.min.css";

import Homepage from './pages/Homepage'

import "./styles/main.scss";
import Footer from "./components/Footer";


const App = () => (
  <>
    <Homepage />
    <Footer/>
  </>
);

export default App;