<template>
  <nav class="menu">
    <ul>
      <li><a href="#hero" @click.prevent="scrollToSection('hero')">Hero</a></li>
      <li><a href="#invitation" @click.prevent="scrollToSection('invitation')">Invitation</a></li>
      <li><a href="#schedule" @click.prevent="scrollToSection('schedule')">Schedule</a></li>
      <li><a href="#location" @click.prevent="scrollToSection('location')">Location</a></li>
      <li><a href="#gallery" @click.prevent="scrollToSection('gallery')">Gallery</a></li>
      <li><a href="#wishes" @click.prevent="scrollToSection('wishes')">Wishes</a></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuComponent",
  methods: {
    scrollToSection(id: string) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth", // Smooth scrolling
          block: "start",
        });
      }
    },
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
  background-color: rgba(255, 255, 255, 0.9); /* Slightly transparent */
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;

  ul {
    display: flex;
    gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    a {
      text-decoration: none;
      color: #333;
      font-weight: bold;
      transition: color 0.3s;

      &:hover {
        color: #007bff; /* Adjust to your primary color */
      }
    }
  }
}
</style>
