<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const props = defineProps({
    dataKey: String,
    columns: {
        required: true,
        type: Array<any>
    },
});

</script>

<template>
    <div class="card">
        <DataTable :value="null" stripedRows style="min-width: 75rem;" :dataKey="props.dataKey">
            <Column v-for="column of props.columns" :field="column.field" :header="column.header"></Column>
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