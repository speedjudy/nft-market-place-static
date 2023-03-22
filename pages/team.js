import NavbarTwo from '../components/Layout/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import TeamArea from '../components/Common/TeamArea';
import Testimonial from '../components/Common/Testimonial';
import InvolvedArea from '../components/Common/InvolvedArea';
import Footer from '../components/Layout/Footer';
import Copyright from '../components/Common/Copyright';

const Team = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        bannerHeading='Our Team'
        parentTitle='Pages'
        pageTitle='Team'
        bg='inner-bg2'
      />
      <TeamArea/>
      <Testimonial/>
      <InvolvedArea />
      <Footer />
      <Copyright />
    </>
  );
};

export default Team;
