<script setup lang="ts">
import UseAutoresComposable from "../Composables/useAutoresComposable";
import ListAutores from "../Components/ListAutores.vue";
import Pagination from "../../shared/components/Pagination.vue";
import LoadingModal from "../../shared/components/LoadingModal.vue";
import FormNewAutor from "../Components/FormNewAutor.vue";
import {ref} from "vue";
import useAutoresCreate from "../Composables/useAutoresCreate.ts";
import type {Autor} from "../Interfaces/ResponseAutoresList.ts";

const { isLoading, autores, isError, currentPage, totalPages, setPage } = UseAutoresComposable();
const {UsuarioCreateMutation } =useAutoresCreate();
const open = ref<boolean>(false);
const toogleModal = (estado:boolean)=>{
    console.log("Toogle");
    open.value=estado;
}

const crear = (nombre:string, fecha_nacimiento:Date, biografia:string)=>{
    const data:Autor={
        nombre:nombre,
        fecha_nacimiento:fecha_nacimiento,
        biografia:biografia
    }
    UsuarioCreateMutation.mutate(data);
}
</script>
<template>
    <hr>
    <div class="row">
        <div class="col-9">
            <h1>Listado de autores </h1>
        </div>
        <div class="col-3">
            <button @click="toogleModal(true)" type="button" class="btn btn-outline-dark">+</button>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-12">

            <list-autores :data="autores" />
            <pagination :total-pages="totalPages" :current-page="currentPage"  @page-changed="setPage"/>
        </div>
    </div>

    <LoadingModal v-if="isLoading" />
    <div v-if="isError"> esta con error</div>
    <FormNewAutor v-if="open"  @cerrarModal="toogleModal(false);" @guardar-autor-nuevo="crear" />
</template>

<style scoped>

</style>
