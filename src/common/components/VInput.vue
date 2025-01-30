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
        <Field v-model="model" :name="props.name">
            <FloatLabel variant="on" class="mt-2">
                <InputText v-model="model" v-bind="{ ...$attrs }" class="w-100%"></InputText>
                <label for="">{{ props.label }}</label>
            </FloatLabel>
            <Transition name="fade">
                <ErrorMessage :name="props.name" class="color-red-700"/>
            </Transition>
        </Field>
    </div>
</template>

<style scoped>
.fade-enter-active {
  transition: all 0.15s ease-out;
}

.fade-leave-active {
  transition: all 0.15s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>