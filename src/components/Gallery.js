import React from 'react';
import './Gallery.css';
import CardItem from './CardItem';

function Gallery() {
  return (
    <div className='cards'>
      <h1>Our moments!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={process.env.PUBLIC_URL + '/images/image0.jpg'}
              text='The day we got married'
              label='2019'
              path='/services'
            />            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={process.env.PUBLIC_URL + '/images/image0.jpg'}
              text='The day we got married'
              label='2019'
              path='/services'
            />
            <CardItem
              src={process.env.PUBLIC_URL + '/images/image1.jpg'}
              text='The day we got married'
              label='2019'
              path='/services'
            />
          </ul>     
          <ul className='cards__items'>
            <CardItem
              src={process.env.PUBLIC_URL + '/images/image0.jpg'}
              text='The day we got married'
              label='2019'
              path='/services'
            />
            <CardItem
              src={process.env.PUBLIC_URL + '/images/image1.jpg'}
              text='The day we got married'
              label='2019'
              path='/services'
            />
          </ul>          
        </div>
      </div>
    </div>
  );
}

export default Gallery;