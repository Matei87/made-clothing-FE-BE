import React from 'react';
import './Homepage.scss';

import Header from '../../components/header/header';
import Carousel from '../../components/carousel/carousel';
import Spinner from '../../components/spinner/spinner';
import { connect } from 'react-redux';

const Homepage = ({ items }) => {
  if (!items) {
    return <Spinner />;
  } else {
    return (
      <div className='homepage'>
        <Header Bags={items.header} />
        <h1 className='collection-title'>New Products</h1>
        <Carousel women={items['Women']} men={items['Men']} />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  items: state.shop.collections[0],
});

export default connect(mapStateToProps)(Homepage);
