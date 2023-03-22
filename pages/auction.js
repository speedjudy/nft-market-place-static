import NavbarTwo from '../components/Layout/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AuctionArea from '../components/Auction/AuctionArea';
import InvolvedArea from '../components/Common/InvolvedArea';
import Footer from '../components/Layout/Footer';
import Copyright from '../components/Common/Copyright';

const Auction = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        bannerHeading='Live Auction Is Going On'
        parentTitle='Discover'
        pageTitle='Live Auction'
        bg="inner-bg5"
      />
      <AuctionArea />
      <InvolvedArea />
      <Footer />
      <Copyright />
    </>
  );
};

export default Auction;
