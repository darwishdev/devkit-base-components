import { setup } from '@storybook/vue3';
import { createI18n } from 'vue-i18n'
import { apiClient } from '../src/api/apiClient';

import '../src/assets/css/app.css'
import 'devkit-base-components/style';
import router from '../src/routes';
import {
  AppBtn,
  AppIcon,
  AppImage,
  AppThemeToggler,
  AppLocaleToggler,
  AppSection,
  AppDialog,
  AppBreadcrumb,
  AppMenu
} from 'devkit-base-components'
import type { Preview } from '@storybook/vue3';
import PrimeVue from 'primevue/config';
import DevkitBaseComponentsPlugin, { type DevkitBaseConfig } from 'devkit-base-components';
// Register PrimeVue globally
setup((app) => {

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
    baseImageUrl: 'http://192.168.1.40:54321/storage/v1/object/public/',
    noImageUrl: 'http://192.168.1.40:54321/storage/v1/object/public/images/noimg.webp',
    iconFindApi: 'iconFind'
  }
  app.use(router).use(i18n).use(PrimeVue, { theme: 'none' }).use(DevkitBaseComponentsPlugin, baseConfig)
  app.component('AppBtn', AppBtn)
    .component('AppIcon', AppIcon)
    .component('AppImage', AppImage)
    .component('AppThemeToggler', AppThemeToggler)
    .component('AppLocaleToggler', AppLocaleToggler)
    .component('AppSection', AppSection)
    .component('AppDialog', AppDialog)
    .component('AppBreadcrumb', AppBreadcrumb)
    .component('AppMenu', AppMenu)
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
