const socket = io();
var params = new URLSearchParams(window.location.search);

 new Vue({
    el: '#app',
    data:{
        step: 'Admin',
        nick: 'null',
        message: null,
        messages: []
    },
    methods:{
        renderizarMensajes(mensaje, personal){

        },
        renderizarUsuarios(personas){
           
        }
    },
    mounted(){
     
    }
});