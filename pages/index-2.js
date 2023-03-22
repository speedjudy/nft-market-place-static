import TrendingArea from '../components/Common/TrendingArea';
import BannerArea from '../components/HomeTwo/BannerArea';
import NavbarTwo from '../components/Layout/NavbarTwo';
import TopSeller from '../components/Common/TopSeller';
import AuctionArea from '../components/HomeTwo/AuctionArea';
import FeaturedArea from '../components/Common/FeaturedArea';
import Testimonial from '../components/Common/Testimonial';
import AuthorArea from '../components/HomeTwo/AuthorArea'
import BlogArea from '../components/Common/BlogArea';
import CollectionsArea from '../components/Common/CollectionsArea';
import Footer from '../components/Layout/Footer';
import Copyright from '../components/Common/Copyright';


const Index = () => {
  return (
    <>
      <NavbarTwo />
      <BannerArea  />
      <TrendingArea/>
      <TopSeller/>
      <AuctionArea/>
      <FeaturedArea title="Featured Assets"/>
      <Testimonial/>
      <AuthorArea/>
      <BlogArea/>
      <CollectionsArea/>
      <Footer/>
      <Copyright/>
    </>
  );
};

export default Index;
