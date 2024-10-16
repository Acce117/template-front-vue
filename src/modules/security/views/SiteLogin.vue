<script setup lang="ts">
import 'vue-i18n';
import { useAuth } from '../controllers/useLogin';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';

const {
    credentials,
    sendRequest
} = useAuth('login');

</script>

<template>
    <form action="" @submit.prevent="sendRequest()">
        <FloatLabel variant="on">
            <InputText id="in_username" v-model="credentials.username"></InputText>
            <label for="in_username">{{ $t('login.user') }}</label>
        </FloatLabel>
        <FloatLabel variant="on">
            <InputText id="in_password" type="password" v-model="credentials.password"></InputText>
            <label for="in_password">{{ $t('login.password') }}</label>
        </FloatLabel>
    </form>
</template>