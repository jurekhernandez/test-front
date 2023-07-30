import backEndApi from "../../api/BackEndApi";
import {Datos, ResponseAutoresList} from "../Interfaces/ResponseAutoresList";
import {useQuery} from "@tanstack/vue-query";
import {useLoginStore} from "../../store/Login";
import {useAutoresStore} from "../../store/Autores";
import {storeToRefs} from "pinia";
import {ref, watch} from "vue";

const getAutores =async(pagina:number):Promise<Datos> => {

    await new Promise(resolve=>{
        setTimeout(()=>resolve(true), 100*2);
    });
        console.log("getAutores",pagina);
        const registroInicial =ref(0);
        if(pagina==1){
            registroInicial.value=0;
        }
        if(pagina==2){
            registroInicial.value=4;
        }
        if(pagina==3){
            registroInicial.value=9;
        }
        const information = useLoginStore();
        const {data} = await backEndApi.get<ResponseAutoresList>('/autor?registroInicial='+registroInicial.value, {
            headers: { Authorization: `Bearer ${information.myToken}` }
        });
        return data.data;

}

const useAutoresComposable = () => {
const storeAutores= useAutoresStore();
    const {currentPage, autores, totalPages} =storeToRefs(storeAutores);

    const {isLoading, data , isError}  =useQuery(
        ['autores?page=',currentPage],
        ()=>getAutores(currentPage.value),
        {
            staleTime: 1000 * 60 * 10
        }
    );

    watch(data,DataDesdeApi =>{
        if(DataDesdeApi){
            storeAutores.setAutores(DataDesdeApi.registries);
            storeAutores.setTotalPage(DataDesdeApi.Pages);
        }
    },{immediate:true});
    return {
        isLoading,
        autores,
        isError,
        currentPage,
        totalPages,
        setPage:storeAutores.setPage,
    }
}
export default useAutoresComposable;