<script setup>

import { ref, watch } from 'vue';
import {ProjectService} from "@/portfolio/services/project.service.js";
import { useI18n } from 'vue-i18n';
const { locale, t } = useI18n();

const projects = ref([]);

watch(locale, (newLang) => {
  const language = locale.value;
  projects.value = ProjectService.getProjects(language);
}, { immediate: true});

</script>

<template>

  <h2>{{ t('projects') }}</h2>
  <div id="projects">
    <pv-timeline :value="projects" align="alternate" class="customized-timeline">
      <template #marker="project">
        <span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm">
            <i :class="project.item.icon"></i>
        </span>
      </template>
      <template #content="project">
        <pv-card id="project-card" class="mt-4">
          <template #title>
            {{ project.item.name }}
          </template>
          <template #subtitle>
            {{ project.item.date }}
          </template>
          <template #content>
            <img :src="`/assets/images/${project.item.image}`" :alt="project.item.name" class="shadow-sm" />
            <p>
              {{ project.item.description }}
            </p>
            <pv-button as="a" :href="project.item.link" target="_blank" text> {{ t("view-more") }} </pv-button>
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

#project-card {
  background: rgba(255, 255, 255, 0.1);
}

</style>