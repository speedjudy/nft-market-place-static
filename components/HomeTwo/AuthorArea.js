import Link from 'next/link';

const AuthorArea = () => {
  return (
    <>
      <div className='author-area author-area-bg2 pt-100 pb-70'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-8 col-md-6'>
              <div className='section-title'>
                <h2>Top Author</h2>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='author-btn text-end'>
                <Link href='/authors'>
                  <a className='default-btn border-radius-5'>Explore More</a>
                </Link>
              </div>
            </div>
          </div>

          <div className='row pt-45 justify-content-center'>
            <div className='col-lg-3 col-6'>
              <div className='author-item'>
                <Link href='/author-profile'>
                  <a>
                    <img src='../images/author/author-img5.jpg' alt='Images' />
                  </a>
                </Link>
                <div className='content'>
                  <div className='author-user-list'>
                    <div className='author-user-img'>
                      <img
                        src='../images/author/author-user1.jpg'
                        alt='Images'
                      />
                      <i className='ri-check-line'></i>
                    </div>
                    <div className='author-user-content'>
                      <h3>
                        <Link href='/author-profile'>
                          <a>Olivia Jenar</a>
                        </Link>
                      </h3>
                      <span>@Jenar</span>
                    </div>
                  </div>

                  <div className='author-content'>
                    <div className='content-left'>
                      <span>Followers</span>
                      <h4>2941</h4>
                    </div>

                    <div className='content-right'>
                      Follow
                      <ul className='author-social'>
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-6'>
              <div className='author-item'>
                <Link href='/author-profile'>
                  <a>
                    <img src='../images/author/author-img2.jpg' alt='Images' />
                  </a>
                </Link>
                <div className='content'>
                  <div className='author-user-list'>
                    <div className='author-user-img'>
                      <img
                        src='../images/author/author-user2.jpg'
                        alt='Images'
                      />
                      <i className='ri-check-line'></i>
                    </div>
                    <div className='author-user-content'>
                      <h3>
                        <Link href='/author-profile'>
                          <a>James Parker</a>
                        </Link>
                      </h3>
                      <span>@Parker</span>
                    </div>
                  </div>

                  <div className='author-content'>
                    <div className='content-left'>
                      <span>Followers</span>
                      <h4>2945</h4>
                    </div>

                    <div className='content-right'>
                      Follow
                      <ul className='author-social'>
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-6'>
              <div className='author-item'>
                <Link href='/author-profile'>
                  <a>
                    <img src='../images/author/author-img3.jpg' alt='Images' />
                  </a>
                </Link>
                <div className='content'>
                  <div className='author-user-list'>
                    <div className='author-user-img'>
                      <img
                        src='../images/author/author-user3.jpg'
                        alt='Images'
                      />
                      <i className='ri-check-line'></i>
                    </div>
                    <div className='author-user-content'>
                      <h3>
                        <Link href='/author-profile'>
                          <a>Lucas Adison</a>
                        </Link>
                      </h3>
                      <span>@Adison</span>
                    </div>
                  </div>

                  <div className='author-content'>
                    <div className='content-left'>
                      <span>Followers</span>
                      <h4>4205</h4>
                    </div>

                    <div className='content-right'>
                      Follow
                      <ul className='author-social'>
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-6'>
              <div className='author-item'>
                <Link href='/author-profile'>
                  <a>
                    <img src='../images/author/author-img1.jpg' alt='Images' />
                  </a>
                </Link>
                <div className='content'>
                  <div className='author-user-list'>
                    <div className='author-user-img'>
                      <img
                        src='../images/author/author-user4.jpg'
                        alt='Images'
                      />
                      <i className='ri-check-line'></i>
                    </div>
                    <div className='author-user-content'>
                      <h3>
                        <Link href='/author-profile'>
                          <a>Amelia Rosia</a>
                        </Link>
                      </h3>
                      <span>@Rosia</span>
                    </div>
                  </div>

                  <div className='author-content'>
                    <div className='content-left'>
                      <span>Followers</span>
                      <h4>2306</h4>
                    </div>

                    <div className='content-right'>
                      Follow
                      <ul className='author-social'>
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthorArea;
