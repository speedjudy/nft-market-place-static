import NavbarTwo from "../components/Layout/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import CollectionArea from "../components/Collection/CollectionArea";
import InvolvedArea from "../components/Common/InvolvedArea";
import Footer from "../components/Layout/Footer";
import Copyright from "../components/Common/Copyright";

const Collection = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        bannerHeading="Recent Collection"
        parentTitle="Pages"
        pageTitle="Collection"
        bg="inner-bg11"
      />
      <CollectionArea />
      <InvolvedArea />
      <Footer />
      <Copyright />
    </>
  );
};

export default Collection;
