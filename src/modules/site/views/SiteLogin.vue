<script setup lang="ts">
import 'vue-i18n';
import {useLogin} from '../useLogin';

const {
    credentials,
    sendRequest
} = useLogin();

</script>

<template>
    <form action="" @submit.prevent="sendRequest()">
        <label for="">
            {{ $t('login.user') }}
            <input type="text" v-model="credentials.username">
        </label>
        <label for="">
            {{ $t('login.password') }}
            <input type="password" v-model="credentials.password">
        </label>
        <button>{{ $t('login.login') }}</button>
    </form>
</template>