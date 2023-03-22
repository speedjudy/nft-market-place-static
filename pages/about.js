import NavbarTwo from '../components/Layout/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import Copyright from '../components/Common/Copyright';
import AboutArea from '../components/About/AboutArea';
import AboutWidget from '../components/About/AboutWidget';
import AboutInvolved from '../components/About/AboutInvolved';
import AboutTestimonial from '../components/About/AboutTestimonial';
import TeamArea from '../components/Common/TeamArea';

const About = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        bannerHeading='About Us'
        parentTitle='Community'
        pageTitle='About Us'
        bg='inner-bg1'
      />

      <AboutArea />
      <AboutWidget />
      <AboutInvolved />
      <AboutTestimonial />
      <TeamArea />
      <Footer />
      <Copyright />
    </>
  );
};

export default About;
