<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

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
    <div class="card">
        <DataTable stripedRows style="min-width: 75rem;" v-bind="{ ...$attrs }">
            <Column v-for="column of model" :field="column.field" :header="column.header">
            </Column>
            
            <Column :header="actions_header">
                <template #body="{ data }">
                    <slot name="actions" :data ></slot>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<style scoped>
.card {
    align-items: center;
    overflow: auto;
}

.btn {
    border-radius: 10px;
}
</style>