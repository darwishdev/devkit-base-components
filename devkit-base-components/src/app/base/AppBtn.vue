<script setup lang="ts">
import { h, useAttrs } from 'vue';
import type { AppBtnProps, AppBtnSlots, AppIconProps } from '@/pkg/types/types';
import { Button } from 'primevue';
import { RouterLink } from 'vue-router';
import AppIcon from './AppIcon.vue';
const slots = defineSlots<AppBtnSlots>();
const { action, label, icon, useReset, size, color, iconType, variant = 'outlined' } = defineProps<AppBtnProps & Partial<AppIconProps>>();
const attrs = useAttrs()
const renderAppBtn = () => {
  const baseProps = {
    class: `app-btn`,
    variant,
    ...attrs
  }
  const children = slots.default ? slots.default() : [
    slots.icon ? slots.icon() : !icon ? undefined : h(AppIcon, { icon, size, color, useReset, iconType }),
    slots.label ? slots.label() : h('span', label),
    slots.end ? slots.end() : undefined,
  ]
  if (typeof action == "function") {
    return h(Button, { ...baseProps, onClick: (e) => action(e) }, children)
  }
  const childrenWrapper = h('div', { class: "flex items-center gap-2" }, children)
  if (action.startsWith("http")) {
    return h('a', { ...baseProps, href: action }, childrenWrapper)
  }
  return h(RouterLink, { ...baseProps, to: action }, childrenWrapper)
}
</script>
<template>
  <component :is="renderAppBtn" />
</template>
