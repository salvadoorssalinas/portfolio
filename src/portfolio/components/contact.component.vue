<script setup>

import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const toast = useToast();

const initialValues = ref({
  email: '',
  name: '',
  data: ''
});

const resolver = ({ values }) => {
  const errors = {};

  if (!values.email || !values.email.includes('@')) {
    errors.email = [{ message: t('email-invalid') }];
  }

  if (!values.name) {
    errors.name = [{ message: t('name-invalid') }];
  }

  if (!values.data) {
    errors.data = [{ message: t('message-invalid') }];
  }

  return {
    errors
  };
};

const onFormSubmit = async ({ values }) => {
  try {
    // send form data to the server

    toast.add({ severity: 'success', summary: t('success'), life: 3000 });
  } catch (error) {
    toast.add({ severity: 'error', summary: t('error'), life: 3000 });
  }
};

</script>

<template>
  <div id="contact">
    <h2>{{ $t('contact-title') }}</h2>
    <p>{{ $t('contact-description') }}</p>
    <pv-toast />
    <pv-form v-slot="$form" :validate-on-blur="true" :initialValues :resolver @submit="onFormSubmit" >
      <div class="flex flex-col gap-1">
        <pv-inputtext name="email" type="text" :placeholder="$t('contact-email')" fluid class="inputt" />
        <pv-message class="message" v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{ $form.email.error.message }}</pv-message>
      </div>
      <div class="flex flex-col gap-1">
        <pv-inputtext name="name" type="text" :placeholder="$t('contact-name')" fluid :formControl="{ validateOnValueUpdate: true }" class="inputt" />
        <pv-message class="message" v-if="$form.name?.invalid" severity="error" size="small" variant="simple">{{ $form.name.error.message }}</pv-message>
      </div>
      <div class="flex flex-col">
        <pv-textarea name="data" :placeholder="$t('contact-message')" rows="3" fluid class="inputt" />
        <pv-message class="message" v-if="$form.data?.invalid" severity="error" size="small" variant="simple">{{ $form.data.error.message }}</pv-message>
      </div>
      <pv-button :disabled="!$form.valid" type="submit" severity="secondary" :label="$t('contact-button')" class="inputt" />
    </pv-form>
  </div>

  <div id="other">
    <h2>{{ $t('contact-other') }}</h2>
    <div id="social">
      <a href="https://www.linkedin.com/in/salvador-salinas-torres-b90945284/" target="_blank" rel="noopener noreferrer">
        <i class="pi pi-linkedin pi-2x"></i>
      </a>
      <a href="https://github.com/salvadoorssalinas" target="_blank" rel="noopener noreferrer">
        <i class="pi pi-github pi-2x"></i>
      </a>
      <a href="mailto:salvador.salinas224@gmail.com" target="_blank" rel="noopener noreferrer">
        <i class="pi pi-envelope pi-2x"></i>
      </a>
    </div>

  </div>

</template>

<style scoped>

#contact {
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2rem 2rem 0 2rem;
}

#other {
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 0 2rem 0;
}

#social {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
}

h2 {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 20px;
}

p {
  text-align: center;
  margin-bottom: 20px;
}

.inputt {
  margin: 0.5rem;
}

i {
  font-size: 3rem;
}

.message {
  margin: 0.3rem 0 0.5rem 0.5rem;
}

@media (max-width: 460px) {
  #contact {
    padding: 1rem;
  }
}

</style>