<script setup lang="ts">
import 'vue-i18n';
import { loginController } from '../controllers/authController';
import Button from 'primevue/button';
import VInput from '@/common/components/VInput.vue';
import { userSchema } from '../schemas/user.schema';
import { ErrorMessage, Form } from 'vee-validate';

defineExpose({
    header: 'Login'
})
</script>

<template>
    <Form action="" @submit.prevent="loginController.sendRequestTools.sendRequest()" :validation-schema="userSchema">
        <VInput v-model="loginController.credentials.username" :label="$t('auth.user')" class="auth_input" :name="'username'"></VInput>
        <VInput type="password" v-model="loginController.credentials.password" :label="$t('auth.password')" class="auth_input" :name="'password'"></VInput>
        
        <RouterLink :to="'/register'">{{ $t('auth.login.not_account') }}</RouterLink>
        <Button type="submit">{{ $t('auth.login.login') }}</Button>

    </Form>
</template>

<style scoped src="./styles/index.css"></style>