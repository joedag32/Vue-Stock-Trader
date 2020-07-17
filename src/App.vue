<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
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
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
