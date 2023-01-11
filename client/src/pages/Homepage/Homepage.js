import React from 'react';
import './Homepage.scss';

import Header from '../../components/header/header';
import Carousel from '../../components/carousel/carousel';
import ContentLoader from 'react-content-loader';
//redux
import { connect } from 'react-redux';
import {
  selectShopLoading,
  selectShopWomen,
  selectShopMen,
  selectShopHeader,
} from '../../redux/shop/shop.selector';

const Homepage = ({ loading, women, men, header }) => {
  return (
    <div className='homepage'>
      {!loading && header ? (
        <Header Bags={header} />
      ) : (
        <ContentLoader viewBox='0 0 400 290'>
          <rect x='0' y='0' rx='0' ry='0' width='400' height='290' />
        </ContentLoader>
      )}

      <h1 className='collection-title'>New Products</h1>
      {!loading && women && men ? (
        <Carousel women={women} men={men} />
      ) : (
        <ContentLoader viewBox='0 0 400 60'>
          <rect x='0' y='0' rx='0' ry='0' width='400' height='60' />
        </ContentLoader>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  women: selectShopWomen(state),
  men: selectShopMen(state),
  header: selectShopHeader(state),
  loading: selectShopLoading(state),
});

export default connect(mapStateToProps)(Homepage);
