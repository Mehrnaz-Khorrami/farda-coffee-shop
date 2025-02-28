<script setup>
const banners = ref([
  {src: "/img/banners/comboItems.png"},
  {src: "/img/banners/comboItems.png"},
  {src: "/img/banners/comboItems.png"},
])
</script>

<template>
  <v-carousel
      height="140"
      show-arrows="hover"
      cycle
      touch
      hide-delimiter-background
  >
    <template #next="{ props }">
      <v-btn icon="mdi-chevron-left" variant="text" size="x-small" color="iconColor" class="ml-n3" @click="props.onClick"></v-btn>
    </template>
    <template #prev="{ props }">
      <v-btn icon="mdi-chevron-right" variant="text" size="x-small" color="iconColor" class="mr-n3" @click="props.onClick"></v-btn>
    </template>
    <v-carousel-item v-for="(item,index) in banners" :key="index">
      <v-card width="100%" height="140" flat class="banner-card" :image="item.src">
    </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>
.banner-card{
  border-radius: 18px;
}
</style>