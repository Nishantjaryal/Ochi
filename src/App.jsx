

import Navbar from "./components/navbar";
import Landingpage from "./components/landingpage";
import Marquee from "./components/marquee";
import Eyes from "./components/eyes";
import Posts from "./components/posts";
import "./App.css";
import Footer from "./components/footer";


import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();



function App() {
  return (
    <>
        
      <Navbar />
      <Landingpage />
      <Marquee />
      <Eyes/>
      <Posts/>
      <Footer/>
    </>
  );
}

export default App;
