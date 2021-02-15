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
          v-col(
            v-for="card in cards"
            :key="card.title"
            :cols="card.col"
            :xl="card.xl"
            :lg="card.lg"
            :md="card.md"
            :sm="card.sm"
          )
            v-card
              v-img(
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              )
                v-card-title(
                  v-text="card.title"
                )
              v-card-actions
                v-spacer
                v-btn(
                  color="secondary"
                  small
                  block
                  @click="dialog=!dialog"
                ) 詳細
    v-dialog(
      v-model="dialog"
    )
      v-card
        v-container
          v-row
            v-col(
              cols="12"
              xl="6"
              lg="6"
              md="6"
              sm="6"
            )
              v-card-title 作品名
              v-divider
              v-card-text アプリケーションの説明が入ります。<br>アプリケーションの説明が入ります。<br>アプリケーションの説明が入ります。<br>アプリケーションの説明が入ります。<br>アプリケーションの説明が入ります。
              v-divider
              v-card-title(
                class="pb-1"
              ) Skills
              template(
                v-for="chip in chips"
              )
                v-chip(
                  class="mx-1 my-2"
                  color="accent"
                ) {{ chip.name }}
              v-spacer
              v-divider
              v-card-title(
                class="pb-1"
              ) Link
              v-card-text アプリケーションのURLを貼ります<br>GitHubのURLを貼ります
            v-col(
              cols="12"
              xl="6"
              lg="6"
              md="6"
              sm="6"
            )
              div(
                class="text-center"
              )
                v-sheet(
                  color="indigo"
                  height="370"
                )
                  h1 作品のキャプチャ画像
              div(
                class="text-right"
              )
                v-btn(
                  class="mt-4 ml-1 mb-2"
                  small
                  color="error"
                  @click="dialog=!dialog"
                ) 閉じる
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator"

@Component
export default class Works extends Vue {

  cards = [
    {
      title: '作品1',
      src: '',
      col: 12,
      xl: 6,
      lg: 6,
      md: 6,
      sm: 6
    },
    {
      title: '作品2',
      src: '',
      col: 12,
      xl: 6,
      lg: 6,
      md: 6,
      sm: 6
    },
    {
      title: '作品3',
      src: '',
      col: 12,
      xl: 6,
      lg: 6,
      md: 6,
      sm: 6
    },
    {
      title: '作品4',
      src: '',
      col: 12,
      xl: 6,
      lg: 6,
      md: 6,
      sm: 6
    },
  ]

  chips = [
    {
      key: 1,
      name: 'HTML'
    },
    {
      key: 2,
      name: 'CSS'
    },
    {
      key: 3,
      name: 'JavaScript'
    },
    {
      key: 4,
      name: 'Vue'
    },
    {
      key: 5,
      name: 'Nuxt'
    }
  ]

  dialog: boolean = false
}
</script>

