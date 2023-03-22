import { useState, useEffect } from 'react';
import NavbarTwo from '../components/Layout/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import Copyright from '../components/Common/Copyright';

const ComingSoon = () => {
  //counter calculation
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const [show, setShow] = useState(false);

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
      <NavbarTwo />
      <PageBanner
        bannerHeading='Coming Soon'
        parentTitle='Pages'
        pageTitle='Coming Soon'
        bg='inner-bg5'
      />

      <div className='coming-soon-area ptb-100'>
        <div className='d-table'>
          <div className='d-table-cell'>
            <div className='container'>
              <div className='coming-soon-content'>
                <h1>Coming Soon</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices.
                </p>

                <div id='timer'>
                  <div id='days'>{days}<span>days</span></div>
                  <div id='hours'>{hours}<span>hours</span></div>
                  <div id='minutes'>{minutes}<span>minutes</span></div>
                  <div id='seconds'>{seconds}<span>seconds</span></div>
                </div>

                <form className='newsletter-form' data-toggle='validator'>
                  <input
                    type='email'
                    className='input-newsletter'
                    placeholder='Enter email address'
                    name='EMAIL'
                    required
                    autoComplete='off'
                  />

                  <button type='submit' className='default-btn two'>
                    Subscribe now
                  </button>
                  <div id='validator-newsletter' className='form-result'></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Copyright />
    </>
  );
};

export default ComingSoon;
