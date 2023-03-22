import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
const Tabs = dynamic(
  import('react-tabs').then((mod) => mod.Tabs),
  { ssr: false }
);
import { resetIdCounter, Tab, TabList, TabPanel } from 'react-tabs';
import Pagination from './Pagination';
resetIdCounter();

const FeaturedArea = ({ title, pagination }) => {
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
      <div className='featured-area pt-100 pb-70'>
        <div className='container'>
          <div className='tab featured-tab-area'>
            <div className='row align-items-center'>
              <div className='col-lg-6 col-md-4'>
                <div className='section-title'>
                  <h2>{title}</h2>
                </div>
              </div>
            </div>

            <Tabs>
              <div className='col-lg-6 col-md-8'>
                <ul className='tabs'>
                  <TabList>
                    <Tab>
                      <a>All</a>
                    </Tab>
                    <Tab>
                      <a>Art</a>
                    </Tab>

                    <Tab>
                      <a>Virtual Worlds</a>
                    </Tab>
                    <Tab>
                      <a>Collectibles</a>
                    </Tab>
                    <Tab>
                      <a>Music</a>
                    </Tab>
                  </TabList>
                </ul>
              </div>

              <div className='tab_content pt-45'>
                <TabPanel>
                  <div className='tabs_item'>
                    <div className='row justify-content-center'>
                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img1.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a className='featured-user-option'>
                                  <img
                                    src='../images/featured/featured-user1.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Farnil</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                            <div
                              className='featured-item-clock'
                              data-countdown='2021/09/09'
                            >
                              {days}:{hours}:{minutes}:{seconds}
                            </div>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Industrial Revolution</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>100 ETH 12/14</span>
                              <h4>Bid 80 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user1.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user2.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>
                              <p>
                                <i className='ri-heart-line'></i> 122
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img2.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a className='featured-user-option'>
                                  <img
                                    src='../images/featured/featured-user2.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Adison</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                            <div
                              className='featured-item-clock'
                              data-countdown='2021/11/11'
                            >
                              {days}:{hours}:{minutes}:{seconds}
                            </div>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Love In The Air</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>110 ETH 12/14</span>
                              <h4>Bid 70 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user3.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user2.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 112
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img3.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a className='featured-user-option'>
                                  <img
                                    src='../images/featured/featured-user3.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Become One With Nature</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>120 ETH 12/14</span>
                              <h4>Bid 90 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user4.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user5.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 132
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img4.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a className='featured-user-option'>
                                  <img
                                    src='../images/featured/featured-user4.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jack</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                            <div
                              className='featured-item-clock'
                              data-countdown='2021/11/11'
                            >
                              {days}:{hours}:{minutes}:{seconds}
                            </div>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Twilight Fracture City</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>130 ETH 12/14</span>
                              <h4>Bid 80 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user5.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user6.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 142
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/author-profile'>
                              <a>
                                <img
                                  src='../images/featured/featured-img5.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a className='featured-user-option'>
                                  <img
                                    src='../images/featured/featured-user5.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Daniel</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Walking On Air</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>110 ETH 12/14</span>
                              <h4>Bid 90 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user6.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user7.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 112
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/author-profile'>
                              <a>
                                <img
                                  src='../images/featured/featured-img6.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a className='featured-user-option'>
                                  <img
                                    src='../images/featured/featured-user6.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Samuel</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Supper Nuemorphism</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>130 ETH 12/14</span>
                              <h4>Bid 70 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user7.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user8.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 162
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img7.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a className='featured-user-option'>
                                  <img
                                    src='../images/featured/featured-user7.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Martina</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                            <div
                              className='featured-item-clock'
                              data-countdown='2021/11/11'
                            >
                              {days}:{hours}:{minutes}:{seconds}
                            </div>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Dark-light Angel</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>110 ETH 12/14</span>
                              <h4>Bid 80 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user8.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user1.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 162
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img8.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a className='featured-user-option'>
                                  <img
                                    src='../images/featured/featured-user8.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Henry</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Exe Dream Hight</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>160 ETH 12/14</span>
                              <h4>Bid 90 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user1.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user3.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 182
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className='tabs_item'>
                    <div className='row justify-content-center'>
                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img5.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a className='featured-user-option'>
                                  <img
                                    src='../images/featured/featured-user5.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Daniel</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Walking On Air</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>110 ETH 12/14</span>
                              <h4>Bid 90 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user6.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user7.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 112
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/author-profile'>
                              <a>
                                <img
                                  src='../images/featured/featured-img6.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a className='featured-user-option'>
                                  <img
                                    src='../images/featured/featured-user6.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Samuel</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Supper Nuemorphism</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>130 ETH 12/14</span>
                              <h4>Bid 70 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user7.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user8.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 162
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img7.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a className='featured-user-option'>
                                  <img
                                    src='../images/featured/featured-user7.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Martina</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Dark-light Angel</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>110 ETH 12/14</span>
                              <h4>Bid 80 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user8.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user1.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 162
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img8.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a className='featured-user-option'>
                                  <img
                                    src='../images/featured/featured-user8.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Henry</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Exe Dream Hight</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>160 ETH 12/14</span>
                              <h4>Bid 90 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user1.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user3.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 182
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img1.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a className='featured-user-option'>
                                  <img
                                    src='../images/featured/featured-user1.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Farnil</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Industrial Revolution</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>100 ETH 12/14</span>
                              <h4>Bid 80 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user1.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user2.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 122
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img2.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a className='featured-user-option'>
                                  <img
                                    src='../images/featured/featured-user2.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Adison</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Love In The Air</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>110 ETH 12/14</span>
                              <h4>Bid 70 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user3.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user2.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 112
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img3.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user3.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>
                                  Become One With Nature
                                </a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>120 ETH 12/14</span>
                              <h4>Bid 90 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user4.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user5.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 132
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img4.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user4.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>
                                  Twilight Fracture City
                                </a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>130 ETH 12/14</span>
                              <h4>Bid 80 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user5.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user6.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 142
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className='tabs_item'>
                    <div className='row justify-content-center'>
                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                          <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img3.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user3.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>
                                  Become One With Nature
                                </a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>120 ETH 12/14</span>
                              <h4>Bid 90 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user4.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user5.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 132
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img4.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user4.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>
                                  Twilight Fracture City
                                </a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>130 ETH 12/14</span>
                              <h4>Bid 80 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user5.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user6.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 142
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img5.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user5.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Walking On Air</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>110 ETH 12/14</span>
                              <h4>Bid 90 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user6.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user7.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 112
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img6.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user6.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>
                                  Supper Nuemorphism
                                </a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>130 ETH 12/14</span>
                              <h4>Bid 70 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user7.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user8.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 162
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img7.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user7.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Dark-light Angel</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>110 ETH 12/14</span>
                              <h4>Bid 80 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user8.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user1.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 162
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img8.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user8.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Exe Dream Hight</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>160 ETH 12/14</span>
                              <h4>Bid 90 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user1.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user3.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 182
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img1.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user1.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>
                                  Industrial Revolution
                                </a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>100 ETH 12/14</span>
                              <h4>Bid 80 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user1.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user2.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 122
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img2.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user3.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Love In The Air</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>110 ETH 12/14</span>
                              <h4>Bid 70 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user3.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user2.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 112
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className='tabs_item'>
                    <div className='row justify-content-center'>
                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img5.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user5.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Walking On Air</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>110 ETH 12/14</span>
                              <h4>Bid 90 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user6.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user7.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 112
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                          <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img6.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user6.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>
                                  Supper Nuemorphism
                                </a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>130 ETH 12/14</span>
                              <h4>Bid 70 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user7.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user8.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 162
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img7.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user7.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Dark-light Angel</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>110 ETH 12/14</span>
                              <h4>Bid 80 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user8.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user1.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 162
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img8.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user8.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Exe Dream Hight</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>160 ETH 12/14</span>
                              <h4>Bid 90 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user1.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user3.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 182
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img1.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user1.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>
                                  Industrial Revolution
                                </a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>100 ETH 12/14</span>
                              <h4>Bid 80 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user1.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user2.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 122
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img2.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user3.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Love In The Air</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>110 ETH 12/14</span>
                              <h4>Bid 70 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user3.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user2.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 112
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img3.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user3.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>
                                  Become One With Nature
                                </a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>120 ETH 12/14</span>
                              <h4>Bid 90 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user4.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user5.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 132
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img4.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user4.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>
                                  Twilight Fracture City
                                </a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>130 ETH 12/14</span>
                              <h4>Bid 80 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user5.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user6.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 142
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className='tabs_item'>
                    <div className='row justify-content-center'>
                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img3.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user3.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>
                                  Become One With Nature
                                </a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>120 ETH 12/14</span>
                              <h4>Bid 90 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user4.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user5.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 132
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img4.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user4.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>
                                  Twilight Fracture City
                                </a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>130 ETH 12/14</span>
                              <h4>Bid 80 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user5.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user6.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 142
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img5.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user5.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Walking On Air</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>110 ETH 12/14</span>
                              <h4>Bid 90 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user6.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user7.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 112
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img6.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user6.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>
                                  Supper Nuemorphism
                                </a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>130 ETH 12/14</span>
                              <h4>Bid 70 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user7.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user8.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 162
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img7.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user7.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Dark-light Angel</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>110 ETH 12/14</span>
                              <h4>Bid 80 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user8.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user1.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 162
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img8.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user8.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Exe Dream Hight</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>160 ETH 12/14</span>
                              <h4>Bid 90 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user1.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user3.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 182
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img1.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user1.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>
                                  Industrial Revolution
                                </a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>100 ETH 12/14</span>
                              <h4>Bid 80 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user1.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user2.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 122
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6'>
                        <div className='featured-item'>
                          <div className='featured-item-img'>
                            <Link href='/item-details'>
                              <a>
                                <img
                                  src='../images/featured/featured-img2.jpg'
                                  alt='Images'
                                />
                              </a>
                            </Link>
                            <div className='featured-user'>
                              <Link href='/author-profile'>
                                <a
                                  className='featured-user-option'
                                >
                                  <img
                                    src='../images/featured/featured-user2.jpg'
                                    alt='Images'
                                  />
                                  <span>Created by @Jekob</span>
                                </a>
                              </Link>
                            </div>
                            <button
                              type='button'
                              className='default-btn border-radius-5'
                            >
                              Place Bid
                            </button>
                          </div>

                          <div className='content'>
                            <h3>
                              <Link href='/author-profile'>
                                <a>Love In The Air</a>
                              </Link>
                            </h3>
                            <div className='content-in'>
                              <span>110 ETH 12/14</span>
                              <h4>Bid 70 ETH </h4>
                            </div>
                            <div className='featured-content-list'>
                              <ul>
                                <li>
                                  <img
                                    src='../images/featured/featured-user3.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li>
                                  <img
                                    src='../images/featured/featured-user2.jpg'
                                    alt='Images'
                                  />
                                </li>
                                <li className='title'>10+ People Placed Bid</li>
                              </ul>

                              <p>
                                <i className='ri-heart-line'></i> 112
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
        {pagination && <Pagination />}
      </div>
    </>
  );
};

export default FeaturedArea;
