import ShopActionsTypes from './shop.types';

const INITIAL_STATE = {
  collections: [],
  loading: false,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionsTypes.GET_PRODUCTS:
      return {
        loading: false,
        collections: action.payload,
      };
    case ShopActionsTypes.LOADING_PRODUCTS:
      return {
        collections: [],
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
