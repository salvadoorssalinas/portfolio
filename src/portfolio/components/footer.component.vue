<script setup>
  console.log("footer")
</script>

<template>
  <pv-toolbar id="footer">
    <template #start>
      SS
    </template>
    <template #center>
      <p>{{ $t('copyright')}}</p>
    </template>
    <template #end>

    </template>
  </pv-toolbar>
</template>

<style scoped>
  #footer {
    background-color: #0b1b55;
    color: white;
    border: 0;
    border-radius: 0;
    padding: 10px;
    bottom: 0;
    width: 100%;
    z-index: 1000;
  }
</style>