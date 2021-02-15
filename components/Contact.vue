<template lang="pug">
  v-form(
        ref="form"
        v-model="valid"
        class="pb-16"
      )
    v-container
      v-row(
        align-content="center"
      )
        v-col(
          cols="12"
          xl="6"
          lg="6"
          md="6"
          sm="6"
          align-self="center"
          class="mx-auto"
        )
          v-text-field(
            label="メールアドレス"
            class="contact-form"
            v-model="mail"
            outlined
            clearable
            :rules="[rules.email, rules.required.mail, rules.counter.mail]"
          )
          v-text-field(
            label="件名"
            class="contact-form"
            v-model="subject"
            outlined
            clearable
            :rules="[rules.required.subject, rules.counter.subject]"
          )
          v-textarea(
            label="本文"
            class="contact-form"
            v-model="content"
            outlined
            :rules="[rules.required.content, rules.counter.content]"
          )
        v-col(
          cols="12"
        )
          div(
            class="text-center"
          )
            v-btn(
              x-large
              @click="send"
              :disabled="!valid"
              color="secondary"
            ) 送信
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator"

@Component
export default class Contact extends Vue {

  valid: boolean = true
  mail: string = ''
  subject: string = ''
  content: string = ''

  // バリデーション
  rules = {
    required: {
      // 必須チェック
      mail: (value: string) => !!value || 'メールアドレスは入力必須項目です',
      subject: (value: string) => !!value || '件名は入力必須項目です',
      content: (value: string) => !!value || '本文は入力必須項目です'
    },
    counter: {
      // 文字数チェック
      mail: (value: string) => !value || value.length <= 256 || 'メールアドレスは256文字以内で入力してください',
      subject: (value: string) => !value || value.length <= 100 || '件名は100文字以内で入力してください',
      content: (value: string) => !value || value.length <= 2000 || '本文は2000文字以内で入力してください'
    },
    email: (value: string) => {
      // メールアドレス形式チェック
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return pattern.test(value) || 'メールアドレスの形式が正しくありません'
    }
  }

  get refs(): any {
    return this.$refs
  }

  isValid (): boolean {
    return this.refs.form.validate()
  }

  send () {
    alert('メールを送信しました')
  }
}
</script>
