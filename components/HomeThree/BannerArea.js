import Link from 'next/link';

const BannerArea = () => {
  return (
    <>
      <div className='banner-area-three'>
        <div className='container'>
          <div className='banner-content-three'>
            <h1>The World Of Creative & Rare Digital Artwork</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquam etiam rhoncus aenean a iaculis aliquet rhoncus sed.
              Accumsan sodales consectetur.
            </p>
            <div className='banner-btn'>
              <Link href='/about'>
                <a className='default-btn border-radius-5'>Explore More</a>
              </Link>

              <Link href='/add-wallet'>
                <a className='default-btn two border-radius-5'>Connect NFT</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerArea;
