const socket = io();
new Vue({
    el: '#app',
    data: {
        step: 'Roberto',
        nick: null,
        message: null,
        messages: []
    },
    methods:{
        send(){
            socket.emit('chat-message',{
                nick: this.nick,
                message: this.message,
                date: new Date().getTime()
            });
            this.message = null
        }, 
        sigIn(){
            if(!this.nick){
                return;
            }
            this.step = 'chat';
        }
    },
    mounted(){
        socket.on('chat-message',(msg) => {
            this.messages.push(msg);

            setTimeout(() => {
                const chatContainer = document.querySelector(".chat-container");
                chatContainer.scrollTop = chatContainer.scrollHeight;
            },10);
        });
    }
});