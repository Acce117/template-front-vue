<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';

const props = defineProps({
    model: {
        required: true,
        type: Array<{ header: string, field: string }>
    },
    actions: {
        type: Boolean,
        default: true
    },
    actions_header: {
        type: String,
        default: 'actions'
    }
});

</script>

<template>
    <div class="overflow-auto">
        <DataTable stripedRows v-bind="{ ...$attrs }">
            <template #header>
                <div class="flex flex-justify-between">
                    <InputText placeholder="Keyword Search" />
                    <slot name="header_actions"></slot>
                </div>
            </template>
            <Column v-for="column of model" :field="column.field" :header="column.header">
            </Column>

            <Column :header="actions_header">
                <template #body="{ data }">
                    <slot name="actions" :data></slot>
                </template>
            </Column>
        </DataTable>
    </div>
</template>
