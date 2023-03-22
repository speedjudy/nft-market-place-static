import React from 'react';
import Link from 'next/link'

const BlogDetailsArea = () => {
  return (
    <>
      <div className='blog-details-area pt-100 pb-70'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='side-bar-area pr-20'>
                <div className='side-bar-profile'>
                  <img src='../images/blog/blog-profile.jpg' alt='Images' />
                  <h3>Olivia Jenar</h3>
                  <p>
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat
                  </p>
                  <ul className='social-link'>
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
                    <li>
                      <a href='https://www.linkedin.com/' target='_blank' rel="noreferrer">
                        <i className='ri-linkedin-fill'></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='side-bar-widget'>
                  <h3 className='title'>Search</h3>
                  <form className='search-form'>
                    <input
                      type='search'
                      className='form-control'
                      placeholder='Search keyword'
                    />
                    <button type='submit'>
                      <i className='ri-search-line'></i>
                    </button>
                  </form>
                </div>

                <div className='widget-popular-post'>
                  <h3 className='title'>Top Blog</h3>
                  <article className='item'>
                    <Link href='/blog-details'>
                      <a className='thumb'>
                        <span className='full-image cover bg1' role='img'></span>
                      </a>
                    </Link>
                    <div className='info'>
                      <h4 className='title-text'>
                        <Link href='/blog-details'>
                          <a>
                            Artist interview: Arran Schonberg
                          </a>
                        </Link>
                      </h4>

                      <p>July 14, 2021 </p>
                    </div>
                  </article>

                  <article className='item'>
                    <Link href='/blog-details'>
                      <a className='thumb'>
                        <span className='full-image cover bg2' role='img'></span>
                      </a>
                    </Link>
                    <div className='info'>
                      <h4 className='title-text'>
                        <Link href='/blog-details'>
                          <a>
                            Edition365: A Portrait Of The Year That
                          </a>
                        </Link>
                      </h4>

                      <p>July 17, 2021 </p>
                    </div>
                  </article>

                  <article className='item'>
                    <Link href='/blog-details'>
                      <a className='thumb'>
                        <span className='full-image cover bg3' role='img'></span>
                      </a>
                    </Link>
                    <div className='info'>
                      <h4 className='title-text'>
                        <Link href='/blog-details'>
                          <a>
                            Announcing Our $100m Raise
                          </a>
                        </Link>
                      </h4>

                      <p>July 19, 2021 </p>
                    </div>
                  </article>
                </div>

                <div className='side-bar-widget'>
                  <h3 className='title'>Sort By</h3>
                  <div className='form-group select-group'>
                    <select className='form-select form-control'>
                      <option data-display='Sort By (Default)'>
                        Sort By (Default)
                      </option>
                      <option value='1'> Top Rate</option>
                      <option value='2'>Mid Rate</option>
                      <option value='3'>Low Rated</option>
                    </select>
                  </div>
                </div>

                <div className='side-bar-widget-categories'>
                  <h3 className='title'>Categories</h3>
                  <ul>
                    <li>
                      <Link href='/categories'>
                        <a target='_blank'>
                          Art
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/categories'>
                          <a target='_blank'>
                            Virtual Worlds
                          </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/categories'>
                        <a target='_blank'>
                          Collectibles
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/categories'>
                        <a target='_blank'>
                          Music
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/categories'>
                        <a target='_blank'>
                          Games
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/categories'>
                        <a target='_blank'>
                          Domains
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/categories'>
                        <a target='_blank'>
                          Memes
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className='side-bar-widget'>
                  <h3 className='title'>Cloud Tag</h3>
                  <ul className='side-bar-widget-tag'>
                    <li>
                      <Link href='/tags'>
                        <a target='_blank'>
                          Virtual World
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/tags'>
                        <a target='_blank'>
                          Art
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/tags'>
                        <a target='_blank'>
                          Vision
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/tags'>
                        <a target='_blank'>
                          Music
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/tags'>
                        <a target='_blank'>
                          Domains
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/tags'>
                        <a target='_blank'>
                          Music
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-lg-8'>
              <div className='blog-details-content'>
                <div className='content'>
                  <h1>
                    Edition365: A Portrait Of The Year That Changed Everything
                  </h1>
                  <ul>
                    <li>June 14, 2021</li>
                    <li>02 Comments</li>
                  </ul>
                </div>

                <div className='blog-preview-img'>
                  <img
                    src='../images/blog/blog-details-img1.jpg'
                    alt='Blog Images'
                  />

                <Link href='/tags'>
                    <a className='tag-btn'>
                      Artwork
                    </a>
                  </Link>
                </div>

                <div className='blog-articel'>
                  <h3>An Open Call To Artists</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Elementum lacus, tempus aliquam turpis diam amet leo enim.
                    Nisi enim condimentum tincidunt ornare nam adipiscing.
                    Volutpat lacus, est hendrerit elit sed interdum. amet leo
                    enim. Nisi enim lorem hepotis ipsum tincidunt nam
                    adipiscing. Volutpat lacus, est hendrerit elit sed interdum.
                  </p>
                  <p>
                    Astro ipsum dolor sit amet, consectetur adipiscing elit.
                    Elementum lacus, tempus aliquam turpis diam amet leo enim.
                    Nisi enim condimentum tincidunt ornare nam adipiscing.
                    Volutpat lacus, est hendrerit elit sed interdum. amet leo
                    enim.{' '}
                  </p>
                  <p>
                    Elementum lacus, tempus aliquam turpis diam amet leo enim.
                    Nisi enim condimentum tincidunt ornare nam adipiscing.
                    Volutpat lacus, est hendrerit elit sed interdum. amet leo
                    enim. Nisi enim lorem hepotis ipsum tincidunt nam
                    adipiscing. Volutpat lacus, est hendrerit elit sed interdum.
                  </p>
                </div>

                <blockquote className='blockquote'>
                  <p>
                    Elementum lacus, tempus aliquam turpis diam amet leo enim.
                    Nisi enim condimentum tincidunt ornare nam adipiscing.
                    Volutpat lacus, est hendrerit elit sed interdum. amet leo
                    enim. Nisi enim lorem hepotis ipsum tincidunt nam
                    adipiscing. Volutpat lacus, est hendrerit elit sed interdum.
                  </p>
                  <img src='../images/blog/blog-line.png' alt='Images' />
                </blockquote>

                <div className='blog-portfolio'>
                  <div className='row'>
                    <div className='col-lg-8 col-sm-8'>
                      <div className='blog-portfolio-img'>
                        <img
                          src='../images/blog/blog-details-img2.jpg'
                          alt='Images'
                        />
                      </div>
                    </div>

                    <div className='col-lg-4 col-sm-4'>
                      <div className='blog-portfolio-img'>
                        <img
                          src='../images/blog/blog-details-img3.jpg'
                          alt='Images'
                        />
                      </div>
                    </div>
                  </div>

                  <h3>Submit Your Work</h3>
                  <p>
                    Anybody, from anywhere, practicing any form of expression,
                    can submit an Edition365 entry entirely free of charge (1854
                    Access Members can submit up to ten entries). Photographs,
                    moving images, digital art, musical compositions, spoken
                    word, and videos are all eligible, and the work can relate –
                    whether directly or indirectly – to any of the significant
                    events that have occurred in the last year.
                  </p>
                  <p>
                    Astro ipsum dolor sit amet, consectetur adipiscing elit.
                    Elementum lacus, tempus aliquam turpis diam amet leo enim.
                    Nisi enim condimentum tincidunt ornare nam adipiscing.
                    Volutpat lacus, est hendrerit elit sed interdum. amet leo
                    enim.{' '}
                  </p>
                </div>

                <div className='article-share-area'>
                  <div className='row align-items-center'>
                    <div className='col-lg-5 col-sm-5'>
                      <ul className='tag-list'>
                        <li className='title'>Tag :</li>
                        <li>
                          <Link href='/tags'>
                            <a>Vision</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/tags'>
                            <a>Music</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className='col-lg-7 col-sm-7'>
                      <div className='article-social-icon'>
                        <ul className='social-icon'>
                          <li className='title'>Share Post</li>
                          <li>
                            <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                              <i className='ri-facebook-fill'></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href='https://www.instagram.com/'
                              target='_blank' rel="noreferrer"
                            >
                              <i className='ri-instagram-fill'></i>
                            </a>
                          </li>
                          <li>
                            <a href='https://twitter.com/' target='_blank' rel="noreferrer">
                              <i className='ri-twitter-fill'></i>
                            </a>
                          </li>
                          <li>
                            <a href='https://www.linkedin.com/' target='_blank' rel="noreferrer">
                              <i className='ri-linkedin-fill'></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='comments-form'>
                  <h3>0 Comment</h3>

                  <div className='contact-form'>
                    <h4>Reply A Comment</h4>
                    <form id='contactForm'>
                      <div className='row'>
                        <div className='col-lg-6'>
                          <div className='form-group'>
                            <label>First Name</label>
                            <input
                              type='text'
                              name='name'
                              id='name'
                              className='form-control'
                              required
                              data-error='Please Enter Your Name'
                              placeholder='Your Name'
                            />
                          </div>
                        </div>

                        <div className='col-lg-6'>
                          <div className='form-group'>
                            <label>Your Email</label>
                            <input
                              type='email'
                              name='email'
                              id='email'
                              className='form-control'
                              required
                              data-error='Please Enter Your Email'
                              placeholder='Your Email'
                            />
                          </div>
                        </div>

                        <div className='col-lg-6'>
                          <div className='form-group'>
                            <label>Your Website</label>
                            <input
                              type='text'
                              required
                              data-error='Please Enter Your Website'
                              className='form-control'
                              placeholder='Your Website'
                            />
                          </div>
                        </div>

                        <div className='col-lg-6'>
                          <div className='form-group'>
                            <label>Your Subject</label>
                            <input
                              type='text'
                              name='msg_subject'
                              id='msg_subject'
                              className='form-control'
                              required
                              data-error='Please Enter Your Subject'
                              placeholder='Your Subject'
                            />
                          </div>
                        </div>

                        <div className='col-lg-12 col-md-12'>
                          <div className='form-group'>
                            <label>Your Comment</label>
                            <textarea
                              name='comment'
                              className='form-control'
                              cols='30'
                              rows='5'
                              required
                              data-error='Write Your Comment'
                              placeholder='Your Comment'
                            ></textarea>
                          </div>
                        </div>

                        <div className='col-lg-12 col-md-12'>
                          <div className='agree-label'>
                            <input type='checkbox' id='chb1' />
                            <label forHtml='chb1'>
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </label>
                          </div>
                        </div>

                        <div className='col-lg-12 col-md-12'>
                          <button
                            type='submit'
                            className='default-btn border-radius-5'
                          >
                            Send Message <i className='ri-arrow-right-s-line'></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsArea;
