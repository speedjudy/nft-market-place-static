import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import Link from 'next/link';

const options = {
  loop: true,
  margin: 0,
  nav: false,
  mouseDrag: false,
  dots: true,
  autoplay: true,
  smartSpeed: 500,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
};

const AuctionArea = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
  }, []);

  return (
    <>
      <div className='auctions-area pb-100'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-8 col-md-8'>
              <div className='section-title'>
                <h2>Live Auctions</h2>
              </div>
            </div>

            <div className='col-lg-4 col-md-4'>
              <div className='auction-btn text-end'>
                <Link href='/auction'>
                  <a className='default-btn border-radius-5'>
                    Explore More
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className='auctions-slider owl-theme pt-45'>
            {display ? (
              <OwlCarousel {...options}>
                <div className='auction-item'>
                  <div className='auction-item-img'>
                    <Link href='/auction'>
                      <a>
                        <img
                          src='../images/auctions/auctions-img.jpg'
                          alt='Images'
                        />
                      </a>
                    </Link>
                    <div className='auction-item-content'>
                      <div className='auction-left'>
                        <span>Start Bid</span>
                        <h3>15,00 ETH</h3>
                      </div>
                      <div className='auction-right'>
                        <h3>Bid 80 ETH</h3>
                        <div
                          className='auction-text'
                          data-countdown='2021/10/10'
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className='content'>
                    <div className='auction-item-list'>
                      <div className='auction-item-list-img'>
                        <Link href='/author-profile'>
                          <a>
                            <img
                              src='../images/auctions/auctions-user1.jpg'
                              alt='Images'
                            />
                          </a>
                        </Link>
                        <i className='ri-check-line'></i>
                      </div>
                      <h3>
                        <Link href='/author-profile'>
                          <a>Walking on Air</a>
                        </Link>
                      </h3>
                      <span>
                        Created by
                        <Link href='/author-profile'>
                          <a>@Emilia</a>
                        </Link>
                      </span>
                    </div>
                    <Link href='/author-profile'>
                      <a className='auction-item-btn'>
                        <i className='ri-arrow-right-line'></i>
                      </a>
                    </Link>
                    <button
                      type='button'
                      className='default-btn border-radius-5'
                    >
                      Place Bid
                    </button>
                  </div>
                </div>

                <div className='auction-item'>
                  <div className='auction-item-img'>
                    <Link href='/auction'>
                      <a>
                        <img
                          src='../images/auctions/auctions-img2.jpg'
                          alt='Images'
                        />
                      </a>
                    </Link>
                    <div className='auction-item-content'>
                      <div className='auction-left'>
                        <span>Start Bid</span>
                        <h3>14,00 ETH</h3>
                      </div>
                      <div className='auction-right'>
                        <h3>Bid 60 ETH</h3>
                        <div
                          className='auction-text'
                          data-countdown='2021/09/09'
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className='content'>
                    <div className='auction-item-list'>
                      <div className='auction-item-list-img'>
                        <Link href='/author-profile'>
                          <a>
                            <img
                              src='../images/auctions/auctions-user2.jpg'
                              alt='Images'
                            />
                          </a>
                        </Link>
                        <i className='ri-check-line'></i>
                      </div>
                      <h3>
                        <Link href='/author-profile'>
                          <a>To Infinity And Beyond</a>
                        </Link>
                      </h3>
                      <span>
                        Created by
                        <Link href='/author-profile'>
                          <a>@Martina</a>
                        </Link>
                      </span>
                    </div>

                    <Link href='/author-profile'>
                      <a className='auction-item-btn'>
                        <i className='ri-arrow-right-line'></i>
                      </a>
                    </Link>

                    <button
                      type='button'
                      className='default-btn border-radius-5'
                    >
                      Place Bid
                    </button>
                  </div>
                </div>

                <div className='auction-item'>
                  <div className='auction-item-img'>
                    <Link href='/auction'>
                      <a>
                        <img
                          src='../images/auctions/auctions-img3.jpg'
                          alt='Images'
                        />
                      </a>
                    </Link>
                    <div className='auction-item-content'>
                      <div className='auction-left'>
                        <span>Start Bid</span>
                        <h3>16,00 ETH</h3>
                      </div>
                      <div className='auction-right'>
                        <h3>Bid 90 ETH</h3>
                        <div
                          className='auction-text'
                          data-countdown='2021/11/11'
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className='content'>
                    <div className='auction-item-list'>
                      <div className='auction-item-list-img'>
                        <Link href='/author-profile'>
                          <a>
                            <img
                              src='../images/auctions/auctions-user3.jpg'
                              alt='Images'
                            />
                          </a>
                        </Link>
                        <i className='ri-check-line'></i>
                      </div>
                      <h3>
                        <Link href='/author-profile'>
                          <a>Industrial Revolution</a>
                        </Link>
                      </h3>
                      <span>
                        Created by
                        <Link href='/author-profile'>
                          <a>@Julian</a>
                        </Link>
                      </span>
                    </div>
                    <Link href='/author-profile'>
                      <a className='auction-item-btn'>
                        <i className='ri-arrow-right-line'></i>
                      </a>
                    </Link>
                    <button
                      type='button'
                      className='default-btn border-radius-5'
                    >
                      Place Bid
                    </button>
                  </div>
                </div>

                <div className='auction-item'>
                  <div className='auction-item-img'>
                    <Link href='/auction'>
                      <a>
                        <img
                          src='../images/auctions/auctions-img4.jpg'
                          alt='Images'
                        />
                      </a>
                    </Link>

                    <div className='auction-item-content'>
                      <div className='auction-left'>
                        <span>Start Bid</span>
                        <h3>12,00 ETH</h3>
                      </div>
                      <div className='auction-right'>
                        <h3>Bid 180 ETH</h3>
                        <div
                          className='auction-text'
                          data-countdown='2021/09/09'
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className='content'>
                    <div className='auction-item-list'>
                      <div className='auction-item-list-img'>
                        <Link href='/author-profile'>
                          <a>
                            <img
                              src='../images/auctions/auctions-user4.jpg'
                              alt='Images'
                            />
                          </a>
                        </Link>
                        <i className='ri-check-line'></i>
                      </div>
                      <h3>
                        <Link href='/author-profile'>
                          <a>Become on Nature</a>
                        </Link>
                      </h3>
                      <span>
                        Created by
                        <Link href='/author-profile'>
                          <a>@Daniel</a>
                        </Link>
                      </span>
                    </div>
                    <Link href='/author-profile'>
                      <a className='auction-item-btn'>
                        <i className='ri-arrow-right-line'></i>
                      </a>
                    </Link>
                    <button
                      type='button'
                      className='default-btn border-radius-5'
                    >
                      Place Bid
                    </button>
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

export default AuctionArea;
