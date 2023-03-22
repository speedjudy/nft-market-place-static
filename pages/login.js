import NavbarTwo from '../components/Layout/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import Copyright from '../components/Common/Copyright';
import Link from 'next/link'

const Login = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        bannerHeading='Log In'
        parentTitle='Pages'
        pageTitle='Log In'
        bg='inner-bg4'
      />

      <div className='user-area pt-100 pb-70'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-12'>
              <div className='user-all-form'>
                <div className='contact-form'>
                  <h3> Log In Now</h3>
                  <form id='contactForm'>
                    <div className='row'>
                      <div className='col-lg-12 '>
                        <div className='form-group'>
                          <label>Email</label>
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

                      <div className='col-lg-12 form-condition'>
                        <div className='agree-label'>
                          <input type='checkbox' id='chb1' />
                          <label htmlFor='chb1'>
                            Remember Me
                            <Link href='/forgot-password'>
                              <a className='forget'>
                                Forgot My Password?
                              </a>
                            </Link>
                          </label>
                        </div>
                      </div>

                      <div className='col-lg-12 col-md-12 text-center'>
                        <button type='submit' className='default-btn'>
                          Log In Now
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

export default Login;
