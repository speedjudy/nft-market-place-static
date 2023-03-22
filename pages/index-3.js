import NavbarTwo from '../components/Layout/NavbarTwo';
import BannerArea from '../components/HomeThree/BannerArea';
import AuctionArea from '../components/HomeThree/AuctionArea';
import TrendingArea from '../components/HomeThree/TrendingArea';
import TopSeller from '../components/Common/TopSeller';
import FeaturedArea from '../components/HomeThree/FeaturedArea';
import Testimonial from '../components/HomeThree/Testimonial';
import AuthorArea from '../components/HomeThree/AuthorArea';
import BlogArea from '../components/Common/BlogArea';
import CollectionArea from '../components/Common/CollectionsArea';
import Footer from '../components/Layout/Footer';
import Copyright from '../components/Common/Copyright';


const Index = () => {
  return (
    <>
      <NavbarTwo />
      <BannerArea/>
      <AuctionArea/>
      <TrendingArea/>
      <TopSeller pt100="pt-100" />
      <FeaturedArea/>
      <Testimonial/>
      <AuthorArea/>
      <BlogArea/>
      <CollectionArea/>
      <Footer />
      <Copyright/>
    </>
  );
};

export default Index;
