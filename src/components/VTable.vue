<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button'
import useEvents from '@/common/utils/GlobalEventManager';
import { ref } from 'vue';
import { VueElement } from 'vue';

const props = defineProps({
    //controller: Object,
    cb: Function,
    // form: {
    //     type: {
    //         component: VueElement,
    //         header: String
    //     }
    // },
    dataKey: String,
    columns: {
        required: true,
        type: Array<any>
    },
    edition: {
        type: Boolean,
        default: true
    },
    // deletion: {
    //     type: Boolean,
    //     default: true
    // }
});

// const { response } = props.controller.getElements();
// const editingRows = ref(!props.edition);

// function create() {
//     new useEvents().dispatch('showDialog', props.form);
//     console.log('Crear');
// }

// function edit(event){
//     props.controller.edit(event.newData);
// }
</script>

<template>
    <div class="card">
        <DataTable 
        :value="null"
        stripedRows
        tableStyle="min-width: 70rem"
        :dataKey="props.dataKey"
        @row-edit-save="()=>{}"
        >
        <Column v-for="column of props.columns" :field="column.field" :header="column.header"></Column>
            <!--Column>
                <template #header>
                    <Button class="btn" @click="create">
                        {{$t('table.create')}}
                        <i class="icon ion-plus"></i>
                    </Button>
                </template>
            </Column>
            <slot></slot-->
            <!--Column v-if="props.edition" :rowEditor="true" style="width: 10%; min-width: 8rem" bodyStyle="text-align:center"></Column>
            <Column v-if="props.deletion" header="">
                <template #body="slotProps">
                    <Button severity="danger" class="btn" @click="()=>{}">
                        <i class="icon ion-close"></i>
                    </Button>
                </template>
            </Column-->
        </DataTable>
    </div>
</template>

<style scoped>
.card{
    align-items: center;
    overflow: auto;
}

.btn{
    border-radius: 10px;
}
</style>