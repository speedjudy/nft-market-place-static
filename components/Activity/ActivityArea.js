import React from 'react';
import Pagination from '../Common/Pagination';
import ActivitySidebar from './ActivitySidebar';

const ActivityArea = () => {
  return (
    <>
      <div className='activity-area pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>Activity</h2>
          </div>

          <div className='row pt-45'>
            <div className='col-lg-9'>
              <div className='row justify-content-center'>
                <div className='col-lg-12'>
                  <div className='activity-card'>
                    <div className='activity-img'>
                      <img
                        src='../images/activity/activity-img1.jpg'
                        alt='Images'
                      />
                    </div>

                    <div className='activity-content'>
                      <p>
                        <i className='ri-calendar-2-line'></i> 5 June, 2021
                      </p>
                      <span>
                        <i className='ri-time-line'></i> 11:49 AM
                      </span>
                    </div>

                    <div className='activity-into'>
                      <h3>Supper Nuemorphism</h3>
                      <span>
                        Listed By <b>@Jackon</b> For <b>230 ETH</b> Each
                      </span>
                    </div>

                    <div className='activity-btn'>
                      <i className='ri-delete-bin-4-line'></i>
                    </div>
                  </div>
                </div>

                <div className='col-lg-12'>
                  <div className='activity-card'>
                    <div className='activity-img'>
                      <img
                        src='../images/activity/activity-img2.jpg'
                        alt='Images'
                      />
                    </div>

                    <div className='activity-content'>
                      <p>
                        <i className='ri-calendar-2-line'></i> 7 June, 2021
                      </p>
                      <span>
                        <i className='ri-time-line'></i> 10:49 AM
                      </span>
                    </div>

                    <div className='activity-into'>
                      <h3>Walking On Air</h3>
                      <span>
                        Listed By <b>@Henry </b> For <b>130 ETH</b> Each
                      </span>
                    </div>

                    <div className='activity-btn'>
                      <i className='ri-delete-bin-4-line'></i>
                    </div>
                  </div>
                </div>

                <div className='col-lg-12'>
                  <div className='activity-card'>
                    <div className='activity-img'>
                      <img
                        src='../images/activity/activity-img3.jpg'
                        alt='Images'
                      />
                    </div>

                    <div className='activity-content'>
                      <p>
                        <i className='ri-calendar-2-line'></i> 9 June, 2021
                      </p>
                      <span>
                        <i className='ri-time-line'></i> 07:49 AM
                      </span>
                    </div>

                    <div className='activity-into'>
                      <h3>Exe Dream Hight</h3>
                      <span>
                        Listed By <b>@Henry </b> For <b>230 ETH</b> Each
                      </span>
                    </div>

                    <div className='activity-btn'>
                      <i className='ri-delete-bin-4-line'></i>
                    </div>
                  </div>
                </div>

                <div className='col-lg-12'>
                  <div className='activity-card'>
                    <div className='activity-img'>
                      <img
                        src='../images/activity/activity-img4.jpg'
                        alt='Images'
                      />
                    </div>

                    <div className='activity-content'>
                      <p>
                        <i className='ri-calendar-2-line'></i> 11 June, 2021
                      </p>
                      <span>
                        <i className='ri-time-line'></i> 08:49 AM
                      </span>
                    </div>

                    <div className='activity-into'>
                      <h3>Become One With Nature</h3>
                      <span>
                        Listed By <b>@Martina </b> For <b>270 ETH</b> Each
                      </span>
                    </div>

                    <div className='activity-btn'>
                      <i className='ri-delete-bin-4-line'></i>
                    </div>
                  </div>
                </div>

                <div className='col-lg-12'>
                  <div className='activity-card'>
                    <div className='activity-img'>
                      <img
                        src='../images/activity/activity-img5.jpg'
                        alt='Images'
                      />
                    </div>

                    <div className='activity-content'>
                      <p>
                        <i className='ri-calendar-2-line'></i> 15 June, 2021
                      </p>
                      <span>
                        <i className='ri-time-line'></i> 09:49 AM
                      </span>
                    </div>

                    <div className='activity-into'>
                      <h3>Les Immortals</h3>
                      <span>
                        Listed By <b>@Evelyn </b> For <b>290 ETH</b> Each
                      </span>
                    </div>

                    <div className='activity-btn'>
                      <i className='ri-delete-bin-4-line'></i>
                    </div>
                  </div>
                </div>
                <Pagination />
              </div>
            </div>

            <div className='col-lg-3'>
                  <ActivitySidebar/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityArea;
