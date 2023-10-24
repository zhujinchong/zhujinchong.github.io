---
layout: home

hero:
  name: 
  text: 明日盈盈
  tagline: Make each day count, Make learning a habit.
  image:
    src: /img/home.svg
    alt: VitePress
  actions:
    - theme: alt
      text: Home
      link: /
    - theme: alt
      text: View on GitHub
      link: https://github.com/mingriyingying

features:
  - icon: ⚡️
    title: Vite, The DX that can't be beat
    details: Lorem ipsum...
    link: /
  - icon: 🖖
    title: Power of Vue meets Markdown
    details: Lorem ipsum...
  - icon: 🛠️
    title: Simple and minimal, always
    details: Lorem ipsum...
---

<script setup>
import home from './.vitepress/components/home.vue'
</script>

<home />