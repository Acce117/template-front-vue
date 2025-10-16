<script setup lang="ts">
import ConfirmDialog from "primevue/confirmdialog";
import { useConfirm } from "primevue/useconfirm";
import { useI18n } from "vue-i18n";

const confirm = useConfirm();
const i18n = useI18n();
const emit = defineEmits(['accept', 'reject']);

const showConfirm = () => {
    confirm.require({
        message: i18n.t('dashboard.dialogs.delete.message'),
        header: i18n.t('dashboard.delete'),
        // icon: 'pi pi-info-circle',
        rejectProps: {
            label: i18n.t('actions.cancel'),
            severity: 'secondary',
            outlined: true
        },
        acceptProps: {
            label: i18n.t('dashboard.delete'),
            severity: 'danger'
        },
        accept: () => emit('accept'),
        reject: () => emit('reject')
    });
};

defineExpose({
    showConfirm
})
</script>

<template>
    <ConfirmDialog></ConfirmDialog>
</template>
