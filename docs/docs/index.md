
# Welcome to Devkit Base Components

## Overview

Devkit Base Components is a collection of reusable and customizable UI components designed to speed up front-end development. These components are built on top of popular libraries and frameworks like **PrimeVue**, **TailwindCSS**, and **Vue I18n**, ensuring easy integration into your projects. The library is designed to solve common UI problems while providing flexibility, performance, and scalability. The components assume real-life use cases, where an **apiClient** is commonly used to interact with your backend.

## What It Solves

With the growing need for modern, scalable, and maintainable front-end applications, `devkit-base-components` provides the following solutions:
- **Component Reusability**: Save time by using pre-built, customizable components.
- **Icon Handling**: Automatically fetch and manage icons using our smart icon handler, which optimizes API calls and reduces network overhead.
- **Caching**: We use **Dexie.js** to cache icons locally, ensuring faster load times and avoiding repeated API requests.
- **Localization**: Seamlessly handle translations with **Vue I18n**, allowing you to set up and manage different locales in your app with ease.
- **Theme Toggling**: Easily switch between light and dark themes with a theme toggle, fully compatible with **TailwindCSS**.
- **Locale Switching**: A built-in **Locale Toggler** allows users to switch between languages dynamically, improving accessibility for global users.
- **Flexible Image Handling**: Effortlessly manage image fetching with base URLs and callback URLs, giving you control over your media assets.
- **Real-life Use Cases**: These components are designed to be used in real-life applications, where the user will typically integrate them with an **apiClient** to handle API requests, ensuring that they work seamlessly with your backend.

## Based on PrimeVue, TailwindCSS, and Vue I18n

Our components are built on top of widely used libraries:
- **PrimeVue** for ready-to-use, customizable UI components.
- **TailwindCSS** for utility-first, responsive, and highly customizable styles.
- **Vue I18n** for handling translations, so you can easily localize your app in different languages.

### Key Features:
- **Themetoggle**: A simple solution to toggle between light and dark themes.
- **Localetoggler**: A convenient way to switch languages for your users.
- **Setting up Translations**: Easily configure your app for multi-language support.
- **Navigation Bars**: Pre-built navigation components ready for customization.
- **Image Handling**: Manage base and callback URLs for images efficiently.
- **Real-life Integration**: Designed for real-world applications where you can seamlessly integrate these components with an `apiClient` to handle backend interactions.

## Installation Instructions

To get started, install the package with either npm or yarn:

```bash
npm install devkit-base-components
# or
yarn add devkit-base-components
````

## Quick Start

Here's a quick example of how to use the `Button` component:

```vue
<template>
  <Button label="Click Me" icon="pi pi-check" />
</template>

<script setup>
import { Button } from 'devkit-base-components';
</script>
```

In this example, you can quickly get started by importing the component and using it in your app.

### Icon Handling & Caching

Our icon handler makes it easy to fetch icons dynamically while reducing the number of API requests. Icons are cached using **Dexie.js**, a fast and simple JavaScript database, ensuring that once an icon is fetched, it is stored locally for future use, reducing load times and improving performance.

## Fully Compatible with All Projects

`devkit-base-components` is a versatile library that can be used in any front-end project. Whether you’re working on a small app or a large-scale enterprise solution, these components are designed to integrate seamlessly with your existing setup. The flexible architecture and built-in support for **Vue I18n**, **TailwindCSS**, and **PrimeVue** make it a perfect choice for projects of all sizes.

```

### Key Updates:
- **Real-life Use Cases**: Added a section mentioning that the components are designed for real-life use cases, assuming the user will typically integrate them with an `apiClient` for backend interactions.
- This emphasizes that the components are practical and production-ready for modern web applications, ensuring seamless integration with backend services.

Let me know if this works or if you need further adjustments!
```

