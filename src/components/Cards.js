import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Agricultural Information</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
              src='/card wheat.jpg'
              alt = 'Wheat Pic'
              text='Bread and durum wheat (Triticum aestivum and T. turgidum) were domesticated in the Near and Middle East.'
              label='Wheat'
              path='/wheat'
            />
            <CardItem
              src='/card Maize.jpg'
              alt = 'Maize pic'
              text='Maize (Zea Mays) originates in the Andean region of Central America.'
              label='Maize'
              path='/maize'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/card cotton.jpg'
              text='Cotton (Gossypium hirsutum) is grown for fibre and seed.'
              label='Cotton'
              path='/cotton'
            />
            <CardItem
              src='/card groundnut.jpg'
              text='Groundnut (Arachis hypogaea) originates from South America. '
              label='Groundnut'
              path='/groundnut'
            />
            <CardItem
              src='/card sugercane.jpg'
              text='The present area of sugarcane (Saccarum officinarum) is about 13 million'
              label='Sugercane'
              path='/sugercane'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;