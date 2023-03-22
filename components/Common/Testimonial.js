import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

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
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
};

const Testimonial = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
  }, []);

  return (
    <>
      <div className='testimonial-area ptb-100'>
        <div className='container'>
          <div className='testimonial-slider owl-theme'>
            {display ? (
              <OwlCarousel {...options}>
                <div className='testimonial-item'>
                  <div className='testimonial-img'>
                    <img
                      src='../images/testimonial/testimonial-img.png'
                      alt='Images'
                    />
                  </div>

                  <div className='testimonial-content'>
                    <img
                      src='../images/testimonial/testimonial-line.png'
                      alt='image'
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Elementum lacus, tempus aliquam turpis diam amet leo enim.
                      Nisi enim lorem condimentum tincidunt ornare nam
                      adipiscing. Volutpat lacus, est hendrerit elit sed
                      interdum.
                    </p>
                    <ul>
                      <li>Rennie Wood </li>
                      <li>Founder</li>
                    </ul>
                  </div>
                </div>

                <div className='testimonial-item'>
                  <div className='testimonial-img'>
                    <img
                      src='../images/testimonial/testimonial-img2.png'
                      alt='Images'
                    />
                  </div>

                  <div className='testimonial-content'>
                    <img
                      src='../images/testimonial/testimonial-line.png'
                      alt='image'
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Elementum lacus, tempus aliquam turpis diam amet leo enim.
                      Nisi enim lorem condimentum tincidunt ornare nam
                      adipiscing. Volutpat lacus, est hendrerit elit sed
                      interdum.
                    </p>
                    <ul>
                      <li>Macie Mood </li>
                      <li>Ex Manager</li>
                    </ul>
                  </div>
                </div>

                <div className='testimonial-item'>
                  <div className='testimonial-img'>
                    <img
                      src='../images/testimonial/testimonial-img3.png'
                      alt='Images'
                    />
                  </div>

                  <div className='testimonial-content'>
                    <img
                      src='../images/testimonial/testimonial-line.png'
                      alt='image'
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Elementum lacus, tempus aliquam turpis diam amet leo enim.
                      Nisi enim lorem condimentum tincidunt ornare nam
                      adipiscing. Volutpat lacus, est hendrerit elit sed
                      interdum.
                    </p>
                    <ul>
                      <li>Olivia Jenar</li>
                      <li>CEO and Director</li>
                    </ul>
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

export default Testimonial;
