import LogoSection from "./components/logo";
import SearchPage from "./components/Search";
import HeroSection from "./components/HeroSection";
import Navbar from "./navigation/page";
// If using a CSS module, import it
// import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className="background">
        <div className="flex gap-96">
          <Navbar />
          <LogoSection />
        </div>
        <SearchPage />
        <HeroSection />
      </div>
    </>
  );
};

export default Home;
