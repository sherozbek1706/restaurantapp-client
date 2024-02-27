import { createSlice } from "@reduxjs/toolkit";

export const korzinkaSlice = createSlice({
  name: "korzinka",
  initialState: { cart: [], order: { price: 0, products: [] } },
  reducers: {
    add: (state, action) => {
      let product = {};
      state.cart.push(action.payload);

      let { id, price } = action.payload;
      let exist = state.order?.products.findIndex((el) => el?.id == id);
      let count = state.cart.filter((el) => el?.id == id).length;

      if (exist !== -1) {
        state.order.products.splice(exist, 1);
      }

      product.id = id;
      product.product = action.payload;
      product.price = price;
      product.count = count;
      product.total = +(price * count).toFixed(2);

      state.order.products.push(product);
      let total = 0;
      state.order.products.forEach((elem) => {
        total += elem.price * elem.count;
      });

      state.order.price = total;
      state.order.products.sort((a, b) => a.id - b.id);
    },
    remove: (state, action) => {
      let id = action.payload;
      let cart = state.cart;
      let { price, products } = state.order;

      let exist = cart.find((el) => el.id == id);

      while (exist) {
        cart.forEach((elem, idx) => {
          if (elem.id == id) {
            cart.splice(idx, 1);
          }
        });

        exist = cart.find((el) => el.id == id);
      }

      let product_index = products.findIndex((el) => el.id == id);
      products.splice(product_index, 1);

      let total = 0;
      state.order.products.forEach((elem) => {
        total += elem.price * elem.count;
      });

      state.order.price = total;
    },
    minus: (state, action) => {
      let id = action.payload;
      let cart = state.cart;
      let { products } = state.order;

      let product_cart_index = cart.findIndex((el) => el.id == id);

      cart.splice(product_cart_index, 1);

      let product_index = products.findIndex((el) => el.id == id);
      let product_obj = products.find((el) => el.id == id);

      if (product_obj.count > 1) {
        products[product_index].count -= 1;
      } else {
        products.splice(product_index, 1);
      }

      let total = 0;
      state.order.products.forEach((elem) => {
        total += elem.price * elem.count;
      });
      state.order.price = total;
    },
  },
});

export const { add, remove, minus } = korzinkaSlice.actions;
export default korzinkaSlice.reducer;
