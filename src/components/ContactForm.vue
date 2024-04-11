<script>
import axios from 'axios'
import {store} from '../store';

    export default{
        name: 'ContactForm',
        components:{

        },
        data(){
            return{
                store,
                name: '',
                email: '',
                massage: '',
                errors: { },
                success: false,
            }
        },
        methods:{
            sendForm(){

                const data = {
                    name: this.name,
                    email: this.email,
                    massage: this.massage,
                }

                this.errors = {};

                axios.post(`${this.store.apiBaseUrl}/api/contacts`, data).then(res => {
                    
                    this.success = res.data.success

                    if(!this.success){ // se è diverso
                        this.errors = res.data.errors
                    }else{
                        // se non ci sono errori viene usato this.name, email e message
                        this.name = ''
                        this.email = ''
                        this.massage = ''
                    }
                })

            }
        },
        mounted(){
        }
    }
</script>

<!-- ------------------------------------------------------------------- -->

<template>

    <div>
        <h1>Contact Form</h1>
                                    <!-- viene mostrato l'alert di 'success' se il messaggio verrà inviato con successo-->
        <div class="alert alert-success" role="alert" v-if="success" >
            Messaggio inviato con successo
        </div>

        <div>
            <form @submit.prevent="sendForm()">

                <!-- NOME -->
                <div class="mb-3">
                    <input type="text" class="form-control"
                        :class="{'is-invalid': errors.name}"
                        name="name"
                        placeholder="..."
                        v-model="name"
                        >
                    <p v-for="(error, index) in error?.name" :key='`message-errors-${index}`'
                        class="invalid-feedback"
                        >
                        {{ error }}
                    </p>
                </div>


                <!-- MESSAGGIO -->
                <div class="mb-3">
                    <input type="text" class="form-control"
                        :class="{'is-invalid': errors.email}"
                        name="email"
                        placeholder="..."
                        v-model="email"
                        >
                    <p v-for="(error, index) in error?.email" :key='`message-errors-${index}`'
                        class="invalid-feedback"
                        >
                        {{ error }}
                    </p>
                </div>


                <!-- TESTO -->
                <div class="mb-3">
                    <textarea class="form-control"
                        :class="{'is-invalid': errors.message}" 
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        v-model="message"
                    >
                    </textarea>

                    <p v-for="(error, index) in error?.message" :key='`message-errors-${index}`'
                        class="invalid-feedback"
                        >
                        {{ error }}
                    </p>
                </div>

                <button class="btn btn-primary" type="submit">Invia</button>

            </form>
        </div>
    </div>

</template>

<!-- ------------------------------------------------------------------- -->

<style scoped>

</style>