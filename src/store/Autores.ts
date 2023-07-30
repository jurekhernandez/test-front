import {defineStore} from "pinia";
import { ref} from 'vue';
import {Autor} from "../autores/Interfaces/ResponseAutoresList";

export const useAutoresStore = defineStore('Autores', () => {

    const currentPage = ref<number>(1);
    const totalPages = ref<number>(3);
    const autores = ref<Autor[]>([]);

    return {
        // State
        currentPage,
        totalPages,
        autores,

        // Getters  nameFunction: computed(()=> 10*10),

        // Action
        setAutores(nuevoListadoAutores:Autor[]){
            autores.value=nuevoListadoAutores;
        },
        setPage(page:number){
            console.log("setPag", page);
            if(currentPage.value === page) return;
            if(page <= 0 )return;
            if(page > totalPages.value) return;


            currentPage.value = page;
        },
        setTotalPage(total:number){
            totalPages.value=total;
        }
    }
});
