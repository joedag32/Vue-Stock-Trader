<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col-xs-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import AppHeader from "./components/Header.vue";
    import AppHome from "./components/Home.vue";

    export default {
        components: {
            AppHeader,
            AppHome
        },
        created() {
            this.$store.dispatch('initStocks');
        }
    }
</script>

<style>

</style>
