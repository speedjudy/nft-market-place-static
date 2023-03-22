import React from 'react';
import Pagination from '../Common/Pagination';
import Link from 'next/link'

const AuthorArea = () => {
  return (
    <>
      <div className='author-widget-bg author-area-bg pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>Top Author</h2>
          </div>

          <div className='row pt-45 justify-content-center'>
            <div className='col-lg-3 col-6'>
              <div className='author-card box-shadow'>
                <Link href='/author-profile'>
                  <a>
                    <img src='../images/author/author-img6.jpg' alt='Images' />
                  </a>
                </Link>
                <div className='content'>
                  <div className='author-user'>
                    <img src='../images/author/author-user1.jpg' alt='Images' />
                    <i className='ri-check-line'></i>
                  </div>

                  <h3>
                    <Link href='/author-profile'>
                      <a>Olivia Jenar</a>
                    </Link>
                  </h3>
                  <span>@Jenar</span>

                  <div className='author-content'>
                    <div className='content-left'>
                      <span>Followers</span>
                      <h4>2941</h4>
                    </div>

                    <div className='content-right'>
                      Follow
                      <ul className='author-social'>
                        <li>
                          <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                            <i className='ri-facebook-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                            <i className='ri-instagram-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://twitter.com/' target='_blank' rel="noreferrer">
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
              <div className='author-card box-shadow'>
                <Link href='/author-profile'>
                  <a>
                    <img src='../images/author/author-img7.jpg' alt='Images' />
                  </a>
                </Link>
                <div className='content'>
                  <div className='author-user'>
                    <img src='../images/author/author-user2.jpg' alt='Images' />
                    <i className='ri-check-line'></i>
                  </div>

                  <h3>
                    <Link href='/author-profile'>
                      <a>James Parker</a>
                    </Link>
                  </h3>
                  <span>@Parker</span>

                  <div className='author-content'>
                    <div className='content-left'>
                      <span>Followers</span>
                      <h4>2945</h4>
                    </div>

                    <div className='content-right'>
                      Follow
                      <ul className='author-social'>
                        <li>
                          <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                            <i className='ri-facebook-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                            <i className='ri-instagram-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://twitter.com/' target='_blank' rel="noreferrer">
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
              <div className='author-card box-shadow'>
                <Link href='/author-profile'>
                  <a>
                    <img src='../images/author/author-img8.jpg' alt='Images' />
                  </a>
                </Link>
                <div className='content'>
                  <div className='author-user'>
                    <img src='../images/author/author-user3.jpg' alt='Images' />
                    <i className='ri-check-line'></i>
                  </div>

                  <h3>
                    <Link href='/author-profile'>
                      <a>Lucas Adison</a>
                    </Link>
                  </h3>
                  <span>@Adison</span>

                  <div className='author-content'>
                    <div className='content-left'>
                      <span>Followers</span>
                      <h4>4205</h4>
                    </div>

                    <div className='content-right'>
                      Follow
                      <ul className='author-social'>
                        <li>
                          <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                            <i className='ri-facebook-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                            <i className='ri-instagram-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://twitter.com/' target='_blank' rel="noreferrer">
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
              <div className='author-card box-shadow'>
                <Link href='/author-profile'>
                  <a>
                    <img src='../images/author/author-img12.jpg' alt='Images' />
                  </a>
                </Link>
                <div className='content'>
                  <div className='author-user'>
                    <img src='../images/author/author-user4.jpg' alt='Images' />
                    <i className='ri-check-line'></i>
                  </div>

                  <h3>
                    <Link href='/author-profile'>
                      <a>Amelia Rosia</a>
                    </Link>
                  </h3>
                  <span>@Rosia</span>

                  <div className='author-content'>
                    <div className='content-left'>
                      <span>Followers</span>
                      <h4>2306</h4>
                    </div>

                    <div className='content-right'>
                      Follow
                      <ul className='author-social'>
                        <li>
                          <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                            <i className='ri-facebook-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                            <i className='ri-instagram-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://twitter.com/' target='_blank' rel="noreferrer">
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
              <div className='author-card box-shadow'>
                <Link Link href='/author-profile'>
                  <a>
                    <img src='../images/author/author-img1.jpg' alt='Images' />
                  </a>
                </Link>
                <div className='content'>
                  <div className='author-user'>
                    <img src='../images/author/author-user5.jpg' alt='Images' />
                    <i className='ri-check-line'></i>
                  </div>

                  <h3>
                    <Link href='/author-profile'>
                      <a>Barb E. Dahl</a>
                    </Link>
                  </h3>
                  <span>@Dahl</span>

                  <div className='author-content'>
                    <div className='content-left'>
                      <span>Followers</span>
                      <h4>2106</h4>
                    </div>

                    <div className='content-right'>
                      Follow
                      <ul className='author-social'>
                        <li>
                          <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                            <i className='ri-facebook-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                            <i className='ri-instagram-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://twitter.com/' target='_blank' rel="noreferrer">
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
              <div className='author-card box-shadow'>
                <Link href='/author-profile'>
                  <a>
                    <img src='../images/author/author-img2.jpg' alt='Images' />
                  </a>
                </Link>
                <div className='content'>
                  <div className='author-user'>
                    <img src='../images/author/author-user6.jpg' alt='Images' />
                    <i className='ri-check-line'></i>
                  </div>

                  <h3>
                    <Link href='/author-profile'>
                      <a>Biff Wellington</a>
                    </Link>
                  </h3>
                  <span>@Biff</span>

                  <div className='author-content'>
                    <div className='content-left'>
                      <span>Followers</span>
                      <h4>2206</h4>
                    </div>

                    <div className='content-right'>
                      Follow
                      <ul className='author-social'>
                        <li>
                          <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                            <i className='ri-facebook-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                            <i className='ri-instagram-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://twitter.com/' target='_blank' rel="noreferrer">
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
              <div className='author-card box-shadow'>
               <Link href='/author-profile'>
                  <a>
                    <img src='../images/author/author-img3.jpg' alt='Images' />
                  </a>
                </Link>
                <div className='content'>
                  <div className='author-user'>
                    <img src='../images/author/author-user7.jpg' alt='Images' />
                    <i className='ri-check-line'></i>
                  </div>

                  <h3>
                    <Link href='/author-profile'>
                      <a>Adam Zapel</a>
                    </Link>
                  </h3>
                  <span>@Adam</span>

                  <div className='author-content'>
                    <div className='content-left'>
                      <span>Followers</span>
                      <h4>2706</h4>
                    </div>

                    <div className='content-right'>
                      Follow
                      <ul className='author-social'>
                        <li>
                          <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                            <i className='ri-facebook-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                            <i className='ri-instagram-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://twitter.com/' target='_blank' rel="noreferrer">
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
              <div className='author-card box-shadow'>
                <Link href='/author-profile'>
                  <a>
                    <img src='../images/author/author-img4.jpg' alt='Images' />
                  </a>
                </Link>
                <div className='content'>
                  <div className='author-user'>
                    <img src='../images/author/author-user8.jpg' alt='Images' />
                    <i className='ri-check-line'></i>
                  </div>

                  <h3>
                    <Link href='/author-profile'>
                      <a>Orson Carte</a>
                    </Link>
                  </h3>
                  <span>@Orson</span>

                  <div className='author-content'>
                    <div className='content-left'>
                      <span>Followers</span>
                      <h4>2406</h4>
                    </div>

                    <div className='content-right'>
                      Follow
                      <ul className='author-social'>
                        <li>
                          <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                            <i className='ri-facebook-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                            <i className='ri-instagram-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://twitter.com/' target='_blank' rel="noreferrer">
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
              <div className='author-card box-shadow'>
                <Link Link href='/author-profile'>
                  <a>
                    <img src='../images/author/author-img5.jpg' alt='Images' />
                  </a>
                </Link>
                <div className='content'>
                  <div className='author-user'>
                    <img src='../images/author/author-user8.jpg' alt='Images' />
                    <i className='ri-check-line'></i>
                  </div>

                  <h3>
                    <Link href='/author-profile'>
                      <a>Ray Gunn</a>
                    </Link>
                  </h3>
                  <span>@Ray</span>

                  <div className='author-content'>
                    <div className='content-left'>
                      <span>Followers</span>
                      <h4>2106</h4>
                    </div>

                    <div className='content-right'>
                      Follow
                      <ul className='author-social'>
                        <li>
                          <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                            <i className='ri-facebook-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                            <i className='ri-instagram-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://twitter.com/' target='_blank' rel="noreferrer">
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
              <div className='author-card box-shadow'>
                <Link href='/author-profile'>
                  <a>
                    <img src='../images/author/author-img9.jpg' alt='Images' />
                  </a>
                </Link>
                <div className='content'>
                  <div className='author-user'>
                    <img src='../images/author/author-user9.jpg' alt='Images' />
                    <i className='ri-check-line'></i>
                  </div>

                  <h3>
                    <Link href='/author-profile'>
                      <a>Thomas Jon</a>
                    </Link>
                  </h3>
                  <span>@Thomas</span>

                  <div className='author-content'>
                    <div className='content-left'>
                      <span>Followers</span>
                      <h4>2106</h4>
                    </div>

                    <div className='content-right'>
                      Follow
                      <ul className='author-social'>
                        <li>
                          <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                            <i className='ri-facebook-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                            <i className='ri-instagram-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://twitter.com/' target='_blank' rel="noreferrer">
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
              <div className='author-card box-shadow'>
                <Link href='/author-profile'>
                  <a>
                    <img src='../images/author/author-img11.jpg' alt='Images' />
                  </a>
                </Link>
                <div className='content'>
                  <div className='author-user'>
                    <img
                      src='../images/author/author-user10.jpg'
                      alt='Images'
                    />
                    <i className='ri-check-line'></i>
                  </div>

                  <h3>
                    <Link href='/author-profile'>
                      <a>Radil Hence</a>
                    </Link>
                  </h3>
                  <span>@Hence</span>

                  <div className='author-content'>
                    <div className='content-left'>
                      <span>Followers</span>
                      <h4>2006</h4>
                    </div>

                    <div className='content-right'>
                      Follow
                      <ul className='author-social'>
                        <li>
                          <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                            <i className='ri-facebook-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                            <i className='ri-instagram-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://twitter.com/' target='_blank' rel="noreferrer">
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
              <div className='author-card box-shadow'>
                <Link href='/author-profile'>
                  <a>
                    <img src='../images/author/author-img12.jpg' alt='Images' />
                  </a>
                </Link>
                <div className='content'>
                  <div className='author-user'>
                    <img
                      src='../images/author/author-user11.jpg'
                      alt='Images'
                    />
                    <i className='ri-check-line'></i>
                  </div>

                  <h3>
                  <Link href='/author-profile'>
                    <a>Anvi Jordan</a>
                  </Link>
                  </h3>
                  <span>@Jordan</span>

                  <div className='author-content'>
                    <div className='content-left'>
                      <span>Followers</span>
                      <h4>2206</h4>
                    </div>

                    <div className='content-right'>
                      Follow
                      <ul className='author-social'>
                        <li>
                          <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                            <i className='ri-facebook-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                            <i className='ri-instagram-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://twitter.com/' target='_blank' rel="noreferrer">
                            <i className='ri-twitter-fill'></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthorArea;
