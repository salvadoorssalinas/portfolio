import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from './assets/i18n'
import PrimeVue from 'primevue/config';
import Material from '@primevue/themes/material';
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import Card from "primevue/card";
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Dialog from 'primevue/dialog'
import ConfirmDialog from 'primevue/confirmdialog';
import SelectButton from "primevue/selectbutton";
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Timeline from 'primevue/timeline';
import {Form} from '@primevue/forms';
import Message from "primevue/message";
import {Toast} from "primevue";
import ToastService from "primevue/toastservice";
import 'primeicons/primeicons.css';

const app = createApp(App);
document.body.classList.add('dark-mode');
app.use(i18n)
    .use(PrimeVue, {
        ripple: true,
        theme: { preset: Material }
    })
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-inputtext', InputText)
    .component('pv-textarea', Textarea)
    .component('pv-dialog', Dialog)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-selectbutton', SelectButton)
    .component('pv-accordion', Accordion)
    .component('pv-accordion-panel', AccordionPanel)
    .component('pv-accordion-header', AccordionHeader)
    .component('pv-accordion-content', AccordionContent)
    .component('pv-tabs', Tabs)
    .component('pv-tab-list', TabList)
    .component('pv-tab', Tab)
    .component('pv-tab-panels', TabPanels)
    .component('pv-tab-panel', TabPanel)
    .component('pv-timeline', Timeline)
    .component('pv-form', Form)
    .component('pv-message', Message)
    .component('pv-toast', Toast)
    .use(ToastService)
    .mount('#app')

