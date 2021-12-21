<template>
    <div class="container register">
        <form class="register-form">
            <label for="email">Почта</label>
            <input type="text" id="email" class="register-input">
            <label for="password">Пароль</label>
            <input type="password" id="password"  class="register-input">
            <label for="password-rep">Подтвердите пароль</label>
            <input type="password" id="password-rep"  class="register-input">
            <button  class="register-input">Зарегистрироваться</button>
        </form>
    </div>
</template>

<script>
    export default {
        "name": "Register"
    }
</script>

<style>
.register {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.register-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.register-input {
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