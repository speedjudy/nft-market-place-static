import React from 'react';

const HelpWidget = () => {
  return (
    <>
      <div className='help-widget-form'>
        <form className='search-form'>
          <input
            type='search'
            className='form-control'
            placeholder='Search for help'
          />
          <button type='submit'>
            <i className='ri-search-line'></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default HelpWidget;
