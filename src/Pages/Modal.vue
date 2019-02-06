<template>
  <transition name="modal">
    <div class="modal-mask" @click="closeModal">
      <div class="modal-wrapper">
        <div class="modal-container" @click.stop.prevent="">
          <div class="modal-icon-container">
            <img :src="iconImg" width="120" />
          </div>
          <div class="modal-body">
            <slot>
            </slot>
          </div>
          <button class="close-button" @click.prevent="closeModal">&#10006;</button>
        </div>
        </div>
      </div>
  </transition>
</template>

<script>
export default {
  data: function() {
    return {
      iconImg: null
    };
  },
  created() {
    this.iconImg = require('../assets/incorrect.png');
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    }
  }
}
</script>

<style>
.close-button {
 border: 0;
 background: none;
 box-shadow: none;
 border-radius: 0px;
 color: red;
 position: absolute;
 right: 6px;
 top: -2px;
 font-size: 30px;
}

.modal {
  position: absolute;
  left: 25vw;
  top: 25vh;
  width: 45vw;
  height: 35vh;
  display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;
}
.modal-icon-container {
  margin-top: 5%;
}
.modal-icon-image {
  width: 132px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 45vw;
  height: 35vh;
  max-width: 562px;
  max-height: 308px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  border: 1px solid #777;
  box-shadow: 3px 3px 16px rgba(0, 0, 0, .66);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  position: relative;
}

.modal-body {
  margin: 20px 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  color: black;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
