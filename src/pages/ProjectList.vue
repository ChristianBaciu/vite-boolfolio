<script>
import axios from 'axios';

    export default{
        name: 'ProjectList',
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
            
            <p v-for="(element, index) in arrayProject" :key="element.id">
                <router-link :to="{name: 'single-project', params: {titolo: element.titolo}}">
                    {{ element.titolo }}
                </router-link>
            </p>


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
