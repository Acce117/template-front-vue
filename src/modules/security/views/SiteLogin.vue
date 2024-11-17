<script setup lang="ts">
import 'vue-i18n';
import Button from 'primevue/button';
import { Form } from 'vee-validate';
import VInput from '@/common/components/VInput.vue';
import { loginController } from '../controllers/authController';
import { UserModel } from '@/modules/users/classes/user';
import Divider from 'primevue/divider';

defineExpose({
    header: 'auth.login.header'
})
</script>

<template>
    <Form @submit="loginController.sendRequestTools.sendRequest()" :validation-schema="UserModel.getSchema('login')">
        <VInput v-model="loginController.credentials.username" :label="$t('auth.user')" class="auth_input" :name="'username'"></VInput>
        <VInput type="password" v-model="loginController.credentials.password" :label="$t('auth.password')" class="auth_input" :name="'password'"></VInput>

        <Divider />
        <div class="buttons_section">
            <div>
                <RouterLink :to="'/restore_password'">{{ $t('auth.login.forgotten_password') }}</RouterLink>
                <RouterLink :to="'/register'">{{ $t('auth.login.not_account') }}</RouterLink>
            </div>
            <div>
                <Button type="submit" size="small">{{ $t('auth.login.login') }}</Button>
            </div>
        </div>

    </Form>
</template>

<style scoped src="./styles/auth.css"></style>