import Header from "./components/Header/Header.js";
import Profile from './components/Profile/profile'
import Contact from "./components/Contact/contact";
import Skills from './components/Skills/skills'
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer"
import './common.css'
import './responsive.css'
import Experiences from "./components/Experiences/Experiences";
import { useState } from "react";
import Items from "./components/Footer/Footer.jsx";

const App = () => {
  const [ListItem] = useState(Items)
  return (
    <>
      <title></title>
      <Header />
      <Profile />
      <Contact />
      <Skills />
      <Experiences />  
      <Education />
      <Footer listitem = {ListItem}/>
    </>
  );
}

export default App;
