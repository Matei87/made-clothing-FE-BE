import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopLoading = createSelector(
  [selectShop],
  (shop) => shop.loading
);

export const selectShopWomen = createSelector(
  [selectShop],
  (shop) => shop?.collections[0]?.Women
);

export const selectShopMen = createSelector(
  [selectShop],
  (shop) => shop.collections[0]?.Men
);

export const selectShopHeader = createSelector(
  [selectShop],
  (shop) => shop.collections[0]?.header
);
