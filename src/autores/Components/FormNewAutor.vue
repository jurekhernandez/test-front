<script setup lang="ts">

import {ref} from "vue";

const nombre = ref<string|null>('test');
const fecha_nacimiento = ref<Date|null>();
const biografia = ref<string|null>('aaa');
const cerrar = ref<boolean>(false);

interface Emitir {
    (e:'cerrarModal',cerrar):void
    (e:'guardarAutorNuevo', nombre:string, fecha_nacimiento:Date, biografia:string):void
}
const emitir=defineEmits<Emitir>();

</script>
<template>
    <div class="modal-backdrop fade show"></div>
    <div class="modal fade show" id="exampleModalLive" tabindex="-1" aria-labelledby="exampleModalLiveLabel" style="display: block;" aria-modal="true" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-4" id="exampleModalLiveLabel">Nuevo Autor</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="input1" class="form-label">Nombre Autor</label>
                        <input type="email" class="form-control"  name="input1" id="input1" placeholder="name@example.com" v-model="nombre">
                    </div>
                    <div class="mb-3">
                        <label for="input2" class="form-label">Fecha nacimiento</label>
                        <input type="date" class="form-control" name="input2"  id="input2" placeholder="name@example.com" v-model="fecha_nacimiento">
                    </div>
                    <div class="mb-3">
                        <label for="text1" class="form-label">Biografía</label>
                        <textarea class="form-control" id="text1" rows="3" v-model="biografia"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                       <button
                         class="btn btn-secondary"
                         @click="emitir('cerrarModal',cerrar)">Cerrar
                     </button>

                     <button
                             class="btn btn-primary"
                          @click="emitir('guardarAutorNuevo',nombre.toString(), fecha_nacimiento, biografia.toString())">Guardar
                     </button>
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>

</style>