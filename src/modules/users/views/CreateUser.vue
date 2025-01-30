<script setup lang="ts">
import VInput from '@/common/components/VInput.vue';
import Button from 'primevue/button';
import { Form } from 'vee-validate';
import { UserModel } from '../classes/user';

const props = defineProps({
    submitCb: {
        type: Function,
        default: () => { }
    }
});

defineEmits([])
</script>

<template>
    <Form :validation-schema="UserModel.getSchema()" v-slot="{ meta, errors }" class="flex flex-col">
        <div class="mb-5">
            <VInput name="username" label="username" class="create_input"></VInput>
        </div>

        <div class="mb-5">
            <VInput type="email" name="email" label="email" class="create_input"></VInput>
        </div>

        <div class="mb-10">
            <VInput type="password" name="password" label="password" class="create_input"></VInput>
        </div>

        <div class="flex flex-justify-end">
            <Button type="submit">{{ $t('management.users.create_modal.action') }}</Button>
        </div>
    </Form>
</template>
