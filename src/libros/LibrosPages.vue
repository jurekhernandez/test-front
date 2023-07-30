<script setup lang="ts">

import Listado from "./components/listado.vue";
</script>
<template>
    <div>
        <h1>Libros pages</h1>
        <listado @algo="console.log('emiti')"/>
    </div>
</template>

<style scoped>

</style>
