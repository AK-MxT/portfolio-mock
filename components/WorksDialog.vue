<template>
  <v-dialog
    persistent
    :value="value"
  >
    <v-card>
      <v-container
        fluid
      >
        <v-row
          justify="end"
        >
          <v-btn
            icon
            large
            @click="$emit('close')"
          >
            <v-icon>
              mdi-window-close
            </v-icon>
          </v-btn>
        </v-row>
        <v-row
          class="mt-0"
        >
          <v-col
            cols="12"
            xl="6"
            lg="6"
            md="6"
            sm="6"
          >
            <v-card-title>
              {{ item.title ? item.title : '' }}
            </v-card-title>
            <v-divider />
            <v-card-text
              v-if="item.description"
              v-html="item.description"
            />
            <v-card-text
              v-else
            >
              アプリケーションの説明が入ります。<br>アプリケーションの説明が入ります。<br>アプリケーションの説明が入ります。<br>アプリケーションの説明が入ります。<br>アプリケーションの説明が入ります。
            </v-card-text>
            <v-divider />
            <v-card-title
              class="pb-1"
            >
              Skills
            </v-card-title>
            <template
              v-for="skill in item.skills"
            >
              <v-chip
                :key="skill"
                class="mx-1 my-2"
                color="accent"
              >
                {{ skill }}
              </v-chip>
            </template>
            <v-spacer />
            <v-divider />
            <v-card-title
              class="pb-1"
            >
              Link
            </v-card-title>
            <template
              v-if="item.links.length > 0"
            >
              <v-card-actions
                v-for="(link, index) in item.links"
                :key="index"
                class="py-0"
              >
                <v-btn
                  color="info"
                  :href="link"
                  small
                  style="text-transform: none"
                  text
                >
                  {{ link }}
                </v-btn>
              </v-card-actions>
            </template>
            <v-card-text
              v-else
            >
              アプリケーションのURLを貼ります<br>GitHubのURLを貼ります
            </v-card-text>
          </v-col>
          <v-col
            cols="12"
            xl="6"
            lg="6"
            md="6"
            sm="6"
            align-self="center"
          >
            <div
              v-if="item.src"
            >
              <v-img
                :src="item.src"
              />
            </div>
            <div
              v-else
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
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import type { PropType } from '@nuxtjs/composition-api'
import type { WorksInfo } from '~/types/Works'

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<WorksInfo>,
      default: () => {}
    },

    value: Boolean
  },

  setup () {

  }
})
</script>
