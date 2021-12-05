<template>
  <v-form
    ref="form"
    v-model="valid"
    class="pb-16"
  >
    <v-container>
      <v-row
        align-content="center"
      >
        <v-col
          cols="12"
          xl="6"
          lg="6"
          md="6"
          sm="6"
          align-self="center"
          class="mx-auto"
        >
          <v-text-field
            v-model="name"
            label="名前"
            class="contact-form"
            outlined
            clearable
            :rules="[rules.required.name, rules.counter.name]"
          />
          <v-text-field
            v-model="mail"
            label="メールアドレス"
            class="contact-form"
            outlined
            clearable
            :rules="[rules.required.mail, rules.counter.mail, rules.email]"
          />
          <v-text-field
            v-model="subject"
            label="件名"
            class="contact-form"
            outlined
            clearable
            :rules="[rules.required.subject, rules.counter.subject]"
          />
          <v-textarea
            v-model="content"
            label="本文"
            class="contact-form"
            outlined
            :rules="[rules.required.content, rules.counter.content]"
          />
        </v-col>
        <v-col
          cols="12"
        >
          <div
            class="text-center"
          >
            <v-btn
              x-large
              :disabled="!valid"
              color="secondary"
              @click="confirm"
            >
              確認
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row
        justify="center"
      >
        <v-col
          cols="12"
          xl="6"
          lg="6"
          md="6"
          sm="6"
        >
          <v-dialog
            v-model="dialog"
            persistent
            max-width="1200px"
          >
            <v-card>
              <v-card-title>
                以下の内容で送信します。よろしいですか？
              </v-card-title>
              <v-card-title>
                【名前】
              </v-card-title>
              <v-card-subtitle
                class="mail-content ma-auto"
              >
                {{ name }}
              </v-card-subtitle>
              <v-divider />
              <v-card-title>
                【From】
              </v-card-title>
              <v-card-subtitle
                class="mail-content ma-auto"
              >
                {{ mail }}
              </v-card-subtitle>
              <v-divider />
              <v-card-title>
                【件名】
              </v-card-title>
              <v-card-subtitle
                class="mail-content ma-auto"
              >
                {{ subject }}
              </v-card-subtitle>
              <v-divider />
              <v-card-title>
                【本文】
              </v-card-title>
              <v-card-text
                class="mail-content content ma-auto"
              >
                {{ content }}
              </v-card-text>
              <v-divider />
              <v-card-actions
                class="pa-4"
              >
                <v-btn
                  @click="dialog=!dialog"
                >
                  修正する
                </v-btn>
                <v-spacer />
                <v-btn
                  color="error"
                  @click="send"
                >
                  送信
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
// import { functions } from "@/plugins/firebase"

export default defineComponent({
  setup () {
    // バリデーションチェック用のフラグ
    const valid = ref(true)

    // 名前
    const name = ref('')
    // メールアドレス
    const mail = ref('')
    // 件名
    const subject = ref('')
    // 本文
    const content = ref('')
    // 表示用の本文
    const viewContent = ref('')

    // メール送信時の確認ダイアログ用フラグ
    const dialog = ref(false)

    // バリデーション
    const rules = {
      required: {
        // 必須チェック
        name: (value: string) => !!value || '名前は入力必須項目です',
        mail: (value: string) => !!value || 'メールアドレスは入力必須項目です',
        subject: (value: string) => !!value || '件名は入力必須項目です',
        content: (value: string) => !!value || '本文は入力必須項目です'
      },
      counter: {
        // 文字数チェック
        name: (value: string) => !value || value.length <= 50 || '名前は50文字以内で入力してください',
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

    // get refs(): any {
    //   return this.$refs
    // }

    const confirm = () => {
      // 確認ダイアログを開く
      dialog.value = true
    }

    const send = () => {
      // モックなのでメール送信処理はコメントアウト
      // try {
      //   // 送信処理
      //   const sendMail = functions.httpsCallable("sendMail")

      //   await sendMail({
      //     name: this.name,
      //     email: this.mail,
      //     subject: this.subject,
      //     content: this.content
      //   })

      //   // メールフォームのリセット
      //   this.refs.form.reset()
      // } catch (_e) {
      //   console.log(_e)
      // }
      // 確認ダイアログを閉じる
      dialog.value = false

      alert('メールを送信しました')
    }

    return {
      confirm,
      content,
      dialog,
      mail,
      name,
      rules,
      send,
      subject,
      valid,
      viewContent
    }
  }
})
</script>

<style lang="scss" scoped>
.mail-content {
  font-size: 20px;
}
.content {
  font-size: 16px;
  white-space: pre-line;
}
</style>
