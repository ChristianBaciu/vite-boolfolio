<script>
import axios from 'axios';

    export default{
        name: 'ProjectSingle',
        components:{
            
        },
        data(){
            return{
                project: {}
            }
        },
        methods:{
            getProjectSingle(){
                axios.get(`http://127.0.0.1:8000/api/apiProjects/${this.$route.params.titolo}`).then(res =>{
                    if(res.data.success){
                        this.project = res.data.project
                    }else{
                    }
                    // console.log(res)
                })
            }
        },
        mounted(){
            this.getProjectSingle()
        }
    }
</script>

<!-- ------------------------------------------------------------------- -->

<template>
    <h1 class="text-center mt-3">PROJECTSINGLE</h1>

    <div class="card my-4" style="width: 18rem;">
        <img v-if="project && project.cover_image" :src="`http://127.0.0.1:8000/storage/${project.cover_image}`" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{project.titolo}}</h5>
            <p class="card-text">{{project.contenuto}}</p>

            <!-- se project è definito e ha un type stamperà nella pagina -->
            <p class=" m-1" v-if="project && project.type">{{project.type.nome}}</p>

            <!-- se in technologies ci sono elementi allora stamperà nella pagina le chiavi-->
            <span class=" m-1" v-if="project?.technologies?.length" v-for="(technology, index) in project.technologies" :key="technology.id">
                {{technology.name}}
            </span>
        </div>
    </div>

</template>

<!-- ------------------------------------------------------------------- -->

<style scoped>

</style>
