<template>
  <section>
    <li class="answer-choice">
      <input class="choice-input" name="nano-knowledge-check" :id="choice.name" :type="choice.type" :value="choice.id"  @click="$emit('selectedAnswer', $event)">
      <label class="answer-choice" :for="choice.name" s18n>{{choice.text.value}}</label>
    </li>
  </section>
</template>

<script>
export default {
  data() {
    return {
      value: false,
    };
  },
  props: {
    choice: {
      type: Object
    }
  }
};
</script>

<style>
li {
  position: relative;
}
  label.answer-choice {
    font-size: 28px;
    position: relative;
    left: 25px;
    line-height: 1.7ch;
  }
input[type='radio'] {
    -webkit-appearance:none;
    width:20px;
    height:20px;
    position: absolute;
    left: -10px;
    border:2px solid rgb(240,102,33);
    border-radius:50%;
    outline:none;
}
input[type='radio']:hover {
    box-shadow:0 0 5px 0px orange inset;
}
input[type='radio']:before {
    content: '';
    display: block;
    width: 10px; /* updated */
    height: 10px; /* updated */
    margin: 20% auto;    
    border-radius: 50%;    
}
input[type='radio']:checked:before {
    background: rgb(240, 102, 33);
}

  section {
    margin-top: 3vh;
  }
  
  .choice-text {
    margin: 0;
    padding: 0;
    font-size: 30px;
    text-align: left;
    line-height: 2ch;
}
  .question-container {
    margin-top: 11vh;
    margin-left: 1vw;
  }

  .quiz-choices {
    margin-top: 4vh;
  }

</style>
