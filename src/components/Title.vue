<template>
  <h1 class="title" s18n><slot></slot></h1>
</template>

<script>
export default {

}
</script>

<style>

h1.title {
    font-family: 'Open Sans Condensed', sans-serif;
    font-stretch: condensed;
    font-size: 75px;
    font-weight: 300;
    width: 26ch;
    border-bottom: 1.5px solid orange;
    margin: auto;
}

</style>
