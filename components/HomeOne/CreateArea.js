import Link from 'next/link';

const CreateArea = () => {
  return (
    <>
      <div className='create-area pt-100 pb-70'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>Create And Sell Your NFTs</h2>
          </div>

          <div className='row align-items-center pt-45'>
            <div className='col-lg-6'>
              <div className='create-img'>
                <img src='../images/create/create-img.png' alt='Images' />
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='create-card-right pl-20'>
                <div className='row justify-content-center'>
                  <div className='col-lg-6 col-6'>
                    <div className='create-card'>
                      <img
                        src='../images/create/create-icon1.png'
                        alt='Images'
                      />
                      <h3> <Link href='/add-wallet'>
                        <a>Set Up Your Wallet</a></Link>
                      </h3>
                      <p>
                        connect wallet by clicking the wallet icon in the top
                        right corner. Learn about the wallets we support.
                      </p>
                    </div>
                  </div>

                  <div className='col-lg-6 col-6'>
                    <div className='create-card'>
                      <img
                        src='../images/create/create-icon2.png'
                        alt='Images'
                      />
                      <h3><Link href='/create-collection'>
                        <a>
                          Create Your Collection
                        </a></Link>
                      </h3>
                      <p>
                        Click Create and Add social links, a description,
                        profile & banner images, and set a secondary sales fee.
                      </p>
                    </div>
                  </div>

                  <div className='col-lg-6 col-6'>
                    <div className='create-card'>
                      <img
                        src='../images/create/create-icon3.png'
                        alt='Images'
                      />
                      <h3><Link href='/help-center'>
                        <a> Add Your NFTs</a></Link>
                      </h3>
                      <p>
                        Upload your work (image, video, audio, or 3D art), add a
                        title and description, and customize your NFTs
                      </p>
                    </div>
                  </div>

                  <div className='col-lg-6 col-6'>
                    <div className='create-card'>
                      <img
                        src='../images/create/create-icon4.png'
                        alt='Images'
                      />
                      <h3><Link href='/activity'>
                        <a>List Them For Sale</a></Link>
                      </h3>
                      <p>
                        Choose between auctions, fixed-price listings, and
                        declining-price listings. You choose how you want to
                        sell your NFTs
                      </p>
                    </div>
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

export default CreateArea;
