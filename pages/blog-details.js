import NavbarTwo from '../components/Layout/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import Copyright from '../components/Common/Copyright';
import BlogDetailsArea from '../components/BlogDetails/BlogDetailsArea';

const BlogDetails = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        bannerHeading='Blog Details Page'
        parentTitle='Community'
        pageTitle='Blog Details'
        bg='inner-bg6'
      />

      <BlogDetailsArea/>

      <Footer />
      <Copyright />
    </>
  );
};

export default BlogDetails;
