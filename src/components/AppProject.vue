<script>

    export default{
        name: 'AppProject',
        props: [
            'titolo', 'contenuto', 'type', 'technologies'
        ],
        components:{
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

    <router-view>

        <h3>ciaoooo</h3>
        <p>ciao</p>
    </router-view>


    <!-- 
    <p v-for="(element, index) in arrayProject" :key="element.id">
        <router-link :to="{name: 'single-project', params: {titolo: element.titolo}}">
            <h3>{{ element.titolo }}</h3>
            <p>{{ element.contenuto }}</p>
        </router-link>
    </p>
     -->


</template>

<!-- ------------------------------------------------------------------- -->

<style scoped>

</style>
