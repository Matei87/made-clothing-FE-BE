import React from 'react';
import './ItemDetails.scss';

import { useNavigate, useLocation } from 'react-router-dom';
import { HiArrowLeft, HiOutlineHeart } from 'react-icons/hi';
import ContentLoader from 'react-content-loader';
//redux
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { addFavorite } from '../../redux/favorite/favorite.actions';

const ItemDetails = ({ addItem, favorite, addFavorite }) => {
  let navigate = useNavigate();
  let location = useLocation();

  const { name, image, price, color, brand, description } = location.state;

  let favoritesId = favorite.map((x) => x.id);

  return (
    <>
      <div className='item-details container'>
        <div className='row'>
          <div className='col-sm-10 col-md-12 col-lg-10'>
            <div className='btn btn-primary' onClick={() => navigate(-1)}>
              <HiArrowLeft /> Back
            </div>
          </div>

          <div className='col-sm-10 col-md-6 col-lg-5'>
            <div className='image-wrapper'>
              {image ? (
                <img src={image} alt='details' />
              ) : (
                <ContentLoader viewBox='0 0 100 117'>
                  <rect x='0' y='0' rx='0' ry='0' width='100' height='117' />
                </ContentLoader>
              )}
            </div>
          </div>
          <div className='col-sm-10 col-md-6 col-lg-5'>
            <div className='w-70'>
              <p className='brand'>
                Brand: <span className='brand-inner'>{brand}</span>
              </p>
              <h2 className='name'>{name}</h2>
              <p className='price'>
                Price: <span className='price-inner'>${price}</span>
              </p>
              <p className='colour'>
                Color: <span className='colour-inner'>{color}</span>
              </p>
              <p className='addToCart-svg'>
                <button
                  className='addToCart btn'
                  onClick={() => addItem(location.state)}
                >
                  Add to cart
                </button>
                <span
                  className={
                    favoritesId.find((x) => x === location.state.id)
                      ? 'heart active'
                      : 'heart'
                  }
                  onClick={() => addFavorite(location.state)}
                >
                  <HiOutlineHeart />
                </span>
              </p>
            </div>

            <div>
              <h3>Description:</h3>
              <p className='m-0'>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  addFavorite: (item) => dispatch(addFavorite(item)),
});

const mapStateToProps = (state) => ({
  favorite: state.favorite.favoriteItems,
});

const ShowTheLocationWithRouter = ItemDetails;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowTheLocationWithRouter);
