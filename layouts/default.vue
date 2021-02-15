<template lang="pug">
  v-app(
    :style="{background: $vuetify.theme.themes[theme].background}"
  )
    v-app-bar(
      inverted-scroll
      scroll-threshold="600"
      app
    )
      template
        v-tabs(
          right
        )
          v-tab(
            v-for="item in items"
            :key="item.id"
            class="tab-menu"
            v-scroll-to="'#' + item.to"
          ) {{ item.title }}
    v-main
      nuxt
    v-footer(
      :absolute="!fixed"
      app
    )
      v-container(
        class="text-center"
      )
        v-btn(
          v-for="item in footerItems"
          :key="item.icon"
          class="mx-4"
          icon
        )
          v-icon(
            size="32px"
          ) {{ item.icon }}
      v-col(
        class="text-center"
        cols="12"
      )
        span &copy; {{ new Date().getFullYear() }} 名前 All rights reserved.
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator"

@Component
export default class Default extends Vue {

  items: {
    id: number,
    icon: string,
    title: string,
    to: string
  }[] = [
    {
      id: 0,
      icon: 'mdi-apps',
      title: 'About',
      to: 'about'
    },
    {
      id: 1,
      icon: 'mdi-chart-bubble',
      title: 'Skills',
      to: 'skills'
    },
    {
      id: 2,
      icon: 'mdi-chart-bubble',
      title: 'Works',
      to: 'works'
    },
    {
      id: 3,
      icon: 'mdi-chart-bubble',
      title: 'Contact',
      to: 'contact'
    }
  ]

  footerItems = [
    {
      icon: 'mdi-twitter',
      url: ''
    },
    {
      icon: 'mdi-facebook',
      url: ''
    },
    {
      icon: 'mdi-instagram',
      url: ''
    },
    {
      icon: 'mdi-github',
      url: ''
    }
  ]
  title: string = 'Vuetify.js'
  fixed = false

  get theme() {
    return this.$vuetify.theme.dark ? "dark" : "light"
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.tab-menu {
  font-family: 'Pacifico', cursive;
}
</style>
