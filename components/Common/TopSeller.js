import Link from 'next/link';

const TopSeller = ({ pt100 }) => {
  return (
    <>
      <div className={`top-sellers-area pb-70 ${pt100}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-7'>
              <div className='section-title'>
                <h2>Top Sellers</h2>
              </div>
            </div>

            <div className='col-lg-4 col-md-5'>
              <div className='trending-btn text-end'>
                <Link href='/author'>
                  <a className='default-btn border-radius-5'>Explore More</a>
                </Link>
              </div>
            </div>
          </div>

          <div className='row justify-content-center pt-45'>
            <div className='col-lg-3 col-6 col-md-4'>
              <div className='top-sellers-item'>
                <div className='number'>1.</div>
                <div className='top-sellers-img'>
                  <Link href='/author-profile'>
                    <a>
                      <img
                        src='../images/top-sellers/top-sellers1.jpg'
                        alt='Images'
                      />
                    </a>
                  </Link>
                  <i className='ri-check-line'></i>
                </div>
                <div className='content'>
                  <h3>
                    <Link href='/author-profile'>
                      <a>Benjamin Doe</a>
                    </Link>
                  </h3>
                  <span>129.301 ETH</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-6 col-md-4'>
              <div className='top-sellers-item'>
                <div className='number'>2.</div>
                <div className='top-sellers-img'>
                  <Link href='/author-profile'>
                    <a>
                      <img
                        src='../images/top-sellers/top-sellers2.jpg'
                        alt='Images'
                      />
                    </a>
                  </Link>
                  <i className='ri-check-line'></i>
                </div>
                <div className='content'>
                  <h3>
                    <Link href='/author-profile'>
                      <a>Evelyn Adison</a>
                    </Link>
                  </h3>
                  <span>130.201 ETH</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-6 col-md-4'>
              <div className='top-sellers-item'>
                <div className='number'>3.</div>
                <div className='top-sellers-img'>
                  <Link href='/author-profile'>
                    <a>
                      <img
                        src='../images/top-sellers/top-sellers3.jpg'
                        alt='Images'
                      />
                    </a>
                  </Link>
                  <i className='ri-check-line'></i>
                </div>
                <div className='content'>
                  <h3>
                    <Link href='/author-profile'>
                      <a>Aria July</a>
                    </Link>
                  </h3>
                  <span>120.101 ETH</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-6 col-md-4'>
              <div className='top-sellers-item'>
                <div className='number'>4.</div>
                <div className='top-sellers-img'>
                  <Link href='/author-profile'>
                    <a>
                      <img
                        src='../images/top-sellers/top-sellers4.jpg'
                        alt='Images'
                      />
                    </a>
                  </Link>
                  <i className='ri-check-line'></i>
                </div>
                <div className='content'>
                  <h3>
                    <Link href='/author-profile'>
                      <a>Aria July</a>
                    </Link>
                  </h3>
                  <span>124.101 ETH</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-6 col-md-4'>
              <div className='top-sellers-item'>
                <div className='number'>5.</div>
                <div className='top-sellers-img'>
                  <Link href='/author-profile'>
                    <a>
                      <img
                        src='../images/top-sellers/top-sellers5.jpg'
                        alt='Images'
                      />
                    </a>
                  </Link>
                  <i className='ri-check-line'></i>
                </div>
                <div className='content'>
                  <h3>
                    <Link href='/author-profile'>
                      <a>Sebastian Farnil</a>
                    </Link>
                  </h3>
                  <span>127.301 ETH</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-6 col-md-4'>
              <div className='top-sellers-item'>
                <div className='number'>6.</div>
                <div className='top-sellers-img'>
                  <Link href='/author-profile'>
                    <a>
                      <img
                        src='../images/top-sellers/top-sellers6.jpg'
                        alt='Images'
                      />
                    </a>
                  </Link>
                  <i className='ri-check-line'></i>
                </div>
                <div className='content'>
                  <h3>
                    <Link href='/author-profile'>
                      <a>Henry Martina</a>
                    </Link>
                  </h3>
                  <span>128.301 ETH</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-6 col-md-4'>
              <div className='top-sellers-item'>
                <div className='number'>7.</div>
                <div className='top-sellers-img'>
                  <Link href='/author-profile'>
                    <a>
                      <img
                        src='../images/top-sellers/top-sellers7.jpg'
                        alt='Images'
                      />
                    </a>
                  </Link>
                  <i className='ri-check-line'></i>
                </div>
                <div className='content'>
                  <h3>
                    <Link href='/author-profile'>
                      <a>Daniel Adams</a>
                    </Link>
                  </h3>
                  <span>130.301 ETH</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-6 col-md-4'>
              <div className='top-sellers-item'>
                <div className='number'>8.</div>
                <div className='top-sellers-img'>
                  <Link href='/author-profile'>
                    <a>
                      <img
                        src='../images/top-sellers/top-sellers8.jpg'
                        alt='Images'
                      />
                    </a>
                  </Link>
                  <i className='ri-check-line'></i>
                </div>
                <div className='content'>
                  <h3>
                    <Link href='/author-profile'>
                      <a>Julian Rin</a>
                    </Link>
                  </h3>
                  <span>120.201 ETH</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-6 col-md-4'>
              <div className='top-sellers-item'>
                <div className='number'>9.</div>
                <div className='top-sellers-img'>
                  <Link href='/author-profile'>
                    <a>
                      <img
                        src='../images/top-sellers/top-sellers9.jpg'
                        alt='Images'
                      />
                    </a>
                  </Link>
                  <i className='ri-check-line'></i>
                </div>
                <div className='content'>
                  <h3>
                    <Link href='/author-profile'>
                      <a>Samuel Anvi</a>
                    </Link>
                  </h3>
                  <span>130.201 ETH</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-6 col-md-4'>
              <div className='top-sellers-item'>
                <div className='number'>10.</div>
                <div className='top-sellers-img'>
                  <Link href='/author-profile'>
                    <a>
                      <img
                        src='../images/top-sellers/top-sellers10.jpg'
                        alt='Images'
                      />
                    </a>
                  </Link>
                  <i className='ri-check-line'></i>
                </div>
                <div className='content'>
                  <h3>
                    <Link href='/author-profile'>
                      <a>Emilia Adison</a>
                    </Link>
                  </h3>
                  <span>124.201 ETH</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-6 col-md-4'>
              <div className='top-sellers-item'>
                <div className='number'>11.</div>
                <div className='top-sellers-img'>
                  <Link href='/author-profile'>
                    <a>
                      <img
                        src='../images/top-sellers/top-sellers11.jpg'
                        alt='Images'
                      />
                    </a>
                  </Link>
                  <i className='ri-check-line'></i>
                </div>
                <div className='content'>
                  <h3>
                    <Link href='/author-profile'>
                      <a>Muhammad Ali</a>
                    </Link>
                  </h3>
                  <span>127.201 ETH</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-6 col-md-4'>
              <div className='top-sellers-item'>
                <div className='number'>12.</div>
                <div className='top-sellers-img'>
                  <Link href='/author-profile'>
                    <a>
                      <img
                        src='../images/top-sellers/top-sellers12.jpg'
                        alt='Images'
                      />
                    </a>
                  </Link>
                  <i className='ri-check-line'></i>
                </div>
                <div className='content'>
                  <h3>
                    <Link href='/author-profile'>
                      <a>Alexander Luis</a>
                    </Link>
                  </h3>
                  <span>129.201 ETH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSeller;
