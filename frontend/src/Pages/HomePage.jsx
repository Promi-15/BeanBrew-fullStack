
import Banner from "../Components/Banner";
import Menu from "../Components/Menu";
import BreadBanner from "../Components/BreadBanner";
import DiscoverBanner from "../Components/DiscoverBanner";
import OurChefs from "../Components/OurChefs";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <Menu />
      <BreadBanner />
      <DiscoverBanner />
      <OurChefs />
      <Footer/>
    </div>
  );
};

export default HomePage;
