import { createPinia } from "pinia";

const store = createPinia();

export default store;

export { default as useAuthStore } from "./useAuthStore.js";
export { default as useCartStore } from "./useCartStore.js";
export { default as useProductStore } from "./useProductStore.js";
export { default as useWishlistStore } from "./useWishlistStore.js";
