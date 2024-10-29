<script setup lang="ts">
import 'vue-i18n';
import { useI18n } from 'vue-i18n';
import Button from 'primevue/button';
import { Form } from 'vee-validate';
import VInput from '@/common/components/VInput.vue';
import { loginController } from '../controllers/authController';
import { userSchema } from '../../users/schemas/user.schema';

defineExpose({
    header: useI18n().t('auth.login.header')
})
</script>

<template>
    <Form @submit="loginController.sendRequestTools.sendRequest()" :validation-schema="userSchema">
        <VInput v-model="loginController.credentials.username" :label="$t('auth.user')" class="auth_input" :name="'username'"></VInput>
        <VInput type="email" :label="'email'" class="auth_input" :name="'email'"></VInput>
        <VInput type="password" v-model="loginController.credentials.password" :label="$t('auth.password')" class="auth_input" :name="'password'"></VInput>
        
        <RouterLink :to="'/register'">{{ $t('auth.login.not_account') }}</RouterLink>
        <Button type="submit">{{ $t('auth.login.login') }}</Button>
    </Form>
</template>

<style scoped src="./styles/index.css"></style>