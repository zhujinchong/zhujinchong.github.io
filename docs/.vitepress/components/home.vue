<script setup>
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
</script>
<template>
  <div class="home-wrapper">
    <div v-for="item in list" :key="item" class="home-item">{{item}}</div>
  </div>
</template>
<style>
.home-wrapper {
  text-align: center;
}
.home-item {
  padding: 4px 8px;
  display: inline-block;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
}
</style>