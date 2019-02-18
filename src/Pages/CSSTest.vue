<template>
  <div id="wrapper">
    <div> 
      <div class="nav-opener">
        <input type="checkbox" @change="showMenu = !showMenu" id="navigation" />
        <label for="navigation"><span class="nav-opener">&nbsp;</span></label>
      </div>
      <aside
        class="sidebar" v-bind:class="{ active: showMenu }"
        v-show="showMenu"
      >
        <div>
          EXAMPLE MENU
        </div>
      </aside>

      <div class="cols">
        <div class="col-left">
          <img :src="bannerImage" alt="">
          <div class="section">
            <h1>PRETEXTING</h1>
            <div class="logo2">
              <img :src="bannerLogo" alt="">
            </div>
          </div>
        </div>
        <div class="col-right">
          <div class="sec-top">
            <div class="col-subleft">SECURITY TIP</div>
            <div class="col-subright"></div>
          </div>
          <div class="sec-middle">
            <div class="col-subleft">
              <img :src="tipIcon" alt="">
              <p> Pretexting involves creating a fabricated scenario to gain your
                  trust and get information from you under false pretenses. They
                  can often be very convincing. These types of attacks are on the
                  rise so it's important to be vigilant and never give information
                  over the phone or in person unless you have confirmed their
                  identity.</p>
            </div>
            <div class="col-subright">
              <a href="#"><i class="icon-angle-down"></i></a>
            </div>
          </div>
          <div class="sec-bottom">
            <div class="col-subleft">Karen</div>
            <div class="col-subright"></div>
          </div>
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
@import 'fonts/style.css';
* {
	max-height: 1000000px;
}

body {
	color: #333;
	background: #ccc;
	font: 16px/1.2 "Montserrat", sans-serif;
	// min-width: 320px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

a {
	-webkit-transition: all .4s ease;
	transition: all .4s ease;
	text-decoration: none;
}
#wrapper {
	position: relative;
  overflow: hidden !important;
	-webkit-transition: margin .4s ease;
	transition: margin .4s ease;
	margin: 0 auto;
	background: #fff;
	min-height: 400px;
}
h1, p, {
    margin:0 0 1em;
}
// body, html{
//     height:100%;
// }
// body{
//     padding:0;
//     margin:0;
// }
section {
    margin:0 0 10px;
}
h1{
    font-size:2.5em;
    font-weight:300;
}
p{
    font-size:1em;
    line-height:1.5em;
}
#wrapper{
    overflow:hidden;
		max-width: 1100px;
		margin: 0 auto;
}
.nav-opener {
	width: 64px;
	height: 64px;
	border-radius: 0;
	position: absolute;
	z-index: 10;
  background: #A7A9AC;
}
.sidebar {
	padding: 35px 40px;
	background: #000;
}
.sidebar {
    position:absolute;
    top:0;
    left:0;
    width:100px;
    height:100%;
    margin:0  0 0 -437px;
    -moz-transition:all 200ms ease-in;
    -webkit-transition:all 200ms ease-in;
    -o-transition:all 200ms ease-in;
    transition:all 200ms ease-in;
    z-index: 9;
}

label {
	font-size: 0;
	line-height: 0;
	background: #6d6e71;
	position: absolute;
	left: 15px;
	top: 0;
	right: auto;
	z-index: 55;
	-webkit-transition: border .6s ease;
	transition: border .6s ease;
	cursor: pointer;
}
input[type="checkbox"]{
    display:none;
}
.sidebar.active {
    margin:0;
}
label:before {
	font-family: 'icomoon';
	position: absolute;
	content: '\e906';
	font-size: 43px;
	left: 0;
	right: 0;
	top: 30px;
	margin: 0 auto;
	color: #fff;
	display: block;
	width: 42px;
  z-index: 222;
}
input[type="checkbox"]:checked ~ label:before {
	font-family: 'icomoon';
	content: '\e907';
	font-size: 43px;
}
input[type="checkbox"]:checked ~ label {
	background: #61a60e;
}

.cols {
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: flex-start;
}
.col-left {
	width: 33.4%;
  position: relative;
  overflow: hidden;
}
.col-left img {
	width: 100%;
	height: auto;
}
.col-left .section {
  position: absolute;
  bottom: 40px;
  width: 100%;
  padding: 0;
}
.col-left .section h1 {
  padding: 40px;
  text-align: center;
  background: #ef333f;
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  // width: calc(100% - 80px);
}
.col-right {
	width: 66.6%;
  position: relative;
}
.sec-top {
	padding: 60px 0;
	font-size: 40px;
	font-weight: 300;
	text-align: right;
	text-transform: uppercase;
	display: flex;
	justify-content: center;
	align-items: flex-end;
}
.col-subleft {
	width: 83%;
}
.col-subright {
	width: 16%;
}
.sec-middle {
	padding: 0;
	display: flex;
	justify-content: center;
}
.sec-middle .col-subleft {
	padding: 10px;
	background: #a7a9ac;
	font-size: 24px;
	font-weight: 300;
	line-height: 20px;
	color: #fff;
}
.sec-middle .col-subright {
  align-items: center;
  background: #a7a9ac;
  display: flex;
  justify-content: center;
  padding: 105px 50px;
  width: calc(16% - 108px);
  border-left: 8px solid #fff;
}
.sec-middle .col-subleft {
  align-items: center;
  display: flex;
  justify-content: center;
}
.sec-middle .col-subleft img {
	margin-right: 30px;
}
.sec-middle .col-subright i {
	font-size: 40px;
	transform: rotate(270deg);
	display: block;
	color: #fff;
}
.sec-bottom .col-subleft {
	text-align: left;
	font-size: 10px;
	padding: 30px 40px;
}

@media (max-width: 800px) {
	.sec-middle .col-subleft {
		width: calc(83% - 90px);
	}
}

@media (max-width: 700px) {
	.cols {
		flex-wrap: wrap;
	}
	.col-left {
		order: 1;
		width: 100%;
	}
	.col-right {
		order: 2;
		width: 100%;
	}
	.sec-middle .col-subleft {
    width: 100%;
		//width: calc(100% - 80px);
	}
	.sec-middle .col-subright {
		width: calc(100% - 108px);
	}
	.nav-opener {
		position: static;
		width: 100%;
		background: #A7A9AC;
	}
	.col-left img {
		width: 100%;
		display: block;
	}
}
@media (max-width: 700px) {
	.sec-middle {
		display: block;
	}
	.sec-middle .col-subleft {
		display: block;
		padding: 40px;
	}
	.sec-middle .col-subright {
		padding-top: 40px;
		padding-bottom: 40px;
		border: none;
		border-top: 8px solid #fff;
    width: 100%;
		// width: calc(100% - 100px);
	}

}
</style>
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
