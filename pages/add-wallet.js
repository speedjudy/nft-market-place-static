import NavbarTwo from '../components/Layout/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import Copyright from '../components/Common/Copyright';
import Link from 'next/link'

const AddWallet = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        bannerHeading='Connect Your Wallet'
        parentTitle='Community'
        pageTitle='Add Wallet'
        bg='inner-bg5'
      />
      <div className='wallet-area pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>Connect Your wallet</h2>
            <p>
              Connect with one of available wallet providers or create a new
              wallet. <Link href='/help-center'><a>What is a wallet?</a></Link>{' '}
            </p>
          </div>

          <div className='row pt-45'>
            <div className='col-lg-4 col-6'>
              <div className='wallet-card'>
                <img src='../images/wallet-img/wallet-img1.png' alt='Images' />
                <h3>
                  <Link href='/contact'>
                    <a>Torsol</a>
                  </Link>
                </h3>
                <p>
                  Connect with your google, facebook, twitter or discord all
                  social media
                </p>
                <div className='top-btn'>Simple</div>
              </div>
            </div>

            <div className='col-lg-4 col-6'>
              <div className='wallet-card'>
                <img src='../images/wallet-img/wallet-img2.png' alt='Images' />
                <h3>
                  <Link href='/contact'>
                    <a>Portol</a>
                  </Link>
                </h3>
                <p>
                  Connect with your google, facebook, twitter or discord all
                  social media
                </p>
                <div className='top-btn'>Credit Card Follow</div>
              </div>
            </div>

            <div className='col-lg-4 col-6'>
              <div className='wallet-card'>
                <img src='../images/wallet-img/wallet-img3.png' alt='Images' />
                <h3>
                    <Link Link href='/contact'>
                      <a>Niktin</a>
                    </Link>
                </h3>
                <p>
                  Connect with your google, facebook, twitter or discord all
                  social media
                </p>
                <div className='top-btn'>Simple</div>
              </div>
            </div>

            <div className='col-lg-4 col-6'>
              <div className='wallet-card'>
                <img src='../images/wallet-img/wallet-img4.png' alt='Images' />
                <h3>
                  <Link href='/contact'>
                    <a>Jenmar</a>
                  </Link>
                </h3>
                <p>
                  Connect with your google, facebook, twitter or discord all
                  social media
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-6'>
              <div className='wallet-card'>
                <img src='../images/wallet-img/wallet-img5.png' alt='Images' />
                <h3>
                  <Link href='/contact'>
                    <a>Denky</a>
                  </Link>
                </h3>
                <p>
                  Connect with your google, facebook, twitter or discord all
                  social media
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-6'>
              <div className='wallet-card'>
                <img src='../images/wallet-img/wallet-img6.png' alt='Images' />
                <h3>
                  <Link href='/contact'>
                    <a>Gible</a>
                  </Link>
                </h3>
                <p>
                  Connect with your google, facebook, twitter or discord all
                  social media
                </p>
              </div>
            </div>

            <div className='col-lg-12'>
              <div className='wallet-text'>
                <p>
                  We do not own your private keys and cannot access your funds
                  without your confirmation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
      <Copyright />
    </>
  );
};

export default AddWallet;
