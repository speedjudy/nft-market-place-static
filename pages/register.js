import NavbarTwo from '../components/Layout/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import Copyright from '../components/Common/Copyright';

const Register = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        bannerHeading='Register'
        parentTitle='Discover'
        pageTitle='Register'
        bg='inner-bg5'
      />

      <div className='user-area pt-100 pb-70'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-12'>
              <div className='user-all-form'>
                <div className='contact-form'>
                  <h3> Create Account </h3>
                  <div className='bar'></div>
                  <form id='contactForm'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='form-group'>
                          <label>Your Name</label>
                          <input
                            type='text'
                            className='form-control'
                            required
                            data-error='Please Enter Your Name'
                          />
                        </div>
                      </div>

                      <div className='col-lg-12 '>
                        <div className='form-group'>
                          <label>Email</label>
                          <input
                            type='email'
                            className='form-control'
                            required
                            data-error='Please enter Email'
                          />
                        </div>
                      </div>

                      <div className='col-12'>
                        <div className='form-group'>
                          <label>Password</label>
                          <input
                            className='form-control'
                            type='password'
                            name='password'
                          />
                        </div>
                      </div>

                      <div className='col-lg-12 col-md-12 text-center'>
                        <button type='submit' className='default-btn'>
                          Register Now
                        </button>
                      </div>

                      <div className='col-12'>
                        <div className='sub-title'>
                          <span>Or</span>
                        </div>
                      </div>

                      <div className='login-with-account'>
                        <ul>
                          <li>
                            <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                              <i className='ri-facebook-line'></i>
                              Login with Facebook
                            </a>
                          </li>

                          <li>
                            <a href='https://www.google.com/' target='_blank' rel="noreferrer">
                              <i className='ri-google-line'></i>
                              Login with Google
                            </a>
                          </li>
                        </ul>
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

export default Register;
