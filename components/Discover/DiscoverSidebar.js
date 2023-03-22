import React from 'react';
import Link from 'next/link'

const DiscoverSidebar = () => {
  return (
    <>
      <div className='side-bar-area pl-20'>
        <div className='side-bar-widget'>
          <h3 className='title'>
            Filter <Link href='/discover-2'><a>Clear All</a></Link>
          </h3>
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
      </div>
    </>
  );
};

export default DiscoverSidebar;
