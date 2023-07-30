import {defineStore} from "pinia";
import {computed, ref} from 'vue';


export const useLoginStore = defineStore('Login', () => {

    const myNombre = ref<string>('Invitado');
    const myToken = ref<string>('');
    const myPermisos = ref<string[]>([]);

    const logIn =(nombre:string, token:string, permisos:string[])=>{
        myNombre.value=nombre;
        myToken.value=token;
        myPermisos.value=permisos;
    };
    const logOut=()=>{
        myNombre.value='Invitado';
        myToken.value='';
        myPermisos.value= [];
    }

    return {
        // State
        myNombre,
        myToken,
        myPermisos,

        // Getters  nameFunction: computed(()=> 10*10),
        isLogin:computed(()=> myToken.value != "" ),

        // Action
        logIn,
        logOut
    };
},{persist:true});
