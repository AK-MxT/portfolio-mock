<template lang="pug">
  v-container
    v-row
      v-col(
        cols="12"
        xl="6"
        lg="6"
        md="6"
        sm="6"
        class="mx-auto"
      )
        v-row
          template(
            v-for="skill in skills"
          )
            v-col(
              cols="12"
              xl="6"
              lg="6"
              md="6"
              sm="6"
              class="pa-0"
            )
              div(
                class="text-center"
              )
                v-icon(
                  x-large
                  class="mt-2"
                ) {{ skill.icon }}
                p(
                  class="mb-0"
                ) {{ skill.name }}
            v-col(
              cols="12"
              xl="6"
              lg="6"
              md="6"
              sm="6"
              class="pa-0"
            )
              div(
                class="text-center"
              )
                v-rating(
                  v-model="skill.rate"
                  half-increments
                  size="40"
                  background-color="secondary"
                )
          h4(
            class="mx-16 my-4"
          ) ここに技術の補足説明などを記載します。<br>ここに技術の補足説明などを記載します。<br>ここに技術の補足説明などを記載します。
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator"

@Component
export default class Skills extends Vue {

  skills = [
    {
      icon: 'mdi-language-html5',
      name: 'HTML5',
      rate: 3.5
    },
    {
      icon: 'mdi-language-css3',
      name: 'CSS3',
      rate: 2
    },
    {
      icon: 'mdi-language-javascript',
      name: 'JavaScript',
      rate: 4
    },
    {
      icon: 'mdi-vuejs',
      name: 'Vue.js',
      rate: 4
    },
    {
      icon: 'mdi-nuxt',
      name: 'Nuxt.js',
      rate: 4
    }
  ]
}
</script>
