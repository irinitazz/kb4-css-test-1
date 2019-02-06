<template>
  <section class="hero is-fullheight title-page" style="overflow: hidden;">
    <div class="full-page">
      <title-image />
      <Title>{{ title.value }}</Title>
      <Subtitle>{{ subtitle.value }}</Subtitle>
    </div>
    <div class="content has-text-right hero-footer">
      <button
        s18n
        @click.prevent="$emit('onNext')"
        class="start-button"
        :class="`${startButton.case} ${startButton.size}`"
      >
        {{ startButton.value }}
      </button>
    </div>
  </section>
</template>

<script>
import TitleImage from "../components/TitleImage";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";

export default {
  data: function() {
    return {
      title: this.data.title,
      subtitle: this.data.subtitle,
      startButton: this.data.startButton
    };
  },
  components: {
    TitleImage,
    Title,
    Subtitle
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
section.title-page {
  padding-top: 0;
  margin-top: 0;
  justify-content: flex-start !important;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

button.start-button.is-uppercase.is-medium {
  background-color: rgb(240, 102, 33);
  color: white;
  font-size: 2rem;
  position: fixed;
  bottom: 4%;
  right: 3%;
  font-size: 1.7rem !important;
}
</style>
