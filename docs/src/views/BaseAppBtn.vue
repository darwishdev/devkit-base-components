<script setup lang="ts">
import { ref } from 'vue'
import PanelMenu from 'primevue/panelmenu';
import { InputText } from 'primevue';
import { Chip } from 'primevue';
type NavigationBarItem = Partial<{
  navigationBarItemId: number;
  parentId: number;
  key: string;
  label: string;
  labelAr: string;
  icon: string;
  route: string;
  level: number;
  items: NavigationBarItem[];
}>
const navigationBar: NavigationBarItem[] = JSON.parse(`[{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":3,"parentId":0,"key":"03_system","label":"System","labelAr":"النظام","icon":"settings","route":"","level":1,"items":[{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":9,"parentId":3,"key":"03_buckets","label":"Buckets","labelAr":"المجلدات","icon":"folder","route":"/system/bucket","level":2,"items":[]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":10,"parentId":3,"key":"04_files","label":"Objects","labelAr":"الملفات","icon":"file","route":"/system/object","level":2,"items":[]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":11,"parentId":3,"key":"05_settings","label":"Settings","labelAr":"الإعدادات","icon":"settings_icon","route":"/system/setting","level":2,"items":[]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":7,"parentId":3,"key":"01_translations","label":"Translations","labelAr":"الترجمات","icon":"globe","route":"/system/translation","level":2,"items":[]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":8,"parentId":3,"key":"02_icons","label":"Icons","labelAr":"الأيقونات","icon":"design","route":"/system/icon","level":2,"items":[]}]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":1,"parentId":0,"key":"01_dashboard","label":"Dashboard","labelAr":"لوحة التحكم","icon":"dashboard","route":"/dashboard","level":1,"items":[]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":2,"parentId":0,"key":"02_accounts","label":"Accounts","labelAr":"الحسابات","icon":"people","route":"","level":1,"items":[{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":6,"parentId":2,"key":"03_navigation","label":"Navigation","labelAr":"القوائم","icon":"maps","route":"/accounts/navigation","level":2,"items":[]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":4,"parentId":2,"key":"01_roles","label":"Roles","labelAr":"الأدوار","icon":"group_users","route":"/accounts/role","level":2,"items":[]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":5,"parentId":2,"key":"02_users","label":"Users","labelAr":"المستخدمين","icon":"user_add","route":"/accounts/user","level":2,"items":[{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":12,"parentId":5,"key":"02_users_create","label":"Users Create","labelAr":"المستخدمين","icon":"user_verified","route":"/accounts/users/create","level":3,"items":[]}]}]}]`)
const props = defineProps<{ id: string }>()
const value = ref('')
</script>
<template>
  <h2>{{ props.id }}</h2>
  <h2>hello</h2>
  <Chip label="hello" />
  <InputText id="basic" v-model="value" placeholder="99-999999" />
  <PanelMenu :model="navigationBar" class="app-navigation " />
</template>
