<script setup lang="ts">
import 'vue-i18n';
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
        <div class="buttons_section">
            <div>
                <RouterLink :to="'/login'">{{ $t('auth.register.account') }}</RouterLink>
            </div>
            <div>
                <Button type="submit" size="small">{{ $t('auth.register.register') }}</Button>
            </div>
        </div>
    </Form>
</template>

<style scoped src="./styles/auth.css"></style>