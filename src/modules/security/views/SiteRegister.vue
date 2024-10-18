<script setup lang="ts">
import 'vue-i18n';
import { registerController } from '../controllers/authController';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button';

defineExpose({
    header: 'Register'
})
</script>

<template>
    <form action="" @submit.prevent="registerController.sendRequestTools.sendRequest()">
        <FloatLabel variant="on" class="auth_input">
            <InputText id="in_username" v-model="registerController.credentials.username"></InputText>
            <label for="in_username">{{ $t('auth.user') }}</label>
        </FloatLabel>
        <FloatLabel variant="on" class="auth_input">
            <InputText id="in_password" type="password" v-model="registerController.credentials.password"></InputText>
            <label for="in_password">{{ $t('auth.password') }}</label>
        </FloatLabel>
        <RouterLink :to="'/login'">{{ $t('auth.register.account') }}</RouterLink>
        <Button type="submit">{{ $t('auth.register.register') }}</Button>
    </form>
</template>

<style scoped src="./styles/index.css"></style>