import NavbarTwo from '../components/Layout/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AuthorProfileArea from '../components/AuthorProfile/AuthorProfileArea';
import InvolvedArea from '../components/Common/InvolvedArea';
import Footer from '../components/Layout/Footer';
import Copyright from '../components/Common/Copyright';

const AuthorProfile = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        bannerHeading='Author Profile'
        parentTitle='Pages'
        pageTitle='Profile'
        bg='inner-bg10'
      />
      <AuthorProfileArea />
      <InvolvedArea />
      <Footer />
      <Copyright />
    </>
  );
};

export default AuthorProfile;
