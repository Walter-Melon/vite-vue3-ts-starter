<template>
  <div class="h-screen">
    <TheNavigation />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import TheNavigation from '@/layouts/TheNavigation.vue';

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>
