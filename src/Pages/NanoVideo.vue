<template>
  <div class="item" @click.stop.prevent="$emit('onNext')" >
    <div class="player" @click.stop.prevent="$emit('onNext')">
      <video-player
        class="vjs-custom-skin"
        ref="videoPlayer"
        :options="playerOptions"
        :playsinline="true"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
        @loadeddata="onPlayerLoadeddata($event)"
        @waiting="onPlayerWaiting($event)"
        @playing="onPlayerPlaying($event)"
        @timeupdate="onPlayerTimeupdate($event)"
        @canplay="onPlayerCanplay($event)"
        @canplaythrough="onPlayerCanplaythrough($event)"
        @ready="playerReadied"
        @statechanged="playerStateChanged($event)"
      ></video-player>
    </div>
  </div>
</template>

<script>
// custom skin css

export default {
  data() {
    return {
      playerOptions: {
        autoplay: false,
        fluid: true,
        muted: false,
        language: "en",
        controls: false,
        sources: [
          {
            type: "video/mp4",
            src: require("../assets/video.mp4")
          }
        ]
      },
      showNext: false
    };
  },
  mounted() {
    // console.log('this is current player instance object', this.player)
    setTimeout(() => {
      console.log("dynamic change options", this.player);
      this.player.muted(false);
    }, 5000);
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      player.play();
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
      player.pause();
    },
    onPlayerEnded(player) {
      this.$emit("onPlayerEnded");
      this.$emit('onNext');
      // console.log('player ended!', player)
    },
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      player.play();
      // console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied(player) {
      // seek to 10s
      console.log("example player 1 readied", player);
      player.currentTime(0);
      // console.log('example 01: the player is readied', player)
    }
  },
  props: {
    videoPage: Object,
    index: Number
  }
};
</script>
<style lang="scss" scoped>
.player {
  max-height: 100%;
  max-width: 1280px;
}


</style>
