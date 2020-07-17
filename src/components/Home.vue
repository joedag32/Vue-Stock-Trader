<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-body">
          <h2>Trade or View Your Portfolio</h2>
          <p>Click on 'End Day' to begin a new day!</p>
          <hr>
          <h3>Your Funds: {{ funds | currency }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style scoped>
</style>