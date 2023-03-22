import React from 'react';
import Link from 'next/link'

const InvolvedArea = () => {
  return (
    <>
      <div className='involved-area-two pt-100 pb-70'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>Get Involved</h2>
          </div>

          <div className='row pt-45'>
            <div className='col-lg-3 col-6'>
              <div className='involved-card'>
                <div className='icon'>
                  <i className='ri-flight-takeoff-line'></i>
                </div>
                <h3>
                  Join Our <b>Community</b>
                </h3>
                <ul className='social-link'>
                  <li>
                    <a href='https://www.google.com/' target='_blank'>
                      <i className='ri-google-fill'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.facebook.com/' target='_blank'>
                      <i className='ri-facebook-fill'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/' target='_blank'>
                      <i className='ri-instagram-fill'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/' target='_blank'>
                      <i className='ri-twitter-fill'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/' target='_blank'>
                      <i className='ri-linkedin-fill'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-6'>
              <div className='involved-card'>
                <div className='icon'>
                  <i className='ri-checkbox-circle-line'></i>
                </div>
                <h3>
                  Become A <b>Creator</b>
                </h3>
                <Link href='/register'>
                  <a className='default-btn'>
                    Register
                  </a>
                </Link>
              </div>
            </div>

            <div className='col-lg-3 col-6'>
              <div className='involved-card'>
                <div className='icon'>
                  <i className='ri-heart-2-line'></i>
                </div>
                <h3>
                  Become A <b>Charity Partner</b>
                </h3>
                <Link href='/create-collection'>
                  <a className='default-btn'>
                    Express Interest
                  </a>
                </Link>
              </div>
            </div>

            <div className='col-lg-3 col-6'>
              <div className='involved-card'>
                <div className='icon'>
                  <i className='ri-discuss-line'></i>
                </div>
                <h3>
                  Reach Out To <b>Our Team</b>
                </h3>
                <Link href='/contact'>
                  <a className='default-btn'>
                    Contact Now
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvolvedArea;
