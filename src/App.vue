<script>
import AppHeader from './components/AppHeader.vue'
// import ProjectCars from './components/ProjectCars.vue'

    export default{
        components:{
            // ProjectCars
            AppHeader,
        },
        data(){
            return{
            }
        },
        methods:{
        },
        mounted(){
        }
    }
</script>

<!-- ------------------------------------------------------------------- -->

<template>
    <!-- <ProjectCars/> -->
    <AppHeader/>

    <router-view></router-view>

</template>

<!-- ------------------------------------------------------------------- -->

<style scoped>

</style>
