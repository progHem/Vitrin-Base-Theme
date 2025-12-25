// Main CSS
import "./index.css";

// Alpine.js
import Alpine from "alpinejs";
import collapse from "@alpinejs/collapse";

// Register Alpine plugins
Alpine.plugin(collapse);

// Make Alpine available globally
window.Alpine = Alpine;

// Start Alpine
Alpine.start();

// Swiper (import when needed)
export { Swiper } from "swiper";
export { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// PhotoSwipe (import when needed)
export { default as PhotoSwipe } from "photoswipe";
export { default as PhotoSwipeLightbox } from "photoswipe/lightbox";
