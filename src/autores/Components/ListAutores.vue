<script setup lang="ts">
import type {Autor} from "../Interfaces/ResponseAutoresList";

interface Props {
    data: Autor[]
}

const props = defineProps<Props>();
</script>
<template>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Fecha nacimiento</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="autor of props.data">
            <th scope="row">{{autor.id }}</th>
            <td>{{autor.nombre}}</td>
            <td>{{autor.fecha_nacimiento}}</td>
        </tr>
        </tbody>
    </table>
</template>

<style scoped>

</style>
