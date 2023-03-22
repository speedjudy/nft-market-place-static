import Link from 'next/link';

const BlogArea = () => {
  return (
    <>
      <div className='blog-area pt-100 pb-70'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-8 col-md-8'>
              <div className='section-title'>
                <h2>From Our Blog</h2>
              </div>
            </div>

            <div className='col-lg-4 col-md-4'>
              <div className='blog-btn text-end'>
                <Link href='/blog-1'>
                  <a className='default-btn border-radius-5'>Explore More</a>
                </Link>
              </div>
            </div>
          </div>

          <div className='row justify-content-center pt-45'>
            <div className='col-lg-4 col-md-6'>
              <div className='blog-card'>
                <div className='blog-img'>
                  <Link href='/blog-details'>
                    <a>
                      <img src='../images/blog/blog-img1.jpg' alt='Images' />
                    </a>
                  </Link>
                  <div className='blog-user'>
                    <Link href='/author-profile'>
                      <a className='blog-user-option'>
                        <img
                          src='../images/featured/featured-user2.jpg'
                          alt='Images'
                        />
                        <span>Created by @Adison</span>
                      </a>
                    </Link>
                  </div>
                  <Link href='/tags'>
                    <a className='blog-tag-btn'>Artwork</a>
                  </Link>
                </div>

                <div className='content'>
                  <h3>
                    <Link href='/blog-details'>
                      <a>Announcing Our $100m Raise, Led By A16z</a>
                    </Link>
                  </h3>
                  <ul>
                    <li>June 5, 2021</li>
                    <li>No Comments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='blog-card'>
                <div className='blog-img'>
                  <Link href='/item-details'>
                    <a>
                      <img src='../images/blog/blog-img2.jpg' alt='Images' />
                    </a>
                  </Link>
                  <div className='blog-user'>
                    <Link href='/author-profile'>
                      <a className='blog-user-option'>
                        <img
                          src='../images/featured/featured-user2.jpg'
                          alt='Images'
                        />
                        <span>Created by @Evelyn</span>
                      </a>
                    </Link>
                  </div>
                  <Link href='/tags'>
                    <a className='blog-tag-btn'>Digital</a>
                  </Link>
                </div>

                <div className='content'>
                  <h3>
                    <Link href='/blog-details'>
                      <a>
                        Edition365: A Portrait Of The Year That Changed
                        Everything
                      </a>
                    </Link>
                  </h3>
                  <ul>
                    <li>June 7, 2021</li>
                    <li>02 Comments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='blog-card'>
                <div className='blog-img'>
                  <Link href='/blog-details'>
                    <a>
                      <img src='../images/blog/blog-img3.jpg' alt='Images' />
                    </a>
                  </Link>
                  <div className='blog-user'>
                    <Link href='/author-profile'>
                      <a className='blog-user-option'>
                        <img
                          src='../images/featured/featured-user3.jpg'
                          alt='Images'
                        />
                        <span>Created by @Julian</span>
                      </a>
                    </Link>
                  </div>
                  <Link href='/tags'>
                    <a className='blog-tag-btn'>Creative</a>
                  </Link>
                </div>

                <div className='content'>
                  <h3>
                    <Link href='/blog-details'>
                      <a>
                        Christie’s Ended Up Selling For $69 Million In Nft
                        Marketplace
                      </a>
                    </Link>
                  </h3>
                  <ul>
                    <li>June 9, 2021</li>
                    <li>03 Comments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArea;
