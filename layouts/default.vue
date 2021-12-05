<template>
  <v-app
    :style="{background: $vuetify.theme.themes[theme].background}"
  >
    <v-app-bar
      inverted-scroll
      scroll-threshold="600"
      app
    >
      <template>
        <v-tabs
          right
        >
          <v-tab
            v-for="item in items"
            :key="item.id"
            v-scroll-to="'#' + item.to"
            class="tab-menu"
          >
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <v-container
        class="text-center"
      >
        <v-btn
          v-for="item in footerItems"
          :key="item.icon"
          class="mx-4"
          icon
        >
          <v-icon
            size="32px"
          >
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </v-container>
      <v-col
        class="text-center"
        cols="12"
      >
        <span>
          &copy; {{ new Date().getFullYear() }} 名前 All rights reserved.
        </span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    const items: {
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

    const footerItems = [
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

    const title = 'Vuetify.js'
    const fixed = false

    const theme = computed(() => {
      // return this.$vuetify.theme.dark ? 'dark' : 'light'
      return 'light'
    })

    return {
      fixed,
      footerItems,
      items,
      theme,
      title
    }
  }
})
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.tab-menu {
  font-family: 'Pacifico', cursive;
}
</style>
