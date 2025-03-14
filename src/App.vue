<script setup>

import Toolbar from "@/portfolio/components/toolbar.component.vue";
import Homepage from "@/portfolio/pages/homepage.component.vue";
import Footer from "@/portfolio/components/footer.component.vue";

</script>

<template>
  <main>
    <Toolbar />
    <Homepage />
    <Footer />
  </main>
</template>

<style scoped>
main {
  margin-top: 50px;
}

</style>
