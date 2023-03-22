import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AuctionArea = () => {
  //counter calculation
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const comingSoonTime = () => {
    let endTime = new Date('December 23, 2021 17:00:00 PDT');
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
      <div className='auctions-area-three pt-100 pb-70'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-8 col-md-6'>
              <div className='section-title'>
                <h2>Live Auctions</h2>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='auction-btn text-end'>
                <Link href='/auction'>
                  <a className='default-btn border-radius-5'>Explore More</a>
                </Link>
              </div>
            </div>
          </div>

          <div className='row justify-content-center pt-45'>
            <div className='col-lg-4 col-md-6'>
              <div className='auction-card'>
                <div className='auction-card-img'>
                  <Link href='/auction'>
                    <a>
                      <img
                        src='../images/auctions/auctions-style1.jpg'
                        alt='Images'
                      />
                    </a>
                  </Link>
                  <div className='auction-card-user'>
                    <Link href='/author-profile'>
                      <a className='auction-card-user-option'>
                        <img
                          src='../images/auctions/auctions-user1.jpg'
                          alt='Images'
                        />
                        <span>Created by @Adison</span>
                      </a>
                    </Link>
                  </div>
                  <div className='auction-card-into'>
                    <h3>Remaining Time</h3>
                    <div className='auction-timer'>
                      <div
                        className='auction-title'
                        data-countdown='2021/10/10'
                      >
                        {days}:{hours}:{minutes}:{seconds}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='content'>
                  <h3>
                    <Link href='/auction'>
                      <a>To Infinity And Beyond</a>
                    </Link>
                  </h3>
                  <p>
                    <i className='ri-heart-line'></i> 142
                  </p>
                  <div className='auction-card-content'>
                    <div className='card-left'>
                      <span>Start Bid</span>
                      <h4>15,00 ETH</h4>
                    </div>
                    <div className='card-right'>
                      <span>Highest Bid</span>
                      <h4>15,00 ETH</h4>
                    </div>
                  </div>
                  <Link href='/auction'>
                    <a className='place-btn'>Place Bid</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='auction-card'>
                <div className='auction-card-img'>
                  <Link href='/auction'>
                    <a>
                      <img
                        src='../images/auctions/auctions-style2.jpg'
                        alt='Images'
                      />
                    </a>
                  </Link>
                  <div className='auction-card-user'>
                    <Link href='/author-profile'>
                      <a className='auction-card-user-option'>
                        <img
                          src='../images/auctions/auctions-user2.jpg'
                          alt='Images'
                        />
                        <span>Created by @Emilia</span>
                      </a>
                    </Link>
                  </div>
                  <div className='auction-card-into'>
                    <h3>Remaining Time</h3>
                    <div className='auction-timer'>
                      <div
                        className='auction-title'
                        data-countdown='2021/10/10'
                      >
                        {days}:{hours}:{minutes}:{seconds}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='content'>
                  <h3>
                    <Link href='/auction'>
                      <a>Walking On Air</a>
                    </Link>
                  </h3>
                  <p>
                    <i className='ri-heart-line'></i> 162
                  </p>
                  <div className='auction-card-content'>
                    <div className='card-left'>
                      <span>Start Bid</span>
                      <h4>16,00 ETH</h4>
                    </div>
                    <div className='card-right'>
                      <span>Highest Bid</span>
                      <h4>12,00 ETH</h4>
                    </div>
                  </div>
                  <Link href='/auction'>
                    <a className='place-btn'>Place Bid</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='auction-card'>
                <div className='auction-card-img'>
                  <Link href='/auction'>
                    <a>
                      <img
                        src='../images/auctions/auctions-style3.jpg'
                        alt='Images'
                      />
                    </a>
                  </Link>
                  <div className='auction-card-user'>
                    <Link href='/auction'>
                      <a className='auction-card-user-option'>
                        <img
                          src='../images/auctions/auctions-user3.jpg'
                          alt='Images'
                        />
                        <span>Created by @Daniel</span>
                      </a>
                    </Link>
                  </div>
                  <div className='auction-card-into'>
                    <h3>Remaining Time</h3>
                    <div className='auction-timer'>
                      <div
                        className='auction-title'
                        data-countdown='2021/10/10'
                      >
                        {days}:{hours}:{minutes}:{seconds}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='content'>
                  <h3>
                    <Link href='/auction'>
                      <a>Industrial Revolution</a>
                    </Link>
                  </h3>
                  <p>
                    <i className='ri-heart-line'></i> 142
                  </p>
                  <div className='auction-card-content'>
                    <div className='card-left'>
                      <span>Start Bid</span>
                      <h4>14,00 ETH</h4>
                    </div>
                    <div className='card-right'>
                      <span>Highest Bid</span>
                      <h4>11,00 ETH</h4>
                    </div>
                  </div>
                  <Link href='/auction'>
                    <a className='place-btn'>Place Bid</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='auction-card'>
                <div className='auction-card-img'>
                  <Link href='/auction'>
                    <a>
                      <img
                        src='../images/auctions/auctions-style4.jpg'
                        alt='Images'
                      />
                    </a>
                  </Link>
                  <div className='auction-card-user'>
                    <Link href='/author-profile'>
                      <a className='auction-card-user-option'>
                        <img
                          src='../images/auctions/auctions-user4.jpg'
                          alt='Images'
                        />
                        <span>Created by @Jekob</span>
                      </a>
                    </Link>
                  </div>
                  <div className='auction-card-into'>
                    <h3>Remaining Time</h3>
                    <div className='auction-timer'>
                      <div
                        className='auction-title'
                        data-countdown='2021/10/10'
                      >
                        {days}:{hours}:{minutes}:{seconds}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='content'>
                  <h3>
                    <Link href='/auction'>
                      <a>Become On Nature</a>
                    </Link>
                  </h3>
                  <p>
                    <i className='ri-heart-line'></i> 142
                  </p>
                  <div className='auction-card-content'>
                    <div className='card-left'>
                      <span>Start Bid</span>
                      <h4>17,00 ETH</h4>
                    </div>
                    <div className='card-right'>
                      <span>Highest Bid</span>
                      <h4>13,00 ETH</h4>
                    </div>
                  </div>
                  <Link href='/auction'>
                    <a className='place-btn'>Place Bid</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='auction-card'>
                <div className='auction-card-img'>
                  <Link href='/auction'>
                    <a>
                      <img
                        src='../images/auctions/auctions-style5.jpg'
                        alt='Images'
                      />
                    </a>
                  </Link>
                  <div className='auction-card-user'>
                    <Link href='/author-profile'>
                      <a className='auction-card-user-option'>
                        <img
                          src='../images/auctions/auctions-user5.jpg'
                          alt='Images'
                        />
                        <span>Created by @Emilia</span>
                      </a>
                    </Link>
                  </div>
                  <div className='auction-card-into'>
                    <h3>Remaining Time</h3>
                    <div className='auction-timer'>
                      <div
                        className='auction-title'
                        data-countdown='2021/11/11'
                      >
                        {days}:{hours}:{minutes}:{seconds}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='content'>
                  <h3>
                    <Link href='/auction'>
                      <a>Flowers In Concrete</a>
                    </Link>
                  </h3>
                  <p>
                    <i className='ri-heart-line'></i> 172
                  </p>
                  <div className='auction-card-content'>
                    <div className='card-left'>
                      <span>Start Bid</span>
                      <h4>16,00 ETH</h4>
                    </div>
                    <div className='card-right'>
                      <span>Highest Bid</span>
                      <h4>12,00 ETH</h4>
                    </div>
                  </div>
                  <Link href='/auction'>
                    <a className='place-btn'>Place Bid</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='auction-card'>
                <div className='auction-card-img'>
                  <Link href='/auction'>
                    <a>
                      <img
                        src='../images/auctions/auctions-style6.jpg'
                        alt='Images'
                      />
                    </a>
                  </Link>
                  <div className='auction-card-user'>
                    <Link href='/author-profile'>
                      <a className='auction-card-user-option'>
                        <img
                          src='../images/auctions/auctions-user6.jpg'
                          alt='Images'
                        />
                        <span>Created by @Jekob</span>
                      </a>
                    </Link>
                  </div>
                  <div className='auction-card-into'>
                    <h3>Remaining Time</h3>
                    <div className='auction-timer'>
                      <div
                        className='auction-title'
                        data-countdown='2021/10/10'
                      >
                        {days}:{hours}:{minutes}:{seconds}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='content'>
                  <h3>
                    <Link href='/auction'>
                      <a>Darklight Angel</a>
                    </Link>
                  </h3>
                  <p>
                    <i className='ri-heart-line'></i> 182
                  </p>
                  <div className='auction-card-content'>
                    <div className='card-left'>
                      <span>Start Bid</span>
                      <h4>14,00 ETH</h4>
                    </div>
                    <div className='card-right'>
                      <span>Highest Bid</span>
                      <h4>11,00 ETH</h4>
                    </div>
                  </div>
                  <Link href='/auction'>
                    <a className='place-btn'>Place Bid</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuctionArea;
