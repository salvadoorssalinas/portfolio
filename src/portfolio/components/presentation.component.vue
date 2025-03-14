<script setup>

</script>

<template>

  <div id="presentation">
    <div id="information">
      <h1>{{ $t('welcome') }}</h1>
      {{ $t('about') }}
    </div>
    <div id="image">
      <!-- img src="../../assets/images/profile.jpg" alt="Profile Picture" -->
    </div>
  </div>
</template>

<style scoped>
  #presentation {
    margin-top: 100px;
    margin-bottom: 20px;
  }

  h1 {
    font-weight: bolder;
  }

  #information {
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    margin: 0 auto;

    & p {
      width: 90%;
      margin: 0 auto 1rem;
    }
  }

  #image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem;
  }

  img {
    text-align: center;
    height: 25rem;
    object-fit: cover;
  }


  @media (max-width: 460px) {
    #presentation {
      margin-top: 70px;
      }
  }


</style>