<template>
  <div
    id="home"
  >
    <v-img
      :src="src"
      height="800"
    >
      <div
        class="welcome"
      >
        {{ welcome }}
      </div>
    </v-img>
    <div
      id="about"
      class="title-base"
    >
      <p>
        ABOUT
      </p>
    </div>
    <about />
    <div
      id="skills"
      class="title-base"
    >
      <p>
        SKILLS
      </p>
    </div>
    <skills />
    <div
      id="works"
      class="title-base"
    >
      <p>
        WORKS
      </p>
    </div>
    <works />
    <div
      id="contact"
      class="title-base"
    >
      <p>
        CONTACT
      </p>
    </div>
    <contact />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    const src = require('@/assets/home/MIZUHO928013_TP_V.jpg')

    const welcome = 'Welcome to Sample Portfolio Page!!'

    return {
      src,
      welcome
    }
  }
})
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tangerine&display=swap');

.welcome {
  font-family: 'Pacifico', cursive;
  font-size: 80px;
  color: white;
}
.title-base {
  margin-top: 16px;
  font-family: 'Tangerine', cursive;
  font-size: 40px;
  text-align: center;
}
.title-base p {
  margin-bottom: 0px;
}
</style>
