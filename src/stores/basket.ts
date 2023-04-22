import { defineStore } from "pinia";

//data structure product in array products
interface Product {
     name: String;
     price: Number;
     numberOfProduct: Number;
}

export const useBasket = defineStore("basket", {
     state: () => ({
          products: [] as Product[],
     }),
     getters: {
          calculateTotalPrice: (state) => {
               let totalPrice = 0;
               state.products.forEach((product) => {
                    let fullPriceProduct;
                    fullPriceProduct = product.numberOfProduct * product.price;
                    totalPrice += fullPriceProduct;
               });
               return totalPrice;
          },
     },
     actions: {
          //add product to products
          addProduct(nameValue: String, priceValue: Number, numberValue: Number) {
               let productExist;

               if (this.$state.products.length === 0) {
                    this.$state.products.push({
                         name: nameValue,
                         price: priceValue,
                         numberOfProduct: numberValue,
                    });
                    productExist = true;
               } else {
                    this.$state.products.map((product) => {
                         if (product.name === nameValue) {
                              productExist = true;
                              product.numberOfProduct++;
                         } else {
                              productExist = false;
                         }
                    });
               }

               if (!productExist) {
                    this.$state.products.push({
                         name: nameValue,
                         price: priceValue,
                         numberOfProduct: numberValue,
                    });
               }
          },

          //discount number of product
          discountProduct(nameProduct: String) {
               this.$state.products.forEach((product) => {
                    if (product.name === nameProduct) {
                         if (product.numberOfProduct !== 1) {
                              product.numberOfProduct--;
                         }
                    }
               });
          },

          //count number of product
          countProduct(nameProduct: String) {
               this.$state.products.forEach((product) => {
                    if (product.name === nameProduct) {
                         product.numberOfProduct++;
                    }
               });
          },

          //remove product from products
          removeProduct(nameProduct: String) {
               this.$state.products.forEach((product, index) => {
                    if (product.name === nameProduct) {
                         this.$state.products.splice(index, 1);
                    }
               });
          },
     },
});
