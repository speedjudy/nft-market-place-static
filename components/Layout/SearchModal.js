import React from 'react';

const SearchModal = ({showSearchModal,toggleSearchModal}) => {
  return (
    <>
      <div
        className={showSearchModal ? 'modal fade fade-scale searchmodal show':'modal fade fade-scale searchmodal'}
        id='searchmodal'
        tabIndex='-1'
        role='dialog'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button type='button' className='close' data-bs-dismiss='modal' onClick={()=>toggleSearchModal()}>
                <i className='ri-close-line'></i>
              </button>
            </div>
            <div className='modal-body'>
              <form className='modal-search-form'>
                <input
                  type='search'
                  className='search-field'
                  placeholder='Search...'
                />
                <button type='submit'>
                  <i className='ri-search-line'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
