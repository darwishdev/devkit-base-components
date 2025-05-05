<script setup lang="ts">
import {
  AppHeader,
  AppImage,
  AppIcon,
  AppMenu,
  AppBreadcrumb,
  AppThemeToggler,
  AppLocaleToggler,
} from "devkit-base-components";
const items = [
  {
    key: "Home",
    label: "Home",
    labelAr: "الرئيسية",
    icon: "",
    level: 0,
    navigation_bar_item_id: 18,
    parent_id: 0,
  },
  {
    key: "About Us",
    label: "About Us",
    labelAr: "عن الشركة",
    icon: "",
    route: "/about",
    level: 0,
    navigation_bar_item_id: 19,
    parent_id: 0,
  },
  {
    items: [
      {
        key: "Hotel Management",
        label: "Hotel Management",
        labelAr: "",
        icon: "",
        route: "/services#13",
        level: 0,
        navigation_bar_item_id: 13,
        parent_id: 0,
      },
      {
        key: "Hospitality Services",
        label: "Hospitality Services",
        labelAr: "",
        icon: "",
        route: "/services#14",
        level: 0,
        navigation_bar_item_id: 14,
        parent_id: 0,
      },
      {
        items: [],
        key: "Food and Beverage",
        label: "Food and Beverage",
        labelAr: "",
        icon: "",
        route: "/services#15",
        level: 0,
        navigation_bar_item_id: 15,
        parent_id: 0,
      },
      {
        key: "Consultancy",
        label: "Consultancy",
        labelAr: "",
        icon: "",
        route: "/services#16",
        level: 0,
        navigation_bar_item_id: 16,
        parent_id: 0,
      },
    ],
    key: "Services",
    label: "Services",
    labelAr: "الخدمات",
    icon: "",
    route: "",
    level: 0,
    navigation_bar_item_id: 20,
    parent_id: 0,
  },
  {
    items: [
      {
        key: "Rhactus New Alamein",
        label: "Rhactus New Alamein",
        labelAr: "",
        icon: "external-link",
        route: "/projects#17",
        level: 0,
        navigation_bar_item_id: 17,
        parent_id: 0,
      },
      {
        key: "Rhactus House - San Stefano",
        label: "Rhactus House - San Stefano",
        labelAr: "",
        icon: "external-link",
        route: "/projects#18",
        level: 0,
        navigation_bar_item_id: 18,
        parent_id: 0,
      },
      {
        key: "Pretzel Burgers",
        label: "Pretzel Burgers",
        labelAr: "",
        icon: "external-link",
        route: "/projects#19",
        level: 0,
        navigation_bar_item_id: 19,
        parent_id: 0,
      },
    ],
    key: "Projects",
    label: "Projects",
    labelAr: "المشاريع",
    icon: "",
    route: "",
    level: 0,
    navigation_bar_item_id: 21,
    parent_id: 0,
  },
  {
    key: "Gallery",
    label: "Gallery",
    labelAr: "الاستوديو",
    class: "md:mb-0 mb-20",
    icon: "",
    route: "/gallery",
  },
];
</script>

<template>
  <AppBreadcrumb />
  <AppThemeToggler />
  <AppLocaleToggler />
  <AppMenu
    :items="items"
    :is-vertical="true"
    :logo="{ src: 'ac', type: 'icon', size: 'large' }"
  />
</template>
