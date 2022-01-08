<template>
    <button @click="logIn" v-if="!isAuth">Login</button>
    <button @click="logOut" v-if="isAuth">Logout</button>
</template>

<script>
export default {
    name: "UserAuth",
    methods: {
        logIn() {
           this.$store.dispatch('logIn');
        },
        logOut() {
            this.$store.dispatch('logOut');
        }
    },
    computed: {
        isAuth() {
            return this.$store.getters.userIsAuthenticated;
        }
    }
}
</script>

<style scoped>

</style>