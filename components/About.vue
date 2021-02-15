<template lang="pug">
  v-container
    v-row
      v-col(
        cols="12"
        xl="8"
        lg="8"
        md="8"
        sm="12"
        class="mx-auto"
      )
        v-card(
          color="transparent"
          flat
        )
          v-container
            v-row
              v-col(
                cols="12"
                xl="4"
                lg="4"
                md="4"
                sm="12"
                align-self="center"
                class="mx-auto"
              )
                div(
                  class="text-center"
                )
                  v-avatar(
                    color="indigo"
                    size="128"
                  )
                    v-icon(
                      dark
                    ) 写真
              v-col(
                cols="12"
                xl="8"
                lg="8"
                md="8"
                sm="12"
              )
                v-card-text(
                  class="headline font-weight-bold"
                ) サンプル 太郎
                v-card-text(
                  class="headline"
                ) ご覧いただきありがとうございます。<br>ここに自己紹介文を書きます。<br>ここに自己紹介文を書きます。<br>ここに自己紹介文を書きます。
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator"

@Component
export default class About extends Vue {


}
</script>

