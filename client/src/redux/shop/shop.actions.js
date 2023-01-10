export const fetchProducts = () => {
  return async (dispatch) => {
    fetch('/items')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'GET_PRODUCTS', payload: data }))
      .catch((error) => console.log(error));
  };
};
