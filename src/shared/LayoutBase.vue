<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from "./components/NavBar.vue";
import {useLoginStore} from "../store/Login";
const information = useLoginStore();
</script>

<template>
    <div class="container text-center">
        <div class="row justify-content-start">
            <div class="col-12">--- Barra superior ---     {{ information.myNombre }} <button @click="cerrarSesion">Cerrar sesion</button></div>
        </div>
        <div class="row align-items-center align-items-start">
            <div class="col-1" id="menu">
                <nav-bar/>
            </div>
            <div class="col-11" id="contenido">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<style scoped>
#menu{
    background-color: #2d3748;
    color: white;
}
#contenido{
    background-color: silver;
}

</style>
