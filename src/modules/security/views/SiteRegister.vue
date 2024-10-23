<script setup lang="ts">
import 'vue-i18n';
import { useI18n } from 'vue-i18n';
import Button from 'primevue/button';
import { Form } from 'vee-validate';
import VInput from '@/common/components/VInput.vue';
import { registerController } from '../controllers/authController';
import { userSchema } from '../schemas/user.schema';

defineExpose({
    header: useI18n().t('auth.register.header')
})
</script>

<template>
    <Form action="" @submit.prevent="registerController.sendRequestTools.sendRequest()" :validation-schema="userSchema">
        <VInput v-model="registerController.credentials.username" :label="$t('auth.user')" class="auth_input" name="username"></VInput>
        <VInput type="password" v-model="registerController.credentials.password" :label="$t('auth.password')" class="auth_input" name="password"></VInput>

        <RouterLink :to="'/login'">{{ $t('auth.register.account') }}</RouterLink>
        <Button type="submit">{{ $t('auth.register.register') }}</Button>
    </Form>
</template>

<style scoped src="./styles/index.css"></style>