<script setup lang="ts">
import 'vue-i18n';
import { loginController } from '../controllers/authController';
import Button from 'primevue/button';
import VInput from '@/common/components/VInput.vue';

defineExpose({
    header: 'Login'
})
</script>

<template>
    <form action="" @submit.prevent="loginController.sendRequestTools.sendRequest()">
        <VInput v-model="loginController.credentials.username" :label="$t('auth.user')" class="auth_input"></VInput>
        <VInput type="password" v-model="loginController.credentials.password" :label="$t('auth.password')" class="auth_input"></VInput>
        
        <RouterLink :to="'/register'">{{ $t('auth.login.not_account') }}</RouterLink>
        <Button type="submit">{{ $t('auth.login.login') }}</Button>
    </form>
</template>

<style scoped src="./styles/index.css"></style>