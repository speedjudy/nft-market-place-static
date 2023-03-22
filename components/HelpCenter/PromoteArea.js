import React, { useState } from 'react';

const PromoteArea = ({ promotedOne, promotedTwo, promotedThree }) => {

  //promoted one
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  //promoted two
  const [clickedTwo, setClickedTwo] = useState(false);

  const toggleTwo = (index) => {
    if (clickedTwo === index) {
      return setClickedTwo(null);
    }
    setClickedTwo(index);
  };

  //promoted three
  const [clickedThree, setClickedThree] = useState(false);

  const toggleThree = (index) => {
    if (clickedThree === index) {
      return setClickedThree(null);
    }
    setClickedThree(index);
  };

  return (
    <>
      <div className='promoted-area pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>Promoted Articles</h2>
          </div>
          <div className='row pt-45 justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='promoted-int-content'>
                <ul className='promoted'>
                  {promotedOne.map((promo, index) => (
                    <li
                      className='promoted-item'
                      key={index}
                      onClick={() => toggle(index)}
                    >
                      <a
                        className={
                          clicked === index
                            ? 'promoted-title active'
                            : 'promoted-title'
                        }
                      >
                        <i className='ri-arrow-right-s-line'></i>
                        {promo.question}
                      </a>
                      {clicked === index && (
                        <div className={clicked === index ? 'show' : ''}>
                          <div className='promoted-content show'>
                            <p>{promo.message}</p>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='promoted-int-content'>
                <ul className='promoted'>
                  {promotedTwo.map((promo, index) => (
                    <li
                      className='promoted-item'
                      key={index}
                      onClick={() => toggleTwo(index)}
                    >
                      <a
                        className={
                          clickedTwo === index
                            ? 'promoted-title active'
                            : 'promoted-title'
                        }
                      >
                        <i className='ri-arrow-right-s-line'></i>
                        {promo.question}
                      </a>
                      {clickedTwo === index && (
                        <div className={clickedTwo === index ? 'show' : ''}>
                          <div className='promoted-content show'>
                            <p>{promo.message}</p>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='promoted-int-content'>
                <ul className='promoted'>
                  {promotedThree.map((promo, index) => (
                    <li
                      className='promoted-item'
                      key={index}
                      onClick={() => toggleThree(index)}
                    >
                      <a
                        className={
                          clickedThree === index
                            ? 'promoted-title active'
                            : 'promoted-title'
                        }
                      >
                        <i className='ri-arrow-right-s-line'></i>
                        {promo.question}
                      </a>
                      {clickedThree === index && (
                        <div className={clickedThree === index ? 'show' : ''}>
                          <div className='promoted-content show'>
                            <p>{promo.message}</p>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PromoteArea.defaultProps = {
  promotedOne: [
    {
      question: 'How Do I Create An Opensea Account?',
      message:
        'Ask especially collecting terminated may son expression collecting lorem may son expression text. Ask especially collecting terminated may son expression colum',
    },
    {
      question: 'How Do I List An NFT To Sell??',
      message:
        'Ask especially collecting terminated may son expression collecting lorem may son expression text. Ask especially collecting terminated may son expression colum',
    },
    {
      question: 'Where Can I Find NFT Sales?',
      message:
        'Ask especially collecting terminated may son expression collecting lorem may son expression text. Ask especially collecting terminated may son expression colum',
    },
  ],

  promotedTwo: [
    {
      question: 'Which Blockchain Does Opensea Support?',
      message:
        'Ask especially collecting terminated may son expression collecting lorem may son expression text. Ask especially collecting terminated may son expression colum',
    },
    {
      question: 'How Do I Create An NFT?',
      message:
        'Ask especially collecting terminated may son expression collecting lorem may son expression text. Ask especially collecting terminated may son expression colum',
    },
    {
      question: 'How Can I Report Fraudulent Content On?',
      message:
        'Ask especially collecting terminated may son expression collecting lorem may son expression text. Ask especially collecting terminated may son expression colum',
    },
  ],

  promotedThree: [
    {
      question: 'How Do Royalties Work?',
      message:
        'Ask especially collecting terminated may son expression collecting lorem may son expression text. Ask especially collecting terminated may son expression colum',
    },
    {
      question: 'How Do I Find My Funds On Polygon?',
      message:
        'Ask especially collecting terminated may son expression collecting lorem may son expression text. Ask especially collecting terminated may son expression colum',
    },
    {
      question: 'How Can I Report Fraudulent Content On?',
      message:
        'Ask especially collecting terminated may son expression collecting lorem may son expression text. Ask especially collecting terminated may son expression colum',
    },
  ],
};

export default PromoteArea;
