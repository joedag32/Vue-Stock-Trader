<template>
  <div class="col-sm-6 col-md-4">
    <div class="card bg-light">
      <div class="card-body">
        <h5 class="card-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price | currency }})</small>
        </h5>
        <div class="form-row">
          <div class="col-auto my-1">
            <input
              type="number"
              class="form-control"
              placeholder="Quantity"
              v-model="quantity"
              :class="{danger: insufficientFunds}"
            />
          </div>
          <div class="col-auto my-1">
            <button
              class="btn btn-success"
              @click="buyStock"
              :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(+quantity)"
            >Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}
.danger {
  border: 1px solid red;
}
</style>