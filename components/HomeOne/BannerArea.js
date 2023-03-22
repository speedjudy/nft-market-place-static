import { useState, useEffect } from 'react';
import Link from 'next/link';

const BannerArea = () => {
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
      <div className='banner-area'>
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='banner-content'>
                <span>Buying & Selling NFT World</span>
                <h1>Discover, Collect, and Sell Extraordinary NFTs</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  aliquam etiam rhoncus aenean a iaculis aliquet rhoncus sed.
                  Accumsan sit consequat, sodales consectetur. Egestas
                  scelerisque ut dui sed nulla morbi quam eget luctus. In a vel
                  morbi sed nisi.
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
              <div className='banner-card-area'>
                <div className='row'>
                  <div className='col-lg-6 col-sm-6'>
                    <div className='banner-card'>
                      <div className='banner-card-img'>
                        <img
                          src='../images/home-one/home-one-img1.jpg'
                          alt='Images'
                        />
                        <div className='banner-card-content'>
                          <div className='card-left'>
                            <span>Start Bid</span>
                            <h3>15,00 ETH</h3>
                          </div>
                          <div className='card-right'>
                            <h3>Remaining Time</h3>
                            <div
                              className='timer-text'
                              data-countdown='2021/10/10'
                            >
                              {days}:{hours}:{minutes}:{seconds}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='content'>
                        <div className='banner-user-list'>
                          <div className='banner-user-list-img'>
                            <Link href='/author-profile'>
                              <a>
                                <img
                                  src='../images/home-one/home-one-user1.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <i className='ri-check-line'></i>
                          </div>
                          <h3>
                            <Link href='/author-profile'>
                              <a>Flowers in Concrete</a>
                            </Link>
                          </h3>
                          <span>
                            Created by
                            <Link href='/author-profile'>
                              <a>@Evelyn</a>
                            </Link>
                          </span>
                        </div>
                        <Link href='/author-profile'>
                          <a className='banner-user-btn'>
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
                  </div>

                  <div className='col-lg-6 col-sm-6'>
                    <div className='banner-card banner-card-mt'>
                      <div className='banner-card-img'>
                        <img
                          src='../images/home-one/home-one-img2.jpg'
                          alt='Images'
                        />
                        <div className='banner-card-content'>
                          <div className='card-left'>
                            <span>Start Bid</span>
                            <h3>11,00 ETH</h3>
                          </div>
                          <div className='card-right'>
                            <h3>Remaining Time</h3>
                            <div
                              className='timer-text'
                              data-countdown='2021/09/09'
                            >
                              {days}:{hours}:{minutes}:{seconds}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='content'>
                        <div className='banner-user-list'>
                          <div className='banner-user-list-img'>
                            <Link href='/author-profile'>
                              <a>
                                <img
                                  src='../images/home-one/home-one-user2.jpg'
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
                              <a>@Adison</a>
                            </Link>
                          </span>
                        </div>
                        <Link href='/author-profile'>
                          <a className='banner-user-btn'>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='banner-shape'>
          <div className='shape-circle1'>
            <img src='../images/home-one/circle1.png' alt='Images' />
          </div>

          <div className='shape-circle2'>
            <img src='../images/home-one/circle2.png' alt='Images' />
          </div>

          <div className='shape-bg'>
            <img src='../images/home-one/bg-shape.png' alt='Images' />
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerArea;
