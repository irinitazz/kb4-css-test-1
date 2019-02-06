<template>
  <section class="columns">
    <div class="column container congrats-container">
      <h2 class="title header" s18n>{{data.header.value}}</h2>
        <div class="image-container">
          <img class="congrats-image" :src="congratsImg" />
        </div>
      <p class="completion-text" s18n>{{data.completionText.value}}</p>
      <p class="module-name" s18n>{{data.moduleName.value}}</p>
    </div>
    <button class="button exit-button is-uppercase" @click="window.close()" s18n>{{data.exitButton.text.value}}</button>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      congratsImg: null
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  created() {
    this.congratsImg = require('../assets/congrats.png');
  }
}
</script>

<style lang="scss">
.congrats-image {
  width: 280px;
  margin-top: 2vh;
}
h2.title.header {
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: lighter;
  font-size: 75px;
  margin-top: 7vh;
  margin-bottom: 0;
  color: black;
}
.completion-text {
  font-size: 32px;
  width: 34ch;
  margin: auto;
  border-bottom: 1px solid orange;
}
.module-name {
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 60px;
}

button.exit-button {
  background-color: rgb(240, 102, 33);
  color: white;
  font-size: 2rem;
  position: fixed;
  bottom: 5vh;
  right: 6vw;
  height: 2ch;
  display: table-cell;
  vertical-align: middle;
  line-height: 2ch;
  padding-top: 0 !important;
}
</style>
