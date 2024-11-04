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
    <Form :validation-schema="UserModel.getSchema()" v-slot="{ meta, errors }">
        <VInput name="username" label="username" class="create_input"></VInput>

        <VInput type="email" name="email" label="email" class="create_input"></VInput>

        <VInput type="password" name="password" label="password" class="create_input"></VInput>

        <div class="actions">
            <Button type="submit">{{ $t('management.users.create_modal.action') }}</Button>
        </div>
    </Form>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}

.create_input {
    margin-bottom: 27px;
}

.actions {
    display: flex;
    justify-content: end;
}
</style>