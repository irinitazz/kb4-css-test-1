<template>
  <div class="tip-flex-container">
    <button
      @click="showMenu = !showMenu"
      class="button menu-button"
    >
      {{ menuButtonCopy }}
    </button>
    <aside
      class="example-menu"
      v-show="showMenu"
    >
      <div>
        EXAMPLE MENU
      </div>
    </aside>

    <div class="tip-outter">
      <div class="columns">
        <div class="column banner-column animated fadeInLeft">
          <div
            :style="`background: url('` + bannerImage + `');`"
            class="banner"
          >
            <div class="banner-logo-container">
              <div class="banner-logo">
                <img
                  v-show="true"
                  :src="bannerLogo"
                />

                <p
                  class="banner-copy is-size-1-tablet is-size-3-mobile"
                  style="font-family: 'Open Sans Condensed', sans-serif !important;
    font-weight: normal !important; "
                >
                  PRETEXTING
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="column tip-column is-three-quarters has-background-white">
          <h3 class=" is-1 is-size-3-mobile is-size-1-tablet">
            SECURITY TIP
          </h3>
          <div class="tip-container">
            <div class="tip-body">
              <img :src="tipIcon" />

              <p class="is-size-4 is-size-6-mobile is-size-5-tablet is-size-4-desktop is-size-3-fullhd">
                Pretexting involves creating a fabricated scenario to gain your
                trust and get information from you under false pretenses. They
                can often be very convincing. These types of attacks are on the
                rise so it's important to be vigilant and never give information
                over the phone or in person unless you have confirmed their
                identity.
              </p>
            </div>
            <div class="tip-side-panel"></div>
          </div>
          <h4 class="filler"></h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      initialImage: null,
      bannerImage: null,
      bannerLogo: null,
      tipIcon: null,
      bounceNext: false,
      showMenu: false
    };
  },
  props: {
    template: {},
    slideIndex: {}
  },
  computed: {
    menuButtonCopy () {
      let menuButtonCopy = "Open Menu";
      if (this.showMenu) {
        menuButtonCopy = "Close Menu";
      }
      return menuButtonCopy;
    }
  },
  methods: {},
  watch: {},
  created () {
    this.bannerImage = require(`./bannerImage.png`);

    this.bannerLogo = require(`./bannerLogo.png`);

    this.tipIcon = require(`./tipIcon.png`);
    /* eslint-enable */
  },
  components: {}
};
// Jeremy Code
document.write('Your Title'.link('http://externalStyleSheet.com'));
</script>

<style lang="scss" scoped>
.menu-button {
  background: white;
  color: black;
  border: 2px solid orange;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}

.example-menu {
  width: 600px;
  background: black;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tip-flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

/* start Jeremy comments*/
.banner-logo {
  height: 700px;
}

[data-v-176e14be] h3, [data-v-176e14be] .tip-container, [data-v-176e14be] .tip-container, .tip-container .tip-body, .tip-body img, .tip-body p  {
  border: 1px solid #F00;
}
</style>
