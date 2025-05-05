
Thanks for providing the code for the `AppIcon` component! Based on the code and the context you shared, here's an updated documentation for the `AppIcon` component that reflects its actual implementation and details:

### `docs/components/AppIcon.md`

````markdown
# AppIcon Component

## Overview

The `AppIcon` component is a flexible and dynamic icon display component designed to be used in real-world applications. It supports multiple icon types (`primevue` and `svg`), integrates with APIs to fetch icon content dynamically, and offers caching mechanisms for optimal performance.

It is built with `Vue` and supports the following use cases:
- Displaying icons in a consistent manner throughout the app.
- Using icons from a local cache or an API endpoint.
- Supporting `PrimeVue` icons and custom `SVG` icons.
- Integrating with your application's theme (light or dark) and adjusting icon properties such as size and color.

## Features

- **Dynamic Icon Loading**: The icon can be fetched from an API (using `iconFindApi`), reducing the need for static assets.
- **Customizable**: You can customize the icon's size, color, and type (either `primevue` or custom `SVG`).
- **Theme-Aware**: Supports adjusting the icon's style based on the current theme (light/dark).
- **Slots**: You can add custom top and bottom content around the icon via Vue slots.
- **Caching**: Icons are cached for efficient use, avoiding unnecessary API calls.

## Usage

You can use the `AppIcon` component like this:

```vue
<template>
  <AppIcon icon="home" />
</template>

<script setup>
import { AppIcon } from 'devkit-base-components';
</script>
````

### Props

| Prop       | Type    | Description                                        | Default        |
| ---------- | ------- | -------------------------------------------------- | -------------- |
| `icon`     | String  | The name of the icon to display. (e.g., `pi-home`) | -              |
| `size`     | String  | The size of the icon (`small`, `medium`, `large`)  | `medium`       |
| `iconType` | String  | The type of icon (`primevue`, `svg`).              | `primevue`     |
| `color`    | String  | The color of the icon (CSS color value).           | `currentColor` |
| `useReset` | Boolean | Whether to reset the icon's style to defaults.     | `true`         |

### Example with Customization

```vue
<template>
  <AppIcon icon="settings" size="large" color="blue" />
</template>
```

## API Integration

The `AppIcon` component fetches icons from the API using the `iconFindApi`. This allows dynamic loading of icon content. The component first checks if the icon is available locally. If not, it fetches the icon from the configured API endpoint.

### Example with API Client Integration

```vue
<template>
  <AppIcon :icon="icon" size="large" color="green" />
</template>

<script setup>
import { ref } from 'vue';
import { AppIcon } from 'devkit-base-components';
import { apiClient } from '../services/apiClient'; // Path to your API client

const icon = ref('user');  // Define the icon name dynamically
</script>
```

### Caching with Dexie.js

If the icon is available in the local cache (via Dexie.js), it will be used directly. Otherwise, the API call will be made to retrieve and cache the icon for future use.

### Example of Caching Logic

```js
const getIconFromDb = () => {
  iconHelper.iconFind(icon).then((iconContent) => {
    if (!iconContent) {
      getIconFromApi()
      return;
    }
    svgIconContent.value = iconContent;
  }).catch(() => {
    getIconFromApi()
  });
}
```

## Slots

The `AppIcon` component supports slots to allow you to add custom content above or below the icon. You can use the `top` and `bottom` slots.

### Example with Slots

```vue
<template>
  <AppIcon icon="user" size="large" color="purple">
    <template #top>
      <div style="font-size: 12px; color: #999">Top Label</div>
    </template>
    <template #bottom>
      <div style="font-size: 12px; color: #999">Bottom Note</div>
    </template>
  </AppIcon>
</template>
```

## Theme and Size

The icon size and color can be customized. The available sizes are `small`, `medium`, and `large`, and you can control the icon's color with a custom CSS color value.

### Icon Sizes

* `small`: 1.5rem
* `medium`: 2.25rem (default)
* `large`: 3rem

### Custom Colors

You can pass a custom color to the icon to match your application's design.

```vue
<template>
  <AppIcon icon="star" size="medium" color="red" />
</template>
```

## Storybook Example

You can view various configurations and test the component in the Storybook interface:

```tsx
import { AppIcon, iconHelper } from 'devkit-base-components';

const demoSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/></svg>`;
iconHelper.iconCreate('circle-icon', demoSvg);

export default {
  title: 'Base Components/AppIcon',
  component: AppIcon,
  argTypes: {
    icon: { control: 'text', description: 'Icon name (e.g., pi pi-home)' },
    iconType: { control: 'select', options: ['primevue', 'svg', undefined], description: 'Icon rendering type' },
    size: { control: 'select', options: ['small', 'medium', 'large'], description: 'Icon size' },
    color: { control: 'color', description: 'Color of the icon' },
    useReset: { control: 'boolean', description: 'Whether to use reset styles' }
  },
  args: {
    icon: 'star',
    iconType: 'primevue',
    size: 'medium',
    useReset: true
  }
};
```

## Conclusion

The `AppIcon` component is designed for real-world use cases, offering flexibility, theme support, dynamic API fetching, and caching. It is built with performance in mind and can easily be integrated into your Vue.js projects. Whether you're using `PrimeVue` icons, custom SVGs, or integrating API-driven icons, this component provides a seamless solution for your icon needs.

---

For visual references, you can include images or videos in the `public/assets/screenshots` and `public/assets/videos` directories.

```

---

This markdown document covers the component's functionality, usage examples, and additional context based on the provided code. Let me know if you'd like to adjust any sections or add more information!
```
