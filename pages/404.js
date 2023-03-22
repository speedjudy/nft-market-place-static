import NavbarTwo from '../components/Layout/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import Copyright from '../components/Common/Copyright';
import Link from 'next/link'

const FourZeroFour = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        bannerHeading='404 Error Page'
        parentTitle='Pages'
        pageTitle='404'
        bg='inner-bg9'
      />
      <div className='error-area ptb-100'>
        <div className='d-table'>
          <div className='d-table-cell'>
            <div className='error-content'>
              <h1>
                4 <span>0</span> 4
              </h1>
              <h3>Oops! Page Not Found</h3>
              <p>
                The page you are looking for might have been removed had its
                name changed or is temporarily unavailable.
              </p>
              <Link href='/'>
                <a className='default-btn'>
                  Return To Home Page
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Copyright />
    </>
  );
};

export default FourZeroFour;
