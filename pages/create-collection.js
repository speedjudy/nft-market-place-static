import NavbarTwo from '../components/Layout/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import CreateCollectionArea from '../components/CreateCollection/CreateCollectionArea';
import Footer from '../components/Layout/Footer';
import Copyright from '../components/Common/Copyright';

const CreateCollection = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        bannerHeading='Recent Activity'
        parentTitle='Activity'
        pageTitle=''
        bg='inner-bg13'
      />
      <CreateCollectionArea/>
      <Footer />
      <Copyright />
    </>
  );
};

export default CreateCollection;
