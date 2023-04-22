import { defineStore } from "pinia";

//data structure product in array products
interface Product {
  name: String,
  price: Number
}

export const useBasket = defineStore('basket', {
  state: () => ({
    products: [] as Product[],
  }),
  actions: {
    //add product to products 
    addProduct(nameValue: String, priceValue: Number ) {
      this.$state.products.push({
        name: nameValue,
        price: priceValue
      })

      console.log(this.$state.products)
    }
  }
})