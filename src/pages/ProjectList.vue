<script>
import axios from 'axios';
// importazione
import AppProject from '../components/AppProject.vue'


    export default{
        name: 'ProjectList',

        components: {
            AppProject
        },
        data(){
            return{
                arrayProject:[ ],
                currentPage: '',
                lastPage: ''
            }
        },
        methods:{
            getProjects(projectApiPages){

                axios.get('http://127.0.0.1:8000/api/apiProjects', {
                    params: {
                        page: projectApiPages // page preso dalla chiamata http://127.0.0.1:8000/api/apiProjects
                    }
                }).then(res =>{
                    console.log(res.data.projets.data);

                    this.arrayProject = res.data.projets.data;
                    this.currentPage = res.data.projets.current_page;
                    this.lastPage = res.data.projets.last_page;
                })
            }
        },
        mounted(){
            this.getProjects(1);
        }
    }
</script>

<!-- ------------------------------------------------------------------- -->

<template>
    
    <div class="container mt-3 d-flex justify-content-center">

        <div class="text-center">
            <h1>LIST</h1>

            <!-- <p v-for="(element, index) in arrayProject" :key="element.id">
                {{ element.titolo }}
            </p> -->


            <!-- ciclo del componente props AppProject-->
            <AppProject v-for="(element, index) in arrayProject" :key="element.id"
                titolo="element.titolo"
                contenuto="element.contenuto"

                type="element.type ? element.type.nome : '' "
                technologies="element.technologies ? element.technologies.name : '' "
            />


            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item" :class="{'disabled': currentPage === 1}">
                        <button class="page-link" @click="getProjects(currentPage - 1)">Previous</button>
                    </li>

                    <li class="page-item" v-for="(element,index) in lastPage " :key="index">
                        <button class="page-link" @click="getProjects(element )">{{element}}</button>
                    </li>

                    <li class="page-item" :class="{'disabled': currentPage === lastPage} " >
                        <button class="page-link" @click="getProjects(currentPage + 1)">Next</button>
                    </li>
                </ul>
            </nav>

        </div>
    </div>

</template>

<!-- ------------------------------------------------------------------- -->

<style scoped>

</style>
