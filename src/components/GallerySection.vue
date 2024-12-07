<template>
    <section class="gallery-section">
      <h2 class="gallery-title">កូនកំលោះ កូនក្រមំុ</h2>
      <div class="gallery-grid">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="gallery-item"
          :class="`gallery-item-${index % 6}`"
        >
          <img :src="getImagePath(image)" :alt="'Gallery Image ' + (index + 1)" />
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "GallerySection",
    setup() {
      const images = [
        "gallery1.jpg",
        "gallery2.jpg",
        "gallery3.jpg",
        "gallery4.jpg",
        "gallery5.jpg",
        "gallery6.jpg",
        "gallery7.jpg",
        "gallery8.jpg",
      ];
  
      const getImagePath = (image: string) => {
        return new URL(`../assets/images/${image}`, import.meta.url).href;
      };
  
      return { images, getImagePath };
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .gallery-section {
    padding: 4rem 1rem;
    background: #ffffff;
    text-align: center;
  
    .gallery-title { 
      font-weight: bold; 
      color: #333;
      animation: fadeInDown 1s ease-out;
      font-size: 2.5rem; 
      font-weight: bold;
      margin-bottom: 1rem;

      @media (max-width: 768px) {
        font-size: 1.8rem;  
      }

      @media (max-width: 480px) {
        font-size: 1.5rem;  
      }
    }
  
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1rem;
      padding: 0 1rem;
    }
  
    .gallery-item {
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
  
      &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      }
  
      img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Ensures images fill their container while maintaining aspect ratio */
        display: block;
      }
  
      /* Sophisticated layout for desktop and mobile */
      &.gallery-item-0 {
        grid-column: span 2;
        grid-row: span 2;
      }
  
      &.gallery-item-1 {
        grid-column: span 1;
        grid-row: span 1;
      }
  
      &.gallery-item-2 {
        grid-column: span 2;
        grid-row: span 1;
      }
  
      &.gallery-item-3 {
        grid-column: span 1;
        grid-row: span 2;
      }
  
      &.gallery-item-4 {
        grid-column: span 1;
        grid-row: span 1;
      }
  
      &.gallery-item-5 {
        grid-column: span 1;
        grid-row: span 1;
      }
    }
  
    /* Responsive adjustments for mobile */
    @media (max-width: 768px) {
      .gallery-grid {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); /* Smaller columns for mobile */
      }
  
      .gallery-item {
        /* Adjust layout for mobile but keep sophistication */
        &.gallery-item-0 {
          grid-column: span 2;
          grid-row: span 1; /* Reduce height span for mobile */
        }
  
        &.gallery-item-1 {
          grid-column: span 1;
          grid-row: span 1;
        }
  
        &.gallery-item-2 {
          grid-column: span 2;
          grid-row: span 1;
        }
  
        &.gallery-item-3 {
          grid-column: span 1;
          grid-row: span 1; /* Simplify layout on smaller screens */
        }
  
        &.gallery-item-4 {
          grid-column: span 2;
          grid-row: span 1;
        }
  
        &.gallery-item-5 {
          grid-column: span 1;
          grid-row: span 1;
        }
      }
    }
  
    /* Animations */
    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  </style>
  