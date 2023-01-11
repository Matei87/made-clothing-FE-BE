import React from 'react';

import { Link } from 'react-router-dom';
import { HiOutlineHeart } from 'react-icons/hi';
import ContentLoader from 'react-content-loader';
//redux
import { connect } from 'react-redux';
import { addFavorite } from '../../redux/favorite/favorite.actions';
import {
  selectShopLoading,
  selectShopMen,
} from '../../redux/shop/shop.selector';

const Men = ({ men, loading, favorite, addFavorite }) => {
  let favoritesId = favorite.map((x) => x.id);

  return (
    <div className='collection-page'>
      <h2 className='collection-title'>Men</h2>
      <div className='collection-items'>
        {!loading &&
          men &&
          men.items.map((item) => (
            <div className='collection-item' key={item.id}>
              <div className='image-wrapper'>
                <Link
                  to={`${item.name.split(' ').join('-').toLowerCase()}`}
                  state={item}
                >
                  <img src={item.image} alt='men' />
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
        <ContentLoader viewBox='0 0 400 550'>
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
          <rect x='296' y='330' rx='0' ry='0' width='90' height='100' />

          <rect x='10' y='440' rx='0' ry='0' width='90' height='100' />
          <rect x='106' y='440' rx='0' ry='0' width='90' height='100' />
          <rect x='200' y='440' rx='0' ry='0' width='90' height='100' />
          <rect x='296' y='440' rx='0' ry='0' width='90' height='100' />
        </ContentLoader>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addFavorite: (item) => dispatch(addFavorite(item)),
});

const mapStateToProps = (state) => ({
  men: selectShopMen(state),
  loading: selectShopLoading(state),
  favorite: state.favorite.favoriteItems,
});

const ShowTheLocationWithRouter = Men;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowTheLocationWithRouter);
