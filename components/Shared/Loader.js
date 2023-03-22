import React from 'react';

const Loader = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className='preloader'>
          <div className='spinner'>
            <div className='dot1'></div>
            <div className='dot2'></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
