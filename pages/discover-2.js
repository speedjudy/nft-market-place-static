import NavbarTwo from '../components/Layout/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import DiscoverArea from '../components/Discover/DiscoverArea';
import InvolvedArea from '../components/Common/InvolvedArea';
import Footer from '../components/Layout/Footer';
import Copyright from '../components/Common/Copyright';

const DiscoverTwo = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        bannerHeading='Discover Exclusive Digital Assets'
        parentTitle='Discover'
        pageTitle='Discover Style Two'
        bg='inner-bg4'
      />
      <DiscoverArea />
      <InvolvedArea />
      <Footer />
      <Copyright />
    </>
  );
};

export default DiscoverTwo;
