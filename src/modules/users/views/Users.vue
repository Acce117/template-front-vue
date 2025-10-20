<script setup lang="ts">
import { inject, ref, type VNodeRef } from 'vue';
import Button from 'primevue/button';
import VTable from '@/common/components/VTable.vue';
import VDialog from '@/common/components/VDialog.vue';
import DeleteConfirmation from '@/common/components/confirm-messages/DeleteConfirmation.vue';
import CreateUserForm from './components/CreateUserForm.vue';
import { UserModel } from '../classes/user';
import type { IService } from '@/common/classes/service';
import { useI18n } from 'vue-i18n';
import { locales } from '../locales/locales';
import UpdateUserForm from './components/UpdateUserForm.vue';

const { t } = useI18n(locales);

const userService: IService<UserModel> = inject('USER_SERVICE')!;

const createUserModal = ref(false);

const updateUserModal = ref(false);

const deleteConfirmation = ref<VNodeRef | undefined>(undefined);

const element = ref<any>(undefined);

function handleCreateSubmit(data: any) {
    userService.createElement(data);
    createUserModal.value = false;
}

function handleUpdateSubmit(data: any) {
    userService.update(element.value.id, data);
    updateUserModal.value = false;
}
</script>

<template>
    <div class="flex flex-justify-between flex-align-center mb-5">
        <h2>{{ t('dashboard.users.title') }}</h2>
    </div>

    <VTable :model="UserModel.getColumns()" :value="userService!.getElements().response.value"
        :actions_header="t('dashboard.actions')">
        <template #header_actions>
            <Button @click="() => {
                element = null;
                createUserModal = true
            }" size="small" class="mr-20">{{ t('dashboard.users.create') }}</Button>
        </template>
        <template #actions="{ data }">
            <Button @click="() => {
                element = data;
                updateUserModal = true
            }" size="small" class="mr-2">{{ t('dashboard.update').toLowerCase() }}</Button>

            <Button @click="() => {
                element = data;
                deleteConfirmation.showConfirm()
            }" size="small" severity="danger">{{ t('dashboard.delete').toLowerCase() }}</Button>
        </template>
    </VTable>

    <DeleteConfirmation ref="deleteConfirmation" @accept="() => { if (element) userService!.delete(element.id) }" />

    <VDialog v-model:visible="createUserModal" :title="t(`dashboard.users.create`)">
        <CreateUserForm @submit="handleCreateSubmit"></CreateUserForm>
    </VDialog>

    <VDialog v-model:visible="updateUserModal" :title="t(`dashboard.users.update`)">
        <UpdateUserForm @submit="handleUpdateSubmit" :element></UpdateUserForm>
    </VDialog>
</template>
