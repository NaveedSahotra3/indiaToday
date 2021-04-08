// Components
import LandingPage from "./LandingPage/LandingPage";
import Header from "./LandingPage/Header";
import Footer from "./LandingPage/Footer";
import Stories from "./stories/newstory";
import Tech from './tech/tech'
import Videos from './videos/video'
import Election from './elections/election'
import {  Route } from "react-router-dom";
import MediaPlayer from './mediaPlayer/mediaPlayer'
function Home() {
  return (
    <div className="html front not-logged-in one-sidebar sidebar-second page-node page-node- page-node-2 node-type-page">
     
      <Header />
      
        <Route exact path="/" component={MediaPlayer} />
        {/* <Route path="/" component={Stories} /> */}
        <Route exact path="/tech" component={Tech} />
        <Route exact path="/election" component={Election} />

        <Route exact path="/video" component={Videos} />


      
  
      <Footer />
    </div>
  );
}

export default Home;
