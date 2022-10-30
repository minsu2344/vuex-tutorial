<template>
  <div>
    <input
      type="text"
      v-model="$store.state.colorCode"
      placeholder="Enter Color Code"
    >
  </div>
</template>

<script>
export default {
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode
      },
      set(newValue) {
        this.$store.dispatch('setColorCode', newValue)
      }
    }
  }
}
</script>

<style>

</style>
