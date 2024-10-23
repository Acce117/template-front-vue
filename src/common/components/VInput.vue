<script setup lang="ts">
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import { ErrorMessage, Field } from 'vee-validate';

const props = defineProps({
    label: String,
    name: {
        type: String,
        required: true,
    }
});

const model = defineModel();
</script>

<template>
    <div>
        <ErrorMessage :name="props.name" />
        <FloatLabel variant="on" class="float_label">
            <Field v-model="model" :name="props.name">
                <InputText v-model="model" v-bind="{ ...$attrs }"></InputText>
            </Field>
            <label for="">{{ props.label }}</label>
        </FloatLabel>
    </div>
</template>

<style scoped>
.float_label {
    margin: 5px 0;
}

input {
    width: 100%;
}
</style>