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
            :cols="card.col"
            :xl="card.xl"
            :lg="card.lg"
            :md="card.md"
            :sm="card.sm"
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
                  @click="dialog=!dialog"
                >
                  詳細
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-dialog
      v-model="dialog"
    >
      <v-card>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              xl="6"
              lg="6"
              md="6"
              sm="6"
            >
              <v-card-title>
                作品名
              </v-card-title>
              <v-divider />
              <v-card-text>
                アプリケーションの説明が入ります。<br>アプリケーションの説明が入ります。<br>アプリケーションの説明が入ります。<br>アプリケーションの説明が入ります。<br>アプリケーションの説明が入ります。
              </v-card-text>
              <v-divider />
              <v-card-title
                class="pb-1"
              >
                Skills
              </v-card-title>
              <template
                v-for="(chip, index) in chips"
              >
                <v-chip
                  :key="index"
                  class="mx-1 my-2"
                  color="accent"
                >
                  {{ chip.name }}
                </v-chip>
              </template>
              <v-spacer />
              <v-divider />
              <v-card-title
                class="pb-1"
              >
                Link
              </v-card-title>
              <v-card-text>
                アプリケーションのURLを貼ります<br>GitHubのURLを貼ります
              </v-card-text>
            </v-col>
            <v-col
              cols="12"
              xl="6"
              lg="6"
              md="6"
              sm="6"
            >
              <div
                class="text-center"
              >
                <v-sheet
                  color="indigo"
                  height="370"
                >
                  <h1>
                    作品のキャプチャ画像
                  </h1>
                </v-sheet>
              </div>
              <div
                class="text-right"
              >
                <v-btn
                  class="mt-4 ml-1 mb-2"
                  small
                  color="error"
                  @click="dialog=!dialog"
                >
                  閉じる
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    const cards = [
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
      }
    ]

    const chips = [
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

    const dialog = ref(false)

    return {
      cards,
      chips,
      dialog
    }
  }
})
</script>
