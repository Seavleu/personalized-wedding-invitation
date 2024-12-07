<template>
  <section class="gallery-section">
    <h2 class="gallery-title">កូនកំលោះ កូនក្រមុំ</h2>
    <div class="gallery-grid">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="gallery-item"
        :class="`gallery-item-${index % 6}`"
        :style="{ '--delay': index }"
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

  /* Title Animation */
  .gallery-title {
    font-weight: bold;
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    animation: fadeInDown 1s ease-out;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  /* Grid Layout */
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    padding: 0 1rem;

    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
  }

  /* Grid Items with Animations */
  .gallery-item {
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transform: scale(0.95);
    opacity: 0;
    animation: fadeInUp 1s ease-out forwards;
    animation-delay: calc(var(--delay) * 0.2s); // Staggered Animation

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.5s ease, box-shadow 0.5s ease;
    }

    &:hover {
      img {
        transform: scale(1.1) rotate(2deg);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      }
    }

    &.gallery-item-0 {
      grid-column: span 2;
      grid-row: span 2;
    }

    &.gallery-item-1 {
      grid-column: span 1;
      grid-row: span 2;
    }

    &.gallery-item-2 {
      grid-column: span 2;
      grid-row: span 2;
    }

    &.gallery-item-3 {
      grid-column: span 1;
      grid-row: span 2;
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

  /* Keyframes for Animations */
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

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>