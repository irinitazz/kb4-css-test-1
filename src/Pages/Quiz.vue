<template>
<main>
  <form class="section container quiz columns is-centered" @submit.prevent="checkAnswer">
    <div class="column is-9">
      <fieldset class="question-container">
        <legend><span class="quiz-question" s18n>{{question}}</span></legend>
        <ul class="answer-choices">
          <answer-choice v-for="choice in choices" :choice="choice" :key="choice.id" @selectedAnswer="(e) => handleSelect(e)" />
        </ul>
      </fieldset>
    </div>
    <button class="nav-button" type="submit" s18n>{{submitButton}}</button>
    </form>
    <modal v-if="showModal" @closeModal="closeModal">
      {{ incorrect }}     
    </modal>
  </main>
</template>

<script>
import AnswerChoice from '../components/AnswerChoice';
import Modal from './Modal';

export default {
  data() {
    return {
      choices: this.data.choices,
      question: this.data.question.value,
      showModal: false,
      selected: null,
      correct: this.data.correct,
      incorrect: this.data.incorrect.text.value,
      icon: this.data.incorrect.icon,
      submitButton: this.data.button.text.value
    }
  },
  components: {
    AnswerChoice,
    Modal,
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    isCorrect () {
      return this.selected === this.correct;
    }
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    handleSelect(e) {
      this.selected = Number(e.target.value);
      console.log(e.target.value + " is now selected");
    },
    checkAnswer() {
      if (this.isCorrect) {
        this.$emit('onNext');
      } else {
        console.log('this is the incorrect answer')
        this.showModal = true;
      }
    }
  }
}
</script>

<style>
section.section.quiz-container {
  height: 100vh;
  text-align: left;
}

.quiz-question {
  font-size: 32px;
  font-family: 'open sans', sans-serif;
  font-weight: bolder;
  margin-left: 0;
  line-height: 2ch;
  text-align: left;
}

.quiz {
  text-align: left;
}

.question-container {
  border: none;
  margin-top: 10vh;
}

ul.answer-choices {
  list-style: none;
  margin-top: 5vh;
}
</style>
