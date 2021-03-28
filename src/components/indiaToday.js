
// Components
import LandingPage from './LandingPage/LandingPage'
import Header from './LandingPage/Header'
import Footer from './LandingPage/Footer'
import Stories from './stories/story'

function Home() {
    return (
        <div className="html front not-logged-in one-sidebar sidebar-second page-node page-node- page-node-2 node-type-page">
            <Header />
            <LandingPage />
            {/* <Stories /> */}
            <Footer />
        </div>
    );
}

export default Home;
