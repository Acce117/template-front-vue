<script setup lang="ts">
import VInput from '@/common/components/VInput.vue';
import Button from 'primevue/button';
import { Form } from 'vee-validate';
import { userSchema } from '../schemas/user.schema';
import VDialog from '@/components/VDialog.vue';

const props = defineProps({
    submitCb: {
        type: Function,
        default: ()=>{}
    }
});

defineEmits([])
</script>

<template>
    <!-- <VDialog :title="$t('management.users.create')"> -->
        <Form :validation-schema="userSchema">
            <VInput name="username" label="username" class="create_input"></VInput>
            
            <VInput type="email" name="email" label="email" class="create_input"></VInput>
            
            <VInput type="password" name="password" label="password" class="create_input"></VInput>
    
            <div class="actions">
                <Button type="submit">{{ $t('management.users.create_modal.action') }}</Button>
            </div>
        </Form>
    <!-- </VDialog> -->
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