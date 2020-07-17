<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <router-link to="/portfolio" activeClass="active" tag="li" class="nav-item">
              <a class="nav-link">Portfolio</a>
            </router-link>
            <router-link to="/stocks" activeClass="active" tag="li" class="nav-item">
              <a class="nav-link">Stocks</a>
            </router-link>
        </ul>
        <div class="ml-auto">
        <button type="button" class="btn btn-primary ml-auto" @click="endDay">End Day</button>
        <span class="navbar-text ml-auto">
          Funds: {{ funds | currency }}
        </span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    endDay() {
      this.$store.dispatch("randomizeStocks");
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style scoped>
nav {
  margin-bottom: 20px;
}
nav .navbar-text {
  padding-left: 10px;
  color: #fff;
}
</style>