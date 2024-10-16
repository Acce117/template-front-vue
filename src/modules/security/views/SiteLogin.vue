<script setup lang="ts">
import 'vue-i18n';
import { authController } from '../controllers/authController';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button';

</script>

<template>
    <form action="" @submit.prevent="authController.sendRequestTools.sendRequest()">
        <FloatLabel variant="on">
            <InputText id="in_username" v-model="authController.credentials.username"></InputText>
            <label for="in_username">{{ $t('login.user') }}</label>
        </FloatLabel>
        <FloatLabel variant="on">
            <InputText id="in_password" type="password" v-model="authController.credentials.password"></InputText>
            <label for="in_password">{{ $t('login.password') }}</label>
        </FloatLabel>
        <h1>{{ authController.sendRequestTools.loading }}</h1>
        <Button type="submit">{{ $t('login.login') }}</Button>
    </form>
</template>