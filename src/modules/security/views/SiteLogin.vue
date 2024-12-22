<script setup lang="ts">
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
        <VInput v-model="loginController.credentials.username" :label="$t('auth.user')" :name="'username'"></VInput>
        <VInput type="password" v-model="loginController.credentials.password" :label="$t('auth.password')" :name="'password'"></VInput>

        <Divider />
        <div class="flex flex-align-center flex-justify-between flex-wrap">
            <ul class="mr-3 flex flex-col flex-justify-center">
                <li>
                    <RouterLink :to="'/restore_password'">{{ $t('auth.login.forgotten_password') }}</RouterLink>
                </li>
                <li>
                    <RouterLink :to="'/register'">{{ $t('auth.login.not_account') }}</RouterLink>
                </li>
            </ul>
            <div class="flex flex-col flex-justify-center flex-grow mt-3 mb-3">
                <Button type="submit" class="w-33">{{ $t('auth.login.login') }}</Button>
            </div>
        </div>

    </Form>
</template>