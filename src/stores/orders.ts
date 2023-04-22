import { defineStore } from "pinia";

interface Product {
     name: String;
     price: Number;
     numberOfProduct: Number;
}

interface Order {
     id: Number;
     date: String;
     time: String;
     price: Number;
     status: String;
     products: Product[];
}

export const useOrders = defineStore("orders", {
     state: () => ({
          orders: [] as Order[],
     }),
     actions: {
          //add order to orders
          addOrder(products: Product[], totalPrice: Number) {
               const now = new Date();

               const idGenerate = Math.round(Math.random() * 10000);
               const dateGenerate = `${now.getDate()}.${now.getMonth()}.${now.getFullYear()}`;
               const timeGenerate = `${now.getHours()}:${now.getMinutes()}`;

               this.$state.orders.push({
                    id: idGenerate,
                    date: dateGenerate,
                    time: timeGenerate,
                    price: totalPrice,
                    status: "W trakcie przygotowywania",
                    products: products,
               });
          },
     },
});
