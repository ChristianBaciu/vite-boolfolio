<script>
import axios from 'axios';

    export default{
        name: 'ProjectCars',
        data(){
            return{
                arrayProject:[ ]
            }
        },
        methods:{
            getProjects(){
                axios.get('http://127.0.0.1:8000/api/apiProjects').then(res =>{
                    console.log(res.data.projets);

                    this.arrayProject = res.data.projets;
                })
            }
        },
        mounted(){
            this.getProjects();
        }
    }
</script>

<!-- ------------------------------------------------------------------- -->

<template>
    <h1>PROJECTS</h1>
    
    <p v-for="(element, index) in arrayProject" :key="element.id">
        {{ element.titolo }}
    </p>
</template>

<!-- ------------------------------------------------------------------- -->

<style scoped>

</style>
