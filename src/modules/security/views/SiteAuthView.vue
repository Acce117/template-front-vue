<script setup lang="ts">
import Button from 'primevue/button';
import { Form } from 'vee-validate';
import VInput from '@/common/components/VInput.vue';
import { AuthController } from '../controllers/authController';
import { UserModel } from '@/modules/users/classes/user';
import Divider from 'primevue/divider';
import { useI18n } from 'vue-i18n';
import { locales } from '../locales/locales';

const { t } = useI18n(locales);

const props = defineProps({
    context: { type: Object, required: true },
})

const authController = new AuthController(props.context as { getCredentials: Function, getUrl: Function });

defineExpose({
    header: () => props.context.contextName
})
</script>

<template>
    <h1 class="mb-10">{{ t(context.contextName) }}</h1>
    <Form @submit="authController.sendRequestTools.sendRequest()" :validation-schema="UserModel.getSchema('login')">
        <div class="mb-5">
            <div class="mb-7">
                <VInput v-model="authController.credentials.username" :label="t('auth.user')" :name="'username'">
                </VInput>
            </div>
            <div class="mb-2">
                <VInput type="password" v-model="authController.credentials.password" :label="t('auth.password')"
                    :name="'password'"></VInput>
            </div>
            <div class="flex flex-justify-end">
                <RouterLink v-if="context.contextId === 'login'" :to="'/restore_password'" class="text-size-sm">{{
                    t('auth.login.forgotten_password') }}
                </RouterLink>
            </div>
        </div>
        <div class="flex flex-col flex-align-center flex-justify-between">
            <div class="flex flex-col flex-justify-center flex-grow mt-3 mb-3">
                <Button type="submit" class="mb-5">{{ t(context.button.message) }}</Button>
                <RouterLink :to="context.redirect.url">{{ t(context.redirect.message) }}</RouterLink>
            </div>
        </div>

        <Divider />
    </Form>
</template>
