import React from 'react';
import Link from 'next/link'

const ItemDetailsDescription = () => {
  return (
    <>
      <div className='section-title'>
        <h2>Description</h2>
        <p>
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, All the Lorem Ipsum generators on the
          Internet tend to repeat predefined chunks.
        </p>
      </div>

      <div className='row'>
        <div className='col-lg-6 col-6'>
          <div className='item-details-user'>
            <h3>Creator</h3>
            <div className='content'>
              <div className='images'>
                <img
                  src='../images/Item-details/Item-details-user2.jpg'
                  alt='Images'
                />
                <i className='ri-check-line'></i>
              </div>

              <span>@Maxwell</span>
            </div>
          </div>
        </div>

        <div className='col-lg-6 col-6'>
          <div className='item-details-user'>
            <h3>Collection</h3>
            <div className='content'>
              <div className='images'>
                <img
                  src='../images/Item-details/Item-details-user1.jpg'
                  alt='Images'
                />
              </div>

              <span>Rose Gold</span>
            </div>
          </div>
        </div>
      </div>

      <div className='item-details-price'>
        <div className='item-details-title'>
          <h3>Current Price 324 ETH</h3>
          <p>$1200</p>
          <span>1/10</span>
        </div>
        <ul>
          <li>
            Size
            <b>: 3000 x 3000</b>
          </li>
          <li>
            Created
            <b>: 08 July, 2021</b>
          </li>
          <li>
            Collection
            <b>: Rose Gold</b>
          </li>
          <li>
            Category
            <b>: Artwork</b>
          </li>
        </ul>
      </div>

      <div className='item-details-user-item'>
        <div className='images'>
          <img
            src='../images/Item-details/Item-details-user4.jpg'
            alt='Images'
          />
          <i className='ri-check-line'></i>
        </div>

        <div className='content'>
          <h3>Jecob Martin</h3>
          <span>Item Owner</span>
        </div>
      </div>

      <div className='item-details-in-content'>
        <div className='item-left'>
          <span>Auction Ends In</span>
          <div className='timer-text' data-countdown='2021/11/11'></div>
        </div>
        <div className='item-right'>
          <h3 className='item-remaining'>Highest Bid</h3>
          <h3 className='item-right-eth'>15,00 ETH</h3>
        </div>
      </div>

      <div className='item-details-btn'>
        <Link href='/author-profile'>
          <a className='default-btn border-radius-50'>
            {' '}
            Place Bid
          </a>
        </Link>
      </div>
    </>
  );
};

export default ItemDetailsDescription;
