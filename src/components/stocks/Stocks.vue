<template>
  <div>
    <p>Stocks</p>
    <div class="row">
      <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
  </div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  components: {
    appStock: Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.getStocks;
    }
  }
};
</script>

<style scoped>
</style>