import NavbarTwo from '../components/Layout/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import FeaturedArea from '../components/Common/FeaturedArea';
import InvolvedArea from '../components/Common/InvolvedArea';
import Footer from '../components/Layout/Footer';
import Copyright from '../components/Common/Copyright';

const DiscoverOne = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        pageTitle='Live Auction'
        parentTitle='Discover'
        bannerHeading='Discover Style One'
        bg="inner-bg5"
      />
      <FeaturedArea title="Discover Assets" pagination={true}/>
      <InvolvedArea />
      <Footer />
      <Copyright />
    </>
  );
};

export default DiscoverOne;
