import { useState } from 'react';
import SearchModal from './SearchModal';
import Link from '../../utils/ActiveLink';

const NavbarTwo = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [sticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleWallet = () => {
    setShowWallet(!showWallet);
  };

  const toggleSearchModal = () => {
    setShowSearchModal(!showSearchModal);
  };

  //sticky menu
  const showStickyMenu = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  if (typeof window !== 'undefined') {
    // browser code
    window.addEventListener('scroll', showStickyMenu);
  }
  return (
    <>
      <div className={sticky ? 'is-sticky navbar-area two' : 'navbar-area'}>
        <div className='mobile-responsive-nav'>
          <div className='container-fluid'>
            <div className='mobile-responsive-menu'>
              <div
                onClick={() => toggleMenu()}
                className='hamburger-menu hamburger-two'
              >
                {showMenu ? (
                  <i className='ri-close-line'></i>
                ) : (
                  <i className='ri-menu-line'></i>
                )}
              </div>
              <div className='logo'>
                <Link href='/'>
                  <a>
                    <img src='../images/logo-2.png' alt='logo' />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            showMenu ? 'show desktop-nav nav-area' : 'desktop-nav nav-area'
          }
        >
          <div className='container-fluid'>
            <nav className='navbar navbar-expand-md navbar-light '>
              <Link href='/'>
                <a className='navbar-brand'>
                  <img src='../images/logo-2.png' alt='Logo' />
                </a>
              </Link>

              <div className='nav-widget-form nav-widget-form-bg'>
                <form className='search-form'>
                  <input
                    type='search'
                    className='form-control'
                    placeholder='Search items, Creators '
                  />
                  <button type='submit'>
                    <i className='ri-search-line'></i>
                  </button>
                </form>
              </div>

              <div
                className='collapse navbar-collapse mean-menu'
                id='navbarSupportedContent'
              >
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <Link href='/' activeClassName='active'>
                      <a className='nav-link'>Home</a>
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link href='/auction' activeClassName='active'>
                      <a className='nav-link'>Live Auction</a>
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <a href='#' className='nav-link'>
                      Products
                      <i className='ri-arrow-down-s-line'></i>
                    </a>
                    <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <Link href='/collection' activeClassName='active'>
                          <a className='nav-link'>Products</a>
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link
                          href='/create-collection'
                          activeClassName='active'
                        >
                          <a className='nav-link'>Create Product</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>

                <div className='others-options'>
                  <ul className='optional-item-list'>
                    <li>
                      <Link href='/create-collection' activeClassName='active'>
                        <a>Create</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/add-wallet' activeClassName='active'>
                        <a className='active'>Connect Wallet</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className='mobile-nav'>
          <div
            className='search-btn global-pointer'
            onClick={() => toggleSearchModal()}
          >
            <a data-bs-toggle='modal' data-bs-target='#searchmodal'>
              <i className='ri-search-line'></i>
            </a>
          </div>
        </div>

        <div className='side-nav-responsive'>
          <div className='container-max'>
            <div className='dot-menu' onClick={() => toggleWallet()}>
              <div className='circle-inner'>
                <div className='circle circle-one'></div>
                <div className='circle circle-two'></div>
                <div className='circle circle-three'></div>
              </div>
            </div>

            <div className={showWallet ? 'container active' : 'container'}>
              <div className='side-nav-inner'>
                <div className='side-nav justify-content-center align-items-center'>
                  <div className='side-nav-item'>
                    <ul className='optional-item-list'>
                      <li>
                        <Link
                          href='/create-collection'
                          activeClassName='active'
                        >
                          <a>Create</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/add-wallet' activeClassName='active'>
                          <a className='active'>Connect Wallet</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SearchModal
        showSearchModal={showSearchModal}
        toggleSearchModal={toggleSearchModal}
      />
    </>
  );
};

export default NavbarTwo;
