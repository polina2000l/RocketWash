<template>
    <div class="container auth">
        <form class="auth-form">
            <h2>{{this.info}}</h2>
            <label for="email">Почта</label>
            <input type="text" id="email" class="auth-input">
            <label for="password">Пароль</label>
            <input type="password" id="password"  class="auth-input">
            <button  class="auth-input" @click = "authorization()">Войти</button>
        </form>
    </div>
</template>

import axios from 'axios'

<script>
    export default {
    "name": "Auth",
    beforeCreate: function() {
    document.body.className = 'auth';
     },  
    data() {
        return {
            userId: null,
            username: null,
            password: null,
            correct: false
        }
    },
    methods: {
        authorization() {
            const params = {
                name: this.username, password: this.password
            }
            axios.post('/user', params)
            .then(response => this.checkCorrect(response.data.userId))
        },
        checkCorrect(data){
            alert(data)
            if(data !== -1)
            {
                this.userId = data
                this.correct = true
                this.$router.push('MainPage')
                this.info = "Успешный вход"
                localStorage.userId = this.userId;
            }
            else
            {
                this.info = "Неверные данные, повторите попытку"
            }
            console.log(this.correct)
        }
    },
    mounted(){
        if (localStorage.userId) {
            this.userId = localStorage.userId;
        }
    }
}
</script>

<style>
.auth {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.auth-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.auth-input {
    max-width: 300px;
}

input {
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 5px;
    border: 2px solid #6081c0
}

button {
    padding: 8px;
    background: #6081c0;
    border-radius: 5px;
    border: 2px solid #6081c0;
    color: #ebf1f3;
}

label,
button {
    font-size: 1.25rem;
}
</style>