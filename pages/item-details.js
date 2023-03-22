import NavbarTwo from '../components/Layout/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ItemDetailsArea from '../components/ItemDetails/ItemDetailsArea';
import TrendingArea from '../components/Common/TrendingArea';
import Footer from '../components/Layout/Footer';
import Copyright from '../components/Common/Copyright';

const ItemDetails = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        bannerHeading='Discover Item Details'
        parentTitle='Discover'
        pageTitle='Item Details'
        bg='inner-bg12'
      />
      <ItemDetailsArea/>
      <TrendingArea bg="trending-area-bg-two"/>
      <Footer />
      <Copyright />
    </>
  );
};

export default ItemDetails;
