import backEndApi from "../../api/BackEndApi";
import { useMutation} from "@tanstack/vue-query";
import Swal from 'sweetalert2';
import {ILogin} from "../Interface/ILogin";
import {ILoginResponse} from "../Interface/ILoginResponse";
import router from "../../router";
import {useLoginStore} from "../../store/Login";


const login = async({username, password}:ILogin):Promise<ILoginResponse> =>{
    const loginData ={username, password};
    const {data} = await backEndApi.post("/login",loginData, );
    return data;
}

const useLoginMutation = () => {
    console.log("useLoginMutation");
    const store= useLoginStore();
    const loginMutation= useMutation({mutationFn:login, cacheTime:1000*60*10,mutationKey:['claveMuta'],
        onSuccess:(response)=>{
            store.logIn( response.data.nombre, response.data.token, response.data.permisos)
           // localStorage.setItem('nombre', response.data.nombre);
           // localStorage.setItem('permisos', JSON.stringify(response.data.permisos));
           // localStorage.setItem('token', response.data.token);

            router.push('/home');
        },
        onError:(error)=>{
            console.log("onError");
            console.log(error);
            Swal.fire({
                title: 'Datos incorrectos!!',
                text: 'El usuario o clave ingresados no son correctos',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    });


    return {
        loginMutation
    }
    /*const {isLoading, data, isError}= useQuery(
        ['loginDatos'],
        ()=>login(username, password),
        {
            retry:false,
        }
    )

    return {
        isLoading,
        data,
        isError,
    }*/
}

export default useLoginMutation;

