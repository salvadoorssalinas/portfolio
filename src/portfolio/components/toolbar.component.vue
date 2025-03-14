<script setup>
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

const changeLang = (lang) => { locale.value = lang; };

</script>

<template>
  <pv-toolbar id="toolbar-header">
    <template #start>
      <img src="../../assets/images/logo.png" alt="Logo">
      <h1 id="toolbar-title">Salvador Salinas </h1>
    </template>
    <template #end>
      <pv-button @click="changeLang('en')" label="EN" id="lang-button"/>
      <pv-button @click="changeLang('es')" label="ES" id="lang-button"/>
    </template>
  </pv-toolbar>
</template>

<style scoped>

#toolbar-header{
  background-color: rgba(29, 54, 145, 0.7);
  border : none;
  border-radius: 0;
  padding: 5px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

#toolbar-title {
  font-size: 24px;
  color: white;
  margin-left: 10px;
}

img {
  height: 50px;
  margin-right: 10px;
  margin-left: 10px;
}

#lang-button {
  background-color: #6b80c4;
  color: white;
  font-weight: normal;
  font-size: 16px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

@media (max-width: 460px) {
  #toolbar-title {
    font-size: 20px;
  }
  img {
    height: 25px;
    margin-right: 10px;
  }

  #lang-button {
    font-size: 12px;
    padding: 5px 10px;
  }

}

@media (max-width: 335px) {
  #toolbar-title {
    font-size: 16px;
  }

  #lang-button {
    font-size: 10px;
    padding: 5px 10px;
  }
}

</style>