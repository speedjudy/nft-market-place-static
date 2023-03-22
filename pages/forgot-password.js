import NavbarTwo from '../components/Layout/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import Copyright from '../components/Common/Copyright';

const ForgotPassword = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        bannerHeading='Forgot Password'
        parentTitle='Discover'
        pageTitle='Forgot Password'
        bg='inner-bg5'
      />

      <div className='user-area pt-100 pb-70'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-12'>
              <div className='user-all-form'>
                <div className='contact-form'>
                  <h3>Forget Password</h3>
                  <div className='bar'></div>
                  <form id='contactForm'>
                    <div className='row'>
                      <div className='col-lg-12 '>
                        <div className='form-group'>
                          <label>Username or Email</label>
                          <input
                            type='text'
                            name='name'
                            id='name'
                            className='form-control'
                            required
                            data-error='Please enter your Username or Email'
                          />
                        </div>
                      </div>

                      <div className='col-lg-12 col-md-12 text-center'>
                        <button type='submit' className='default-btn'>
                          Reset Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
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

export default ForgotPassword;
