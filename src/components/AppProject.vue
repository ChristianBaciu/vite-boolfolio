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

    <router-link :to="{name: 'single-project', params: {titolo: titolo}}">

        <div class="card my-4" style="width: 18rem;">
            <img :src='`http://127.0.0.1:8000/storage/${image}`' class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{titolo}}</h5>
                <p class="card-text">{{contenuto}}</p>
                <p class="btn btn-danger m-1" v-if="type">{{type.nome}}</p>

                <span class="btn btn-primary m-1" v-for="(technology, index) in technologies" :key="technology.id">
                    {{technology.name}}
                </span>

            </div>
        </div>

    </router-link>

    

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
