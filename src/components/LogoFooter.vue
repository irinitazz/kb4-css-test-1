<template>
  <footer>
    <div id="example-footer" class="footer has-text-left">
      <img class="logo-image is-256x256" :src="logoImage" />
    </div>
  </footer>
</template>

<script>
export default {
  data: function() {
    return {
      logoImage: null
    };
  },
  created() {
    this.logoImage = require("../assets/logo.png");
  }
};
</script>

<style>
.logo-image {
  max-width: 100%;
  position: absolute;
  bottom: 3vh;
  left: 0;
  max-height: 42px;
  min-height: 42px;
  height: 42px;
}

footer,
.footer {
  width: 100%;
  padding-bottom: 0;
  background: rgba(255, 255, 255, 0);
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
}

#example-footer {
  width: 100%;
  padding-bottom: 0;
  background: rgba(255, 255, 255, 0);
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
}
</style>
