<template>
  <div class="tip-container columns is-centered is-gapless">
    <div class="column logo-column is-1">
        <img class="tip-image" :src="iconImage">
    </div>
    <div class="tip-body column is-7">
      <h3 class="header media-content" s18n>{{header}}</h3>
      <h3 class="is-size-4 has-text-left tip-main-copy" s18n>{{tipCopy}}</h3>
    </div>
    <button v-bind="$attrs" v-on="$listeners" @keyup.enter.space="$emit('onNext')" s18n href="#" @click.prevent="$emit('onNext')" class="button next is-uppercase is-medium">{{nextButtonCopy}}</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      iconImage: null,
      tipCopy: this.data.copy.value,
      nextButtonCopy: this.data.button.text.value,
      header: this.data.header.value
    };
  },
  created() {
    this.iconImage = require("../assets/security-tip.png");
  },
  props: {
    data: Object
  }
};
</script>

<style lang="scss" scoped>
div.tip-container.columns.is-centered {
  width: 100vw;
  margin-top: 22vh;
}
.tip-image {
  width: 100%;
}
div.columns.tip-container {
  height: 100vh;
}

.header {
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 72px;
  margin-top: 0;
}
.logo-column {
  width: 128px !important;
  }
z
h3.tip-main-copy {
  margin-top: 6%;
  font-family: 'Open Sans', sans-serif;
  font-size: 34px !important;
  line-height: 2.3ch;
}

button.button.next {
  background-color: rgb(240, 102, 33);
  color: white;
  font-size: 2rem;
  position: fixed;
  bottom: 5vh;
  right: 6vw;
  display: table-cell;
  line-height: 1ch;
  vertical-align: middle;
  height: 45px;
  font-size: 2rem !important;
  padding-bottom: 3px;
  padding-top: 2px;
  box-sizing: content-box;
}
button.next:focus {
  border: 2px solid red;
}
.tip-body {
  justify-content: flex-start;
  align-content: flex-start;
  align-self: flex-start;
}
</style>
