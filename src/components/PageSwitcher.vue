<template>
  <component
    v-bind="$attrs"
    @onNext="currentIndex++"
    v-on="$listeners"
    :data="Content[currentPage]"
    :is="currentPage"
  />
</template>

<script>
import Intro from "../Pages/Intro";
import NanoVideo from "../Pages/NanoVideo";
import Quiz from "../Pages/Quiz";
import SecurityTip from "../Pages/SecurityTip";
import Congrats from "../Pages/Congrats";
import CSSTest from "../Pages/CSSTest";

const Content = require("../config/content.json");

export default {
  data: function() {
    return {
      Content,
      pages: [],
      currentIndex: 0
    };
  },
  computed: {
    currentPage() {
      return this.pages[this.currentIndex];
    }
  },
  components: {
    CSSTest,
    Congrats,
    Intro,
    Quiz,
    SecurityTip,
    NanoVideo
  },
  created() {
    this.pages = Object.keys(Content);
  }
};
</script>

<style></style>
