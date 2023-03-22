import Link from 'next/link';

const CollectionsArea = () => {
  return (
    <>
      <div className='collections-area pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>Hot Collections</h2>
          </div>

          <div className='row pt-45'>
            <div className='col-lg-3 col-6'>
              <div className='collections-card'>
                <Link href='/collection'>
                  <a>
                    <img
                      src='../images/collections/collections-img1.png'
                      alt='Images'
                    />
                  </a>
                </Link>
                <div className='content'>
                  <div className='collections-user'>
                    <img
                      src='../images/collections/collections-user1.png'
                      alt='Images'
                    />
                  </div>
                  <h3>
                    
                    <Link href='/collection'>
                      <a>Wrapped Cryptopunks</a>
                    </Link>
                  </h3>
                  <span>ETH - 11,256</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-6'>
              <div className='collections-card'>
                <Link href='/collection'>
                  <a>
                    <img
                      src='../images/collections/collections-img2.png'
                      alt='Images'
                    />
                  </a>
                </Link>
                <div className='content'>
                  <div className='collections-user'>
                    <img
                      src='../images/collections/collections-user2.png'
                      alt='Images'
                    />
                  </div>
                  <h3>
                    
                    <Link href='/collection'>
                      <a>Art Blocks</a>
                    </Link>
                  </h3>
                  <span>ETH - 12,256</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-6'>
              <div className='collections-card'>
                <Link href='/collection'>
                  <a>
                    <img
                      src='../images/collections/collections-img3.png'
                      alt='Images'
                    />
                  </a>
                </Link>
                <div className='content'>
                  <div className='collections-user'>
                    <img
                      src='../images/collections/collections-user3.png'
                      alt='Images'
                    />
                  </div>
                  <h3>
                    
                    <Link href='/collection'>
                      <a>Hashmasks</a>
                    </Link>
                  </h3>
                  <span>ETH - 11,764</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-6'>
              <div className='collections-card'>
                <Link href='/collection'>
                  <a>
                    <img
                      src='../images/collections/collections-img4.png'
                      alt='Images'
                    />
                  </a>
                </Link>
                <div className='content'>
                  <div className='collections-user'>
                    <img
                      src='../images/collections/collections-user4.png'
                      alt='Images'
                    />
                  </div>
                  <h3>
                    
                    <Link href='/collection'>
                      <a>Inventory</a>
                    </Link>
                  </h3>
                  <span>ETH - 13,264</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionsArea;
