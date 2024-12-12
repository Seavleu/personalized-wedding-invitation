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
      "https://cdn.docsie.io/workspace_1Uj8SKn53qXCQCE3L/doc_dfiX2csAgpT6BMmbd/file_O5ZFhK1rdrpV5xcjU/gallery1_2ab9b84e-737c-a8dc-3db2-35911c9a1ab3.jpg",
      "https://cdn.docsie.io/workspace_1Uj8SKn53qXCQCE3L/doc_dfiX2csAgpT6BMmbd/file_RAXJH20XQmbphfg4d/gallery2_310df469-4bf8-b13e-0f54-570beea343cb.jpg",
      "https://cdn.docsie.io/workspace_1Uj8SKn53qXCQCE3L/doc_dfiX2csAgpT6BMmbd/file_GlPa3mnpf5IVlq59R/gallery4_4bdab501-e130-134c-7289-1a3afe093c18.jpg",
      "https://cdn.docsie.io/workspace_1Uj8SKn53qXCQCE3L/doc_dfiX2csAgpT6BMmbd/file_hTuWIyiRVFhUjPlx2/gallery3_d7738337-0305-8758-80ff-6c0080aac10c.jpg",
      "https://cdn.docsie.io/workspace_1Uj8SKn53qXCQCE3L/doc_dfiX2csAgpT6BMmbd/file_Vv5fmAwcHWTw3MXox/gallery5_70632d3d-e4c9-0305-0f36-9496c51f73dd.jpg",
      "https://cdn.docsie.io/workspace_1Uj8SKn53qXCQCE3L/doc_dfiX2csAgpT6BMmbd/file_YZV0iwNEQIKrtflbQ/gallery6_12ac226b-917c-a2af-6d5b-8b907dd24b19.jpg"
    ];

    const getImagePath = (image: string) => {
    // Check if the path is absolute
    if (image.startsWith("http")) {
      return image; // Return the absolute URL as is
    } else {
      return new URL(`../assets/images/jay/${image}`, import.meta.url).href; // Construct relative path for local images
    }
  };

    return { images, getImagePath };
  },
});
</script>

<style lang="scss" scoped>
.gallery-section {
  text-align: center;
  padding: 80px 20px;  
  background: #5b7639;
  text-align: center; 
  background: none; 

  .gallery-title {
    margin-top: 80px;
    font-weight: bold; 
    font-size: 28px;
    margin-bottom: 2rem;
    animation: fadeInDown 1s ease-out;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
    padding: 0 0.5rem;

    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }

    @media (max-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem; 
    }
  }

  .gallery-item { 
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transform: scale(0.95);
    opacity: 0;
    animation: fadeInUp 1s ease-out forwards;
    animation-delay: calc(var(--delay, 0) * 0.2s); 

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    &:hover {
      img {
        transform: scale(1.08) rotate(2deg);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
      }
    }

    &.gallery-item-0 {
      grid-column: span 4;
      grid-row: span 2;
    }

    &.gallery-item-1 {
      grid-column: span 2;
      grid-row: span 1;
    }

    &.gallery-item-2 {
      grid-column: span 2;
      grid-row: span 1;
    }

    &.gallery-item-3 {
      grid-column: span 2;
      grid-row: span 1;
    }

    &.gallery-item-4 {
      grid-column: span 2;
      grid-row: span 2;
    }

    &.gallery-item-5 {
      grid-column: span 2;
      grid-row: span 1;
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
      &.gallery-item-0 {
      grid-column: span 4;
      grid-row: span 1;
    }

    &.gallery-item-1 {
      grid-column: span 3;
      grid-row: span 2;
    }

    &.gallery-item-2 {
      grid-column: span 2;
      grid-row: span 1;
    }

    &.gallery-item-3 {
      grid-column: span 3;
      grid-row: span 1;
    }

    &.gallery-item-4 {
      grid-column: span 3;
      grid-row: span 2;
    }

    &.gallery-item-5 {
      grid-column: span 3;
      grid-row: span 2;
    }
    }
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
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