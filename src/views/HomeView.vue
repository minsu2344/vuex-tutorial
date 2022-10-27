<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <div class="counter" :style="{color: $store.state.colorCode}">
      {{$store.state.counter}}
    </div> -->
    <Counter />
    <!-- <div class="counter-squared">
      {{$store.state.counter}}
      <sup>2</sup> = {{$store.getters.counterSquared}}
    </div> -->
    <CounterSquared />
    <!-- <div class="buttons">
      <button @click="$store.dispatch('decreaseCounter')">-</button>
      <button @click="$store.dispatch('increaseCounter')">+</button>
    </div> -->
    <Buttons />
    <!-- <div>
      <input
        type="text"
        placeholder="Enter color code"
        v-model="$store.state.colorCode"
      >
    </div> -->
    <ColorCode />
  </div>
</template>

<script>
import Counter from '../components/Counter.vue'
import CounterSquared from '../components/CounterSquared.vue'
import Buttons from '../components/Buttons.vue'
import ColorCode from '../components/ColorCode.vue'

export default {
  name: 'HomeView',
  components: {
    Counter,
    CounterSquared,
    Buttons,
    ColorCode
  }
}
</script>

<style>
div {
  margin-bottom: 0.75rem;
}
.counter {
  font-size: 2rem;
}
.buttons button {
  margin: 0 0.75rem;
  width: 5rem;
  font-size: 2rem;
}
</style>
