<script setup lang="ts">
import 'vue-i18n';
import { registerController } from '../controllers/authController';
import Button from 'primevue/button';
import VInput from '@/common/components/VInput.vue';

defineExpose({
    header: 'Register'
})
</script>

<template>
    <form action="" @submit.prevent="registerController.sendRequestTools.sendRequest()">
        <VInput v-model="registerController.credentials.username" :label="$t('auth.user')" class="auth_input"></VInput>
        <VInput type="password" v-model="registerController.credentials.password" :label="$t('auth.password')" class="auth_input"></VInput>
        
        <RouterLink :to="'/login'">{{ $t('auth.register.account') }}</RouterLink>
        <Button type="submit">{{ $t('auth.register.register') }}</Button>
    </form>
</template>

<style scoped src="./styles/index.css"></style>