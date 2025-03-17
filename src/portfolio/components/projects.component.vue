<script setup>

import { ref } from 'vue';

const projects = ref([
  {
    title: 'project1',
    link: 'https://github.com/PieroD04/Nine-Mens-Morris',
    text: 'project1-desc',
    date: 'project1-date',
    image: 'ninemenmorris.jpg',
    icon: 'pi pi-play'
  },
  {
    title: 'project2',
    link: 'https://github.com/salvadoorssalinas/MateComputacional',
    text: 'project2-desc',
    date: 'project2-date',
    image: 'dijkstra.jpg',
    icon: 'pi pi-angle-double-right'
  },
  {
    title: 'project3',
    link: 'https://github.com/salvadoorssalinas/MusicConnection',
    text: 'project3-desc',
    date: 'project3-date',
    image: 'musicconnection.png',
    icon: 'pi pi-link'
  },
  {
    title: 'project4',
    link: 'https://github.com/jsyumg/TB-ComplejidadAlgoritmica',
    text: 'project4-desc',
    date: 'project4-date',
    image: 'switchs.png',
    icon: 'pi pi-sitemap'
  },
  {
    title: 'project5',
    link: 'https://github.com/PieroD04/cargoapp',
    text: 'project5-desc',
    date: 'project5-date',
    image: 'cargoapp.png',
    icon: 'pi pi-desktop'
  },
  {
    title: 'project6',
    link: 'https://github.com/PieroD04/agroconnect',
    text: 'project6-desc',
    date: 'project6-date',
    image: 'agroconnect.png',
    icon: 'pi pi-desktop'
  },
  {
    title: 'project7',
    link: 'https://github.com/PieroD04/agrosupport',
    text: 'project7-desc',
    date: 'project7-date',
    image: 'agrosupport.png',
    icon: 'pi pi-mobile'
  }
]);

</script>

<template>

  <h2>{{ $t('projects') }}</h2>
  <div id="projects">
    <pv-timeline :value="projects" align="alternate" class="customized-timeline">
      <template #marker="project">
        <span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm">
            <i :class="project.item.icon"></i>
        </span>
      </template>
      <template #content="project">
        <pv-card class="mt-4">
          <template #title>
            {{ $t(project.item.title) }}
          </template>
          <template #subtitle>
            {{ $t(project.item.date) }}
          </template>
          <template #content>
            <img :src="`src/assets/images/${project.item.image}`" :alt="project.item.title" class="shadow-sm" />
            <p>
              {{ $t(project.item.text) }}
            </p>
            <pv-button as="a" :href="project.item.link" target="_blank" text> {{ $t("view-more") }} </pv-button>
          </template>
        </pv-card>
      </template>
    </pv-timeline>

  </div>
</template>

<style scoped>

#projects {
  padding: 0 40px 30px 40px;
}

h2 {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 20px;
}

a {
  text-decoration: none;
  color: #637bc8;
}

img {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}


</style>