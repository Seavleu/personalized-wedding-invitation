<template>
  <nav class="menu">
    <ul>
      <li v-for="item in menuItems" :key="item.id">
        <a
          href="#"
          @click.prevent="scrollToSection(item.id)"
          :class="{ active: currentSection === item.id }"
        >
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
      handleScroll(); // Initialize active section on load
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
  padding: 0.5rem 1rem;

  ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      a {
        text-decoration: none;
        color: #333;
        font-weight: bold;
        font-size: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 25px;
        transition: all 0.3s ease;

        &:hover {
          color:#fac34c;
          background-color: rgba(255, 238, 0, 0.1);
        }

        &.active {
          color: #fff;
          background-color: #fac34c;
          box-shadow: 0 4px 8px #FFF8E8;
        }
      }
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    ul {
      gap: 1rem;

      li a {
        font-size: 0.9rem;
        padding: 0.4rem 0.8rem;
      }
    }
  }
}
</style>
