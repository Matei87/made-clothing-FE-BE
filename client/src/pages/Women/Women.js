import React from 'react';
import './Women.scss';

import { Link } from 'react-router-dom';
import { HiOutlineHeart } from 'react-icons/hi';
import ContentLoader from 'react-content-loader';
//redux
import { connect } from 'react-redux';
import { addFavorite } from '../../redux/favorite/favorite.actions';
import {
  selectShopLoading,
  selectShopWomen,
} from '../../redux/shop/shop.selector';

const Women = ({ favorite, addFavorite, women, loading }) => {
  let favoritesId = favorite.map((x) => x.id);

  return (
    <div className='collection-page'>
      <h2 className='collection-title'>Women</h2>
      <div className='collection-items'>
        {!loading &&
          women &&
          women.items.map((item) => (
            <div className='collection-item' key={item.id}>
              <div className='image-wrapper'>
                <Link
                  to={`${item.name.split(' ').join('-').toLowerCase()}`}
                  state={item}
                >
                  <img src={item.image} alt='women' />
                </Link>
              </div>
              <div className='content-over'>
                <span>{item.name}</span>
                <span>${item.price}</span>
                <span
                  className={
                    favoritesId.find((x) => x === item.id)
                      ? 'heart active'
                      : 'heart'
                  }
                  onClick={() => addFavorite(item)}
                >
                  <HiOutlineHeart />
                </span>
              </div>
            </div>
          ))}
      </div>
      {loading && (
        <ContentLoader viewBox='0 0 400 440'>
          <rect x='10' y='0' rx='0' ry='0' width='90' height='100' />
          <rect x='106' y='0' rx='0' ry='0' width='90' height='100' />
          <rect x='201' y='0' rx='0' ry='0' width='90' height='100' />
          <rect x='296' y='0' rx='0' ry='0' width='90' height='100' />

          <rect x='10' y='110' rx='0' ry='0' width='90' height='100' />
          <rect x='106' y='110' rx='0' ry='0' width='90' height='100' />
          <rect x='200' y='110' rx='0' ry='0' width='90' height='100' />
          <rect x='296' y='110' rx='0' ry='0' width='90' height='100' />

          <rect x='10' y='220' rx='0' ry='0' width='90' height='100' />
          <rect x='106' y='220' rx='0' ry='0' width='90' height='100' />
          <rect x='200' y='220' rx='0' ry='0' width='90' height='100' />
          <rect x='296' y='220' rx='0' ry='0' width='90' height='100' />

          <rect x='10' y='330' rx='0' ry='0' width='90' height='100' />
          <rect x='106' y='330' rx='0' ry='0' width='90' height='100' />
          <rect x='200' y='330' rx='0' ry='0' width='90' height='100' />
        </ContentLoader>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addFavorite: (item) => dispatch(addFavorite(item)),
});

const mapStateToProps = (state) => ({
  loading: selectShopLoading(state),
  women: selectShopWomen(state),
  favorite: state.favorite.favoriteItems,
});

const ShowTheLocationWithRouter = Women;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowTheLocationWithRouter);
