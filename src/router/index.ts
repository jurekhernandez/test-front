import {createRouter, createWebHistory} from 'vue-router';
import LibrosPages from "../libros/LibrosPages.vue";
import TagPages from "../tags/TagPages.vue";
import LoginPage from "../login/LoginPage.vue";
import HomePage from "../shared/pages/HomePage.vue";
import LayoutBase from "../shared/LayoutBase.vue";
import {useLoginStore} from "../store/Login";
import ListPage from "../autores/Pages/ListPage.vue";
import AutorPage from "../autores/Pages/AutorPage.vue";
import AutoresLayout from "../autores/Layout/AutoresLayout.vue";

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/login',
            name:'login',
            component:LoginPage
        },
        {
            path:'/',
            name:'dentro',
            component:LayoutBase,
            redirect:{name:'home'},
            children:[
                {
                    path:'/home',
                    name:'home',
                    component:HomePage
                },
                {
                    path:'/autor',
                    name:'autor',
                   // component:AutoresLayout,  // no es necesario generar un layout
                    redirect:{name:'autor-list'},
                    children:[
                        {path:'list', name:'autor-list', component:ListPage },
                       // {path:'/autor/:id', name:'autor-id', component:AutorPage },
                    ]
                },
                {
                    path:'/libro',
                    name:'libro',
                    component:LibrosPages
                },
                {
                    path:'/tag',
                    name:'tag',
                    component:TagPages
                },
            ],
        },

        {path:'/:pathMatch(.*)*',redirect: ()=>({name:'home'})}
    ]
}, )

router.beforeEach( (ruta)=>{
    const information = useLoginStore();
    if(information.myNombre=="Invitado" && information.myToken==''){
        console.log("eres invitado");
        if(ruta.path=='/login')
            return;

        console.log("necesitar logear");
        router.push('/login');
        return;
    }
    if(ruta.path=='/login'){
        router.push('/home');
        return;
    }



    /*if (window.localStorage) {
        if(window.localStorage.getItem('token') === undefined  ||  window.localStorage.getItem('token') ==null ) {
            if(ruta.path=='/login')
                return;
            console.log("necesitar logear");
            router.push('/login');
            return;
        }
        if(ruta.path=='/login'){
            router.push('/home');
            return;
        }
    }*/
})

export default router;
