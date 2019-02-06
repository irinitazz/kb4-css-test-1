<template>
  <div class="title-image hero-body" :style="`background: url(` + introImage + `)`"></div>
</template>

<script>
import introImage from '../assets/title.png';

export default {
    data: function () {
    return {
      introImage: null,
    };
  },
  created() {
    this.introImage = require('../assets/title.png');
  }
}
</script>

<style lang="scss">
div.title-image {
  background-repeat: no-repeat !important;
  background-size: cover !important;
  width: 100vw !important;
  height: 66vh;
}
@media screen and (min-width: 1400px) {
  .title-image {
    margin: auto;
    min-width: 1280px;
    max-width: 1280px;
  }
}

</style>
