<script>
import axios from 'axios';
import AppProject from '../components/AppProject.vue'
import {store} from '../store.js'


    export default{
        name: 'ProjectList',

        components: {
            AppProject,
            store
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
                        // http://127.0.0.1:8000
                axios.get(`${store.apiBaseUrl}/api/apiProjects`,{
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
            <AppProject v-for="(projects, index) in arrayProject" :key="projects.id"
                :titolo="projects.titolo"
                :contenuto="projects.contenuto"
                :cover_image="projects.cover_image "

                :type="projects.type "
                :technologies="projects.technologies "
            />


            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item" :class="{'disabled': currentPage === 1}">
                        <button class="page-link" @click="getProjects(currentPage - 1)">Previous</button>
                    </li>

                    <li class="page-item" v-for="(element,index) in lastPage " :key="index">
                        <button class="page-link" @click="getProjects(element)">{{element}}</button>
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
