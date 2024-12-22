<script setup lang="ts">
import Button from 'primevue/button';
import { Form } from 'vee-validate';
import VInput from '@/common/components/VInput.vue';
import { registerController } from '../controllers/authController';
import { UserModel } from '@/modules/users/classes/user';
import Divider from 'primevue/divider';

defineExpose({
    header: 'auth.register.header'
})
</script>

<template>
    <Form action="" @submit.prevent="registerController.sendRequestTools.sendRequest()"
        :validation-schema="UserModel.getSchema('register')">
        <VInput v-model="registerController.credentials.username" :label="$t('auth.user')" class="auth_input" name="username"></VInput>
        <VInput type="password" v-model="registerController.credentials.password" :label="$t('auth.password')" class="auth_input" name="password"></VInput>

        <Divider />
        <div class="flex flex-align-center flex-justify-between flex-wrap">
            <ul class="mr-3 flex flex-col flex-justify-center">
                <li>
                    <RouterLink :to="'/login'">{{ $t('auth.register.account') }}</RouterLink>
                </li>
            </ul>
            <div class="flex flex-col flex-justify-center flex-grow mt-3 mb-3">
                <Button type="submit" class="w-30">{{ $t('auth.register.register') }}</Button>
            </div>
        </div>
    </Form>
</template>