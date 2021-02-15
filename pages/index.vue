<template lang="pug">
  div(
    id="home"
  )
    v-img(
      :src="src"
      height="800"
    )
      div(
        class="welcome"
      ) {{ welcome }}
    div(
      id="about"
      class="title-base"
    )
      p ABOUT
    About
    div(
      id="skills"
      class="title-base"
    )
      p SKILLS
    Skills
    div(
      id="works"
      class="title-base"
    )
      p WORKS
    Works
    div(
      id="contact"
      class="title-base"
    )
      p CONTACT
    Contact
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator"

@Component
export default class Index extends Vue {

  // data
  src: string = require('@/assets/home/MIZUHO928013_TP_V.jpg');

  // computed
  get welcome(): string {
    return 'Welcome to Sample Portfolio Page!!'
  }
}
</script>

<style>
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
