import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  margin: 0,
  nav: true,
  mouseDrag: false,
  dots: false,
  autoplay: true,
  smartSpeed: 500,
  navText: [
    "<i class='ri-arrow-left-s-line'></i>",
    "<i class='ri-arrow-right-s-line'></i>",
  ],

  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};

const TrendingArea = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
  }, []);
  return (
    <>
      <div className='trending-area trending-area-bg pt-100 pb-70'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-6'>
              <div className='section-title'>
                <h2>Trending Artwork</h2>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='trending-btn text-end'>
                <Link href='/item-details'>
                  <a
                    className='default-btn border-radius-5'
                  >
                    Explore More
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className='trending-slider pt-45'>
            {display ? (
              <OwlCarousel {...options}>
                <div className='trending-card'>
                  <div className='trending-card-img'>
                    <Link href='/item-details'>
                      <a>
                        <img
                          src='../images/trending/trending-style1.jpg'
                          alt='Images'
                        />
                      </a>
                    </Link>
                    <span>
                      <i className='ri-heart-line'></i> 340
                    </span>
                    <button
                      type='button'
                      className='default-btn border-radius-5'
                    >
                      Place Bid
                    </button>
                  </div>

                  <div className='content'>
                    <h3>
                      <Link href='/item-details'>
                        <a>Les Immortal's</a>
                      </Link>
                    </h3>
                    <Link href='/author-profile'>
                      <a className='trending-user-option'>
                        <img
                          src='../images/trending/trending-user1.jpg'
                          alt='Images'
                        />
                        <i className='ri-check-line'></i>
                        <span>Created by @Farnil</span>
                      </a>
                    </Link>
                    <div className='trending-title'>
                      <span>100 ETH 12/14</span>
                      <h4>Bid 80 ETH</h4>
                    </div>
                  </div>
                </div>

                <div className='trending-card'>
                  <div className='trending-card-img'>
                    <Link href='/item-details'>
                      <a>
                        <img
                          src='../images/trending/trending-style2.jpg'
                          alt='Images'
                        />
                      </a>
                    </Link>
                    <span>
                      <i className='ri-heart-line'></i> 240
                    </span>
                    <button
                      type='button'
                      className='default-btn border-radius-5'
                    >
                      Place Bid
                    </button>
                  </div>

                  <div className='content'>
                    <h3>
                      <Link href='/item-details'>
                        <a>Industrial Revolution</a>
                      </Link>
                    </h3>
                    <Link href='/author-profile'>
                      <a className='trending-user-option'>
                        <img
                          src='../images/trending/trending-user2.jpg'
                          alt='Images'
                        />
                        <i className='ri-check-line'></i>
                        <span>Created by @Anvi</span>
                      </a>
                    </Link>

                    <div className='trending-title'>
                      <span>110 ETH 12/14</span>
                      <h4>Bid 90 ETH</h4>
                    </div>
                  </div>
                </div>

                <div className='trending-card'>
                  <div className='trending-card-img'>
                    <Link href='/item-details'>
                      <a>
                        <img
                          src='../images/trending/trending-style3.jpg'
                          alt='Images'
                        />
                      </a>
                    </Link>
                    <span>
                      <i className='ri-heart-line'></i> 140
                    </span>
                    <button
                      type='button'
                      className='default-btn border-radius-5'
                    >
                      Place Bid
                    </button>
                  </div>

                  <div className='content'>
                    <h3>
                      <Link href='/item-details'>
                        <a>Tranquility (Modal)</a>
                      </Link>
                    </h3>
                    <Link href='/item-details'>
                      <a className='trending-user-option'>
                        <img
                          src='../images/trending/trending-user3.jpg'
                          alt='Images'
                        />
                        <i className='ri-check-line'></i>
                        <span>Created by @Aria</span>
                      </a>
                    </Link>
                    <div className='trending-title'>
                      <span>120 ETH 12/14</span>
                      <h4>Bid 70 ETH</h4>
                    </div>
                  </div>
                </div>

                <div className='trending-card'>
                  <div className='trending-card-img'>
                    <Link href='/item-details'>
                      <a>
                        <img
                          src='../images/trending/trending-style4.jpg'
                          alt='Images'
                        />
                      </a>
                    </Link>
                    <span>
                      <i className='ri-heart-line'></i> 230
                    </span>
                    <button
                      type='button'
                      className='default-btn border-radius-5'
                    >
                      Place Bid
                    </button>
                  </div>

                  <div className='content'>
                    <h3>
                      <Link href='/item-details'>
                        <a>Walking On Air</a>
                      </Link>
                    </h3>
                    <Link href='/author-profile'>
                      <a className='trending-user-option'>
                        <img
                          src='../images/trending/trending-user4.jpg'
                          alt='Images'
                        />
                        <i className='ri-check-line'></i>
                        <span>Created by @Aiden</span>
                      </a>
                    </Link>
                    <div className='trending-title'>
                      <span>100 ETH 12/14</span>
                      <h4>Bid 60 ETH</h4>
                    </div>
                  </div>
                </div>

                <div className='trending-card'>
                  <div className='trending-card-img'>
                    <Link href='/item-details'>
                      <a>
                        <img
                          src='../images/trending/trending-style5.jpg'
                          alt='Images'
                        />
                      </a>
                    </Link>
                    <span>
                      <i className='ri-heart-line'></i> 420
                    </span>
                    <button
                      type='button'
                      className='default-btn border-radius-5'
                    >
                      Place Bid
                    </button>
                  </div>

                  <div className='content'>
                    <h3>
                      <Link href='/item-details'>
                        <a>To Infinity</a>
                      </Link>
                    </h3>
                    <Link href='/author-profile'>
                      <a className='trending-user-option'>
                        <img
                          src='../images/trending/trending-user5.jpg'
                          alt='Images'
                        />
                        <i className='ri-check-line'></i>
                        <span>Created by @Jekob</span>
                      </a>
                    </Link>
                    <div className='trending-title'>
                      <span>140 ETH 12/14</span>
                      <h4>Bid 90 ETH</h4>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingArea;
