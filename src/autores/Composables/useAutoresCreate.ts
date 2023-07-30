import {Autor} from "../Interfaces/ResponseAutoresList.ts";
import backEndApi from "../../api/BackEndApi.ts";
import {CreateResponse} from "../../shared/Interface/CreateResponse.ts";
import {useMutation} from "@tanstack/vue-query";
import {useLoginStore} from "../../store/Login";
import {ref} from "vue";
import Swal from "sweetalert2";

const guardar = async({nombre, fecha_nacimiento, biografia}:Autor):Promise<CreateResponse> =>{
    console.log("__guardar__")
    console.log("nombre :");
    console.log(nombre);
    console.log("fecha_nacimiento :");
    console.log(fecha_nacimiento);
    console.log("biografia :");
    console.log(biografia);

    console.log("nuevo...")

    const information = useLoginStore();

    const config = {
        headers: { Authorization: `Bearer ${information.myToken}` }
    };

    const bodyParameters = {
        nombre:nombre,
        fecha_nacimiento:fecha_nacimiento,
        biografia :biografia
    };

    const {data} = await backEndApi.post("/autor",bodyParameters,config);
    return data;
}
const useAutoresCreate = () => {
    console.log("useAutoresCreate");
    const  UsuarioCreateMutation= useMutation({mutationFn:guardar,
        onSuccess:(response)=>{
            console.log("Success");
            console.log(response);

            Swal.fire({
                title: 'Success!!',
                text: 'El autor fue creado correctamente',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        },
        onError:(error)=>{
            console.log("Error")
            console.log(error)
            Swal.fire({
                title: 'Ops!!',
                text: 'Ha ocurrido un erro',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    });

    return {
        UsuarioCreateMutation
    }
}

export default useAutoresCreate;
