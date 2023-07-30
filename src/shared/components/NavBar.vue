<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
    <div size="25px">
        <img src="../image/libro.png" alt="logo" height="50" width="50">
    </div>

    <nav class="nav flex-column">
        <RouterLink to="/autor">Autor</RouterLink>
        <RouterLink to="/libro">Libros</RouterLink>
        <RouterLink to="/tag">Tag</RouterLink>
    </nav>
</template>

<style scoped>
.router-link-active{
    background-color: white;
    color:#2d3748;
}
</style>
