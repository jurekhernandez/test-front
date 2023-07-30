<script setup lang="ts">
interface Emitir {    (
    e:'algo'):void
}
const emitir=defineEmits<Emitir>();
</script>

<template>
    <div>
        <button @click="emitir('algo')">btn</button>
    </div>
</template>

<style scoped>

</style>