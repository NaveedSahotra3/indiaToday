// Components
import LandingPage from "./LandingPage/LandingPage";
import Header from "./LandingPage/Header";
import Footer from "./LandingPage/Footer";
import Stories from "./stories/newstory";
import Tech from './tech/tech'
import Videos from './videos/video'
import Election from './elections/election'
import {  Route } from "react-router-dom";
import My_Feeds from "./my_feed/my_feed";
import Personalize from "./my_feed/personalize/personalize";
import Movies from "./movies/movies"
import Front from "./fornt/fornt"

function Home() {
  return (
    <div className="html front not-logged-in one-sidebar sidebar-second page-node page-node- page-node-2 node-type-page">
     
      <Header />
      <Route exact path="/my_feed/personalize" component={Personalize} />
        <Route exact path="/" component={LandingPage} />
        {/* <Route path="/" component={Stories} /> */}
        <Route exact path="/tech" component={Tech} />
        <Route exact path="/election" component={Election} />
      <Route exact path="/my_feed" component={My_Feeds} />
        <Route exact path="/video" component={Videos} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/front" component={Front} />
       
     


      
  
      <Footer />
    </div>
  );
}

export default Home;
