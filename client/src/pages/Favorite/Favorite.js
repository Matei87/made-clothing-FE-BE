import React from 'react';

import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import ContentLoader from 'react-content-loader';
//redux
import { connect } from 'react-redux';
import { removeFavorite } from '../../redux/favorite/favorite.actions';

const Favorite = ({ favorite, removeFavorite }) => {
  return (
    <>
      <div className='collection-page'>
        <h2 className='collection-title'>Favorite Items</h2>

        {favorite.length > 0 ? (
          <div className='collection-items'>
            {favorite ? (
              favorite.map((item) => (
                <div className='collection-item' key={item.id}>
                  <div className='image-wrapper'>
                    <Link
                      to={`${item.name.split(' ').join('-').toLowerCase()}`}
                      state={item}
                      preventScrollReset={true}
                    >
                      <img src={item.image} alt='favorite' />
                    </Link>
                  </div>
                  <div className='content-over'>
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                    <span
                      className='heart'
                      onClick={() => removeFavorite(item)}
                    >
                      <RiDeleteBin6Line />
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <ContentLoader viewBox='0 0 100 115'>
                <rect x='0' y='0' rx='0' ry='0' width='100' height='115' />
              </ContentLoader>
            )}
          </div>
        ) : (
          <div className='empty-list'>
            <h2>You don`t have favorite items</h2>
            <p>To add products to favorite please go back to the shop.</p>
            <div className='redirect'>
              <Link to='/women' className='btn btn-outline-primary'>
                Women
              </Link>
              <Link to='/men' className='btn btn-outline-primary'>
                Men
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeFavorite: (item) => dispatch(removeFavorite(item)),
});

const mapStateToProps = (state) => ({
  favorite: state.favorite.favoriteItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
