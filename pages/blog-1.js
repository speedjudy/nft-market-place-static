import NavbarTwo from '../components/Layout/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import Copyright from '../components/Common/Copyright';
import Pagination from '../components/Common/Pagination';
import Link from 'next/link'

const BlogOne = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        bannerHeading='Blog Left Sidebar'
        parentTitle='Community'
        pageTitle='Blog Left Sidebar'
        bg='inner-bg1'
      />
      <div className='blog-area-two pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>From Our Blog</h2>
          </div>

          <div className='row justify-content-center pt-45'>
            <div className='col-lg-4 col-md-6'>
              <div className='blog-card box-shadow'>
                <div className='blog-img'>
                  <Link href='/blog-details'>
                    <a>
                      <img src='../images/blog/blog-img1.jpg' alt='Images' />
                    </a>
                  </Link>
                  <div className='blog-user'>
                    <Link href='/author-profile'>
                      <a className='blog-user-option'>
                        <img src='../images/blog/blog-user1.jpg' alt='Images' />
                        <span>Created by @Adison</span>
                      </a>
                    </Link>
                  </div>
                  <Link href='/tags'>
                    <a className='blog-tag-btn'>
                      Artwork
                    </a>
                  </Link>
                </div>

                <div className='content'>
                  <h3>
                    <Link href='/blog-details'>
                      <a>
                        Announcing Our $100m Raise, Led By A16z
                      </a>
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
              <div className='blog-card box-shadow'>
                <div className='blog-img'>
                  <Link href='/blog-details'>
                    <a>
                      <img src='../images/blog/blog-img2.jpg' alt='Images' />
                    </a>
                  </Link>

                  <div className='blog-user'>
                    <Link href='/author-profile'>
                      <a className='blog-user-option'>
                        <img src='../images/blog/blog-user2.jpg' alt='Images' />
                        <span>Created by @Evelyn</span>
                      </a>
                    </Link>
                  </div>
                  <Link href='/tags'>
                    <a className='blog-tag-btn'>
                      Digital
                    </a>
                  </Link>
                </div>

                <div className='content'>
                  <h3>
                    <Link href='/blog-details'>
                      <a>
                        Edition365: A Portrait Of The Year That Changed Everything
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
              <div className='blog-card box-shadow'>
                <div className='blog-img'>
                  <Link href='/blog-details'>
                    <a>
                      <img src='../images/blog/blog-img3.jpg' alt='Images' />
                    </a>
                  </Link>

                  <div className='blog-user'>
                    <Link href='/author-profile'>
                      <a className='blog-user-option'>
                        <img src='../images/blog/blog-user3.jpg' alt='Images' />
                        <span>Created by @Julian</span>
                      </a>
                    </Link>
                  </div>
                  <Link href='/tags'>
                    <a className='blog-tag-btn'>
                      Creative
                    </a>
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

            <div className='col-lg-4 col-md-6'>
              <div className='blog-card box-shadow'>
                <div className='blog-img'>
                  <Link href='/blog-details'>
                    <a>
                      <img src='../images/blog/blog-img4.jpg' alt='Images' />
                    </a>
                  </Link>

                  <div className='blog-user'>
                    <Link href='/author-profile'>
                      <a className='blog-user-option'>
                        <img src='../images/blog/blog-user4.jpg' alt='Images' />
                        <span>Created by @Evelyn</span>
                      </a>
                    </Link>
                  </div>
                  <Link href='/tags'>
                    <a className='blog-tag-btn'>
                      Artist
                    </a>
                  </Link>
                </div>

                <div className='content'>
                  <h3>
                    <Link href='/blog-details'>
                      <a>
                        Artist Interview: Arran Schonberg (Divergence_art)
                      </a>
                    </Link>
                  </h3>
                  <ul>
                    <li>June 11, 2021</li>
                    <li>01 Comments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='blog-card box-shadow'>
                <div className='blog-img'>
                  <Link href='/blog-details'>
                    <a>
                      <img src='../images/blog/blog-img5.jpg' alt='Images' />
                    </a>
                  </Link>

                  <div className='blog-user'>
                    <Link href='/author-profile'>
                      <a className='blog-user-option'>
                        <img src='../images/blog/blog-user5.jpg' alt='Images' />
                        <span>Created by @Emilia</span>
                      </a>
                    </Link>
                  </div>
                  <Link href='/tags'>
                    <a className='blog-tag-btn'>
                      Online
                    </a>
                  </Link>
                </div>

                <div className='content'>
                  <h3>
                    <Link href='/blog-details'>
                      <a>
                        12 Curated Works For Cadaf On Online
                      </a>
                    </Link>
                  </h3>
                  <ul>
                    <li>June 13, 2021</li>
                    <li>03 Comments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='blog-card box-shadow'>
                <div className='blog-img'>
                  <Link href='/blog-details'>
                    <a>
                      <img src='../images/blog/blog-img6.jpg' alt='Images' />
                    </a>
                  </Link>

                  <div className='blog-user'>
                    <Link href='/author-profile'>
                      <a className='blog-user-option'>
                        <img src='../images/blog/blog-user6.jpg' alt='Images' />
                        <span>Created by @Emilia</span>
                      </a>
                    </Link>
                  </div>
                  <Link href='/tags'>
                    <a className='blog-tag-btn'>
                      Artist
                    </a>
                  </Link>
                </div>

                <div className='content'>
                  <h3>
                    <Link href='/blog-details'>
                      <a>
                        The Biggest Drop In Times Square Since New Years Eve
                      </a>
                    </Link>
                  </h3>
                  <ul>
                    <li>June 15, 2021</li>
                    <li>0 Comments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='blog-card box-shadow'>
                <div className='blog-img'>
                  <Link href='/blog-details'>
                    <a>
                      <img src='../images/blog/blog-img7.jpg' alt='Images' />
                    </a>
                  </Link>

                  <div className='blog-user'>
                    <Link href='/author-profile'>
                      <a className='blog-user-option'>
                        <img src='../images/blog/blog-user7.jpg' alt='Images' />
                        <span>Created by @Emilia</span>
                      </a>
                    </Link>
                  </div>
                  <Link href='/tags'>
                    <Link href='/tags'>
                      <a className='blog-tag-btn'>
                        Digitals
                      </a>
                    </Link>
                  </Link>
                </div>

                <div className='content'>
                  <h3>
                    <Link href='/blog-details'>
                      <a>
                        Daz 3d, The Digitals And A Groundbreaking NFT
                      </a>
                    </Link>
                  </h3>
                  <ul>
                    <li>June 19, 2021</li>
                    <li>0 Comments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='blog-card box-shadow'>
                <div className='blog-img'>
                  <Link href='/blog-details'>
                    <a>
                      <img src='../images/blog/blog-img8.jpg' alt='Images' />
                    </a>
                  </Link>

                  <div className='blog-user'>
                    <Link href='/author-profile'>
                      <a className='blog-user-option'>
                        <img src='../images/blog/blog-user8.jpg' alt='Images' />
                        <span>Created by @Daniel</span>
                      </a>
                    </Link>
                  </div>
                  <Link href='/tags'>
                    <a className='blog-tag-btn'>
                      Photograph
                    </a>
                  </Link>
                </div>

                <div className='content'>
                  <h3>
                    <Link href='/blog-details'>
                      <a>
                        The Journey Of A Never Seen Before Photograph
                      </a>
                    </Link>
                  </h3>
                  <ul>
                    <li>June 21, 2021</li>
                    <li>05 Comments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='blog-card box-shadow'>
                <div className='blog-img'>
                  <Link href='/blog-details'>
                    <a>
                      <img src='../images/blog/blog-img9.jpg' alt='Images' />
                    </a>
                  </Link>

                  <div className='blog-user'>
                    <Link href='/author-profile'>
                      <a className='blog-user-option'>
                        <img src='../images/blog/blog-user9.jpg' alt='Images' />
                        <span>Created by @Anvi</span>
                      </a>
                    </Link>
                  </div>
                  <Link href='/tags'>
                    <a className='blog-tag-btn'>
                      Art
                    </a>
                  </Link>
                </div>

                <div className='content'>
                  <h3>
                    <Link href='/blog-details'>
                      <a>
                        Dazn’s Face The Fearless: Highlights From Canelo’s{' '}
                      </a>
                    </Link>
                  </h3>
                  <ul>
                    <li>June 23, 2021</li>
                    <li>03 Comments</li>
                  </ul>
                </div>
              </div>
            </div>

            <Pagination />
          </div>
        </div>
      </div>

      <Footer />

      <Copyright />
    </>
  );
};

export default BlogOne;
