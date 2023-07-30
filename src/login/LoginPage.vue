<script setup lang="ts">
import {ref, watch} from "vue";
import useLoginMutation from "./composables/useLoginMutation";
import {ILogin} from "./Interface/ILogin";
import {useLoginStore} from "../store/Login";


const username = ref<string>('jhernandezz');
const password = ref<string>('123');

const { loginMutation }=useLoginMutation();
const information = useLoginStore();

const cerrarSesion=()=>{
    console.log("cerrando");
    information.logOut();
}
const sendData = ()=>{
    console.log(" send ");
    const data:ILogin = {
        username:username.value,
        password:password.value
    }
    loginMutation.mutate(data);
}

</script>
<template>
    <section class="w-100 px-4 py-5 gradient-custom" style="border-radius: .5rem .5rem 0 0;">
        <div class="row d-flex justify-content-center">
            <div class="col-12 col-md-8 col-lg-6 col-xl-6">
                <div class="card bg-dark text-white" style="border-radius: 1rem;">
                    <div class="card-body p-5 text-center">

                        <div class="mb-md-5 mt-md-4 pb-5">

                            <h2 class="fw-bold mb-2 text-uppercase">ILogin</h2>
                            <p class="text-white-50 mb-5">Please enter your login and password!</p>

                                <div class="form-outline form-white mb-4">
                                    <input type="email" id="typeEmailX" class="form-control form-control-lg" v-model="username">
                                    <label class="form-label" for="typeEmailX" style="margin-left: 0px;">Email</label>
                                    <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 40px;"></div><div class="form-notch-trailing"></div></div><kpm-button style="position: relative !important; z-index: 3 !important;" class="jYwCKXeG1NQk9WXqAtIT kpm_input-field-button kpm_gray-key-icon"><div class="YaUcSL9pZJkawAbwG9cF" style="position: absolute !important; width: 32px !important; height: 24px !important; top: -34.1094px !important; left: 149px !important;"><svg class="J6MDbAOqISHJlMVCHWAE" viewBox="25 25 50 50" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style="inset: 0px 4px !important;"><circle cx="50" cy="50" r="20"></circle></svg></div><svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink" class="h9pVviaQm_vH3Kknq7ed kpm_reset aALDRsdsL0ZI13JpW4S6" style="position: absolute !important; width: 24px !important; height: 24px !important; top: -34.1094px !important; left: 149px !important;"><path d="M1 17.0748V6.92522C1 6.19396 1.3991 5.52099 2.04077 5.17026L10.5408 0.5243C11.1385 0.197577 11.8615 0.197577 12.4592 0.5243L20.9592 5.17026C21.6009 5.52099 22 6.19396 22 6.92522V17.0748C22 17.806 21.6009 18.479 20.9592 18.8297L12.4592 23.4757C11.8615 23.8024 11.1385 23.8024 10.5408 23.4757L2.04077 18.8297C1.3991 18.479 1 17.806 1 17.0748Z" class="x42ZoZlm9VYGazCSUyBE"></path><circle cx="11.5" cy="9.5" r="3" fill="white" stroke="white"></circle><path d="M10 9H13V18L11.5 19L10 18V9Z" fill="white"></path><path d="M12.5 8.5C12.5 9.05228 12.0523 9.5 11.5 9.5C10.9477 9.5 10.5 9.05228 10.5 8.5C10.5 7.94772 10.9477 7.5 11.5 7.5C12.0523 7.5 12.5 7.94772 12.5 8.5Z" class="x42ZoZlm9VYGazCSUyBE"></path><rect x="10" y="16" width="1" height="1" class="x42ZoZlm9VYGazCSUyBE"></rect><rect x="10" y="14" width="1" height="1" class="x42ZoZlm9VYGazCSUyBE"></rect></svg></kpm-button></div>

                                <div class="form-outline form-white mb-4">
                                    <input type="password" id="typePasswordX" class="form-control form-control-lg" v-model="password">
                                    <label class="form-label" for="typePasswordX" style="margin-left: 0px;">Password</label>
                                    <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 64px;"></div><div class="form-notch-trailing"></div></div><kpm-button style="position: relative !important; z-index: 3 !important;" class="jYwCKXeG1NQk9WXqAtIT kpm_input-field-button kpm_gray-key-icon"><div class="YaUcSL9pZJkawAbwG9cF" style="position: absolute !important; width: 32px !important; height: 24px !important; top: -34.1094px !important; left: 149px !important;"><svg class="J6MDbAOqISHJlMVCHWAE" viewBox="25 25 50 50" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style="inset: 0px 4px !important;"><circle cx="50" cy="50" r="20"></circle></svg></div><svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink" class="h9pVviaQm_vH3Kknq7ed kpm_reset aALDRsdsL0ZI13JpW4S6" style="position: absolute !important; width: 24px !important; height: 24px !important; top: -34.1094px !important; left: 149px !important;"><path d="M1 17.0748V6.92522C1 6.19396 1.3991 5.52099 2.04077 5.17026L10.5408 0.5243C11.1385 0.197577 11.8615 0.197577 12.4592 0.5243L20.9592 5.17026C21.6009 5.52099 22 6.19396 22 6.92522V17.0748C22 17.806 21.6009 18.479 20.9592 18.8297L12.4592 23.4757C11.8615 23.8024 11.1385 23.8024 10.5408 23.4757L2.04077 18.8297C1.3991 18.479 1 17.806 1 17.0748Z" class="x42ZoZlm9VYGazCSUyBE"></path><circle cx="11.5" cy="9.5" r="3" fill="white" stroke="white"></circle><path d="M10 9H13V18L11.5 19L10 18V9Z" fill="white"></path><path d="M12.5 8.5C12.5 9.05228 12.0523 9.5 11.5 9.5C10.9477 9.5 10.5 9.05228 10.5 8.5C10.5 7.94772 10.9477 7.5 11.5 7.5C12.0523 7.5 12.5 7.94772 12.5 8.5Z" class="x42ZoZlm9VYGazCSUyBE"></path><rect x="10" y="16" width="1" height="1" class="x42ZoZlm9VYGazCSUyBE"></rect><rect x="10" y="14" width="1" height="1" class="x42ZoZlm9VYGazCSUyBE"></rect></svg></kpm-button></div>

                                <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

                                <button class="btn btn-outline-light btn-lg px-5" type="submit" @click.prevent="sendData()" >ILogin</button>

                                <div class="d-flex justify-content-center text-center mt-4 pt-1">
                                    <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                                    <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                    <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                                </div>

                        </div>

                        <div>
                            <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>
                        </div>
                        <!--
                        <div v-if="loginMutation.isLoading.value">isLoading</div>
                        <div v-if="loginMutation.isError.value">isError</div>
                        <div v-if="loginMutation.isSuccess.value">isSuccess</div>
                        -->
                    </div>
                </div>
            </div>
        </div>
    </section>


</template>

<style scoped>
.gradient-custom {
    /* fallback for old browsers */
    background: #6a11cb;

    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
}
</style>
