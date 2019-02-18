<template>
  <div id="app" class="is-marginless" @onStarted="showTip = true">
    <page-switcher
      @nextPage="index++"
      :pages="pages"
      :currentIndex="currentIndex"
    ></page-switcher>
    <logo-footer />
  </div>
</template>

<script>
import LogoFooter from "./components/LogoFooter";
import PageSwitcher from "./components/PageSwitcher";

const Content = require("./config/content.json");

export default {
  name: "app",
  components: {
    LogoFooter,
    PageSwitcher
  },
  data: function() {
    return {
      showTip: false,
      pages: [],
      currentIndex: 0,
      index: 0,
      Content
    };
  },

  created() {
    // TODO move to utils
    document.onkeyup = evt => {
      evt = evt || window.event;
      if (evt.keyCode === 32 || evt.keyCode === 13) {
        evt.preventDefault();
        document.activeElement.click();
      }
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300");
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
body {
  overflow:scroll;
}
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
  background-color: rgb(250, 250, 250);
  // max-height: 99h;
  // min-height: 99vh;
  width: 100vw;
  height: 100vh;
  // overflow: hidden;
}

.nav-button {
  background-color: rgb(240, 102, 33);
  color: white;
  font-size: 2rem;
  position: fixed;
  bottom: 5vh;
  right: 6vw;
}
</style>
