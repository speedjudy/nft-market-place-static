import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  margin: 0,
  nav: false,
  mouseDrag: false,
  dots: false,
  autoplay: true,
  smartSpeed: 500,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
};

const BannerArea = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
  }, []);

  //counter calculation
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const comingSoonTime = () => {
    let endTime = new Date('August 23, 2022 17:00:00 PDT');
    let endTimeParse = Date.parse(endTime) / 1000;
    let now = new Date();
    let nowParse = Date.parse(now) / 1000;
    let timeLeft = endTimeParse - nowParse;
    let countdays = Math.floor(timeLeft / 86400);
    let counthours = Math.floor((timeLeft - countdays * 86400) / 3600);
    let countminutes = Math.floor(
      (timeLeft - countdays * 86400 - counthours * 3600) / 60
    );
    let countseconds = Math.floor(
      timeLeft - countdays * 86400 - counthours * 3600 - countminutes * 60
    );
    if (counthours < '10') {
      counthours = '0' + counthours;
    }
    if (countminutes < '10') {
      countminutes = '0' + countminutes;
    }
    if (countseconds < '10') {
      countseconds = '0' + countseconds;
    }

    setDays(countdays);
    setHours(counthours);
    setMinutes(countminutes);
    setSeconds(countseconds);
  };

  useEffect(() => {
    setInterval(() => {
      comingSoonTime();
    }, 1000);
  }, []);


  return (
    <>
      <div className='banner-area-two'>
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='banner-content-two'>
                <h1>Collect NFTs From Our Creative & Rare Digital Artwork</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  aliquam etiam rhoncus aenean a iaculis aliquet accumsan
                  sodales consectetur.
                </p>
                <div className='banner-btn'>
                  <Link href='/about'>
                    <a className='default-btn border-radius-5'>Explore More</a>
                  </Link>
                  <Link href='/add-wallet'>
                    <a className='default-btn two border-radius-5'>
                      Connect NFT
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='banner-item-slider owl-theme'>
                {display ? (
                  <OwlCarousel {...options}>
                    <div className='banner-item'>
                      <div className='banner-item-img'>
                        <img
                          src='../images/home-two/home-two-img1.jpg'
                          alt='Images'
                        />
                        <div className='banner-item-user'>
                          <Link href='/author-profile'>
                            <a className='banner-item-user-option'>
                              <img
                                src='../images/home-two/home-two-user1.jpg'
                                alt='Images'
                              />
                              <span>Created by @Farnil</span>
                            </a>
                          </Link>
                        </div>
                      </div>

                      <div className='content'>
                        <h3>Walking On Air</h3>
                        <p>
                          <i className='ri-heart-line'></i> 142
                        </p>
                        <div className='banner-item-content'>
                          <div className='item-left'>
                            <span>Start Bid</span>
                            <h3 className='item-left-eth'>15,00 ETH</h3>
                          </div>
                          <div className='item-right'>
                            <h3 className='item-remaining'>Remaining Time</h3>
                            <div
                              className='timer-text'
                              data-countdown='2021/11/11'
                            >
                              {days}:{hours}:{minutes}:{seconds}
                            </div>
                          </div>
                        </div>
                        <Link href='/author-profile'>
                          <a className='place-btn'>Place Bid</a>
                        </Link>
                      </div>
                    </div>

                    <div className='banner-item'>
                      <div className='banner-item-img'>
                        <img
                          src='../images/home-two/home-two-img2.jpg'
                          alt='Images'
                        />
                        <div className='banner-item-user'>
                          <Link href='/author-profile'>
                            <a className='banner-item-user-option'>
                              <img
                                src='../images/home-two/home-two-user2.jpg'
                                alt='Images'
                              />
                              <span>Created by @Adison</span>
                            </a>
                          </Link>
                        </div>
                      </div>

                      <div className='content'>
                        <h3>Flowers In Concrete</h3>
                        <p>
                          <i className='ri-heart-line'></i> 162
                        </p>
                        <div className='banner-item-content'>
                          <div className='item-left'>
                            <span>Start Bid</span>
                            <h3 className='item-left-eth'>14,00 ETH</h3>
                          </div>
                          <div className='item-right'>
                            <h3 className='item-remaining'>Remaining Time</h3>
                            <div
                              className='timer-text'
                              data-countdown='2021/11/11'
                            >
                              {days}:{hours}:{minutes}:{seconds}
                            </div>
                          </div>
                        </div>
                        <Link href='/author-profile'>
                          <a className='place-btn'>Place Bid</a>
                        </Link>
                      </div>
                    </div>

                    <div className='banner-item'>
                      <div className='banner-item-img'>
                        <img
                          src='../images/home-two/home-two-img3.jpg'
                          alt='Images'
                        />
                        <div className='banner-item-user'>
                          <Link href='/author-profile'>
                            <a
                              className='banner-item-user-option'
                            >
                              <img
                                src='../images/home-two/home-two-user3.jpg'
                                alt='Images'
                              />
                              <span>Created by @Samuel</span>
                            </a>
                          </Link>
                        </div>
                      </div>

                      <div className='content'>
                        <h3>Les Immortels</h3>
                        <p>
                          <i className='ri-heart-line'></i> 182
                        </p>
                        <div className='banner-item-content'>
                          <div className='item-left'>
                            <span>Start Bid</span>
                            <h3 className='item-left-eth'>16,00 ETH</h3>
                          </div>
                          <div className='item-right'>
                            <h3 className='item-remaining'>Remaining Time</h3>
                            <div
                              className='timer-text'
                              data-countdown='2021/11/11'
                            >
                              {days}:{hours}:{minutes}:{seconds}
                            </div>
                          </div>
                        </div>
                        <Link href='/author-profile'>
                          <a className='place-btn'>Place Bid</a>
                        </Link>
                      </div>
                    </div>
                  </OwlCarousel>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>

        <div className='banner-shape'>
          <div className='shape-in1'>
            <img src='../images/home-two/home-two-shape1.png' alt='Item' />
          </div>
          <div className='shape-in2'>
            <img src='../images/home-two/home-two-shape2.png' alt='Item' />
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerArea;
