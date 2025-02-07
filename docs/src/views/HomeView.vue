<script setup lang="ts">
import { AppHeader, AppImage, AppIcon } from 'devkit-base-components'
const items =
  [
    {
      key: "Home",
      label: "Home",
      labelAr: "الرئيسية",
      icon: "",
      route: "/home",
      level: 0,
      navigation_bar_item_id: 18,
      parent_id: 0
    },
    {
      key: "About Us",
      label: "About Us",
      labelAr: "عن الشركة",
      icon: "",
      route: "/about",
      level: 0,
      navigation_bar_item_id: 19,
      parent_id: 0
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
          parent_id: 0
        },
        {
          key: "Hospitality Services",
          label: "Hospitality Services",
          labelAr: "",
          icon: "",
          route: "/services#14",
          level: 0,
          navigation_bar_item_id: 14,
          parent_id: 0
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
          parent_id: 0
        },
        {
          key: "Consultancy",
          label: "Consultancy",
          labelAr: "",
          icon: "",
          route: "/services#16",
          level: 0,
          navigation_bar_item_id: 16,
          parent_id: 0
        }
      ],
      key: "Services",
      label: "Services",
      labelAr: "الخدمات",
      icon: "",
      route: "",
      level: 0,
      navigation_bar_item_id: 20,
      parent_id: 0
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
          parent_id: 0
        },
        {
          key: "Rhactus House - San Stefano",
          label: "Rhactus House - San Stefano",
          labelAr: "",
          icon: "external-link",
          route: "/projects#18",
          level: 0,
          navigation_bar_item_id: 18,
          parent_id: 0
        },
        {
          key: "Pretzel Burgers",
          label: "Pretzel Burgers",
          labelAr: "",
          icon: "external-link",
          route: "/projects#19",
          level: 0,
          navigation_bar_item_id: 19,
          parent_id: 0
        }
      ],
      key: "Projects",
      label: "Projects",
      labelAr: "المشاريع",
      icon: "",
      route: "",
      level: 0,
      navigation_bar_item_id: 21,
      parent_id: 0
    },
    {
      key: "Gallery",
      label: "Gallery",
      labelAr: "الاستوديو",
      class: "md:mb-0 mb-20",
      icon: "",
      route: "/gallery"
    },
    {
      label: '',
      icon: "pi pi-facebook",
      class: 'md:hidden absolute bottom-0  size-16 start-0',
      route: "https://facebook.com",
    },
    {
      label: '',
      icon: "pi pi-linkedin",
      class: 'md:hidden absolute bottom-0 size-16 start-10',
      route: () => {
      },
    },
    {
      label: '',
      class: 'md:hidden bottom-0 absolute size-16 start-20',
      icon: "pi pi-instagram",
      route: () => {
      },
    },
    {
      label: '+2 035857764 ',
      class: 'md:hidden absolute w-24 right-0 bottom-5',
      route: () => {
        window.open("tel:+2 035857764 ", '_blank')
      },
    },
    {
      label: 'info@abchotels-eg.com',
      class: 'md:hidden absolute w-24 right-0 bottom-0',
      route: () => {
        window.open("mailto:info@abchotels-eg.com", '_blank')
      },
    }
  ]
</script>

<template>
  <AppHeader :items="items" :logo="{ src: 'ac', type: 'icon', size: 'large' }">
    <template #button>
      icons
    </template>

  </AppHeader>
  <div class="wrapper">
    <AppBtn useReset icon="ac" label="acccc" action="/about" />
    <AppImage preview src="https://abcv1.yalabina.com/images/rhactus_san.jpg" />
    <AppIcon icon="ac" />
  </div>

</template>
