import ShopActionsTypes from './shop.types';

export const fetchProducts = () => {
  return async (dispatch) => {
    fetch('/items')
      .then((res) => res.json())
      .then(
        (data) =>
          dispatch({ type: ShopActionsTypes.GET_PRODUCTS, payload: data }),
        dispatch({ type: ShopActionsTypes.LOADING_PRODUCTS, payload: true })
      )
      .catch((error) => console.log(error));
  };
};
