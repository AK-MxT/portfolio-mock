<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        xl="6"
        lg="6"
        md="6"
        sm="6"
        class="mx-auto"
      >
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            xl="6"
            lg="6"
            md="6"
            sm="6"
          >
            <v-card>
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title
                  v-text="card.title"
                />
              </v-img>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="secondary"
                  small
                  block
                  @click="select(card)"
                >
                  詳細
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <works-dialog
      v-model="dialog"
      :item="selected"
      @close="dialog = false"
    />
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import type { WorksInfo } from '~/types/Works'

export default defineComponent({
  setup () {
    const cards: WorksInfo[] = [
      {
        title: 'Mock-App',
        src: require('~/assets/works/1/capture.png'),
        description: 'Nuxt Contentというモジュールを使ったCRUDアプリのモックです。<br>csvファイルで用意した書籍データをVuexに保存し、擬似的にCRUD操作ができるようにしてあります。<br>TypeScript＆composition-apiベースでコーディングしており、デザインフレームワークはVuetifyを採用しております。',
        skills: ['Vue', 'Nuxt', 'Vuetify', 'TypeScript', 'Nuxt Content', 'nuxt-typed-vuex'],
        links: ['https://goofy-ride-657aa7.netlify.app', 'https://github.com/AK-MxT/nuxt-content-mock']
      },
      {
        title: '作品2',
        skills: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Nuxt'],
        links: []
      },
      {
        title: '作品3',
        skills: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Nuxt'],
        links: []
      },
      {
        title: '作品4',
        skills: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Nuxt'],
        links: []
      }
    ]

    const dialog = ref(false)
    const selected = ref<WorksInfo>(cards[0])

    const select = (item: WorksInfo) => {
      selected.value = item
      dialog.value = true
    }

    return {
      cards,
      dialog,
      select,
      selected
    }
  }
})
</script>
