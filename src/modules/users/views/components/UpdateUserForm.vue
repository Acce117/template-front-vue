<script setup lang="ts">
import VInput from '@/common/components/VInput.vue';
import Button from 'primevue/button';
import { Form } from 'vee-validate';
import { UserModel } from '../../classes/user';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { locales } from '../../locales/locales';

const { t } = useI18n(locales);

const props = defineProps({
    element: {
        type: UserModel,
        required: true
    }
});

const schema = UserModel.getSchema('update');
const data = ref(props.element);
</script>

<template>
    <Form :validation-schema="schema" v-slot="{ meta, errors }" class="flex flex-col">
        <div class="mb-5">
            <VInput name="username" label="username" v-model="data.username"></VInput>
        </div>

        <div class="mb-5">
            <VInput type="email" name="email" label="email" v-model="data.email"></VInput>
        </div>

        <div class="flex flex-justify-end">
            <Button>{{ t(`dashboard.users.modal.update`) }}</Button>
        </div>
    </Form>
</template>
