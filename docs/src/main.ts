import { createApp } from 'vue'
import './assets/css/app.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { createI18n } from 'vue-i18n'
import { apiClient } from './api/apiClient';
import router from './routes';
import DevkitBaseComponentsPlugin, { type DevkitBaseConfig } from 'devkit-base-components';
import 'devkit-base-components/style';

const app = createApp(App)

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      hello: "hello"
    },
    ar: {
      hello: "اهلا"
    }
  }
})
const baseConfig: DevkitBaseConfig<typeof apiClient> = {
  apiClient,
  locales: ['en', 'ar'],
  iconFindApi: 'iconFind'
}
app.use(PrimeVue, {
  theme: 'none'
}).use(i18n)
app.use(router)
  .use(DevkitBaseComponentsPlugin, baseConfig)
  .mount('#app')
