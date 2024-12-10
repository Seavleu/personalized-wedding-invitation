<template>
  <nav class="menu">
    <ul>
      <li v-for="item in menuItems" :key="item.id">
        <a href="#" @click.prevent="scrollToSection(item.id)" :class="{ active: currentSection === item.id }">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "MenuComponent",
  setup() {
    const menuItems = [
      { id: "hero", label: "សំបុត្រ" },
      { id: "invitation", label: "អញ្ជើញ" },
      { id: "schedule", label: "កម្មវិធី" },
      { id: "location", label: "ទីតាំង" },
      { id: "gallery", label: "វិចិត្រសាល" },
      { id: "wishes", label: "ជូនពរ" },
    ];

    const currentSection = ref("");

    const scrollToSection = (id: string) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    const handleScroll = () => {
      let sectionFound = "";
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (
          section &&
          section.getBoundingClientRect().top <= window.innerHeight / 2
        ) {
          sectionFound = item.id;
        }
      });
      currentSection.value = sectionFound;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); 
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return { menuItems, scrollToSection, currentSection };
  },
});
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  padding: 15px 20px; // Reduced padding for all screens

  ul {
    display: flex;
    gap: 8px; // Slightly reduced gap
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      a {
        text-decoration: none;
        color: #5b7639;
        font-weight: bold;
        font-size: 1rem;
        padding: 0.5rem 1rem; // Base padding
        border-radius: 25px;
        transition: all 0.3s ease;

        &:hover {
          color: #fac34c;
          background-color: rgba(255, 238, 0, 0.1);
        }

        &.active {
          color: #5b7639;
          background-color: #fac34c;
          box-shadow: 0 4px 8px rgba(250, 195, 76, 0.5);
        }
      }
    }
  }

  // Media query for tablets
  @media (max-width: 768px) {
    padding: 10px 15px; // Further reduce padding
    ul {
      gap: 5px;

      li a {
        font-size: 0.9rem; // 10% smaller font
        padding: 0.4rem 0.8rem; // Reduced padding
      }
    }
  }

  // Media query for mobile screens
  @media (max-width: 480px) {
    padding: 8px 10px; // 30% reduction overall
    ul {
      gap: 3px; // Smaller gap

      li a {
        font-size: 0.7rem; // 30% smaller font size
        padding: 0.3rem 0.6rem; // 30% smaller padding
        border-radius: 15px; // Adjust border radius for smaller look
      }
    }
  }
}
</style>
