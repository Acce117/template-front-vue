<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
import type { MenuItem } from 'primevue/menuitem';
import { useI18n } from 'vue-i18n';

const i18n = useI18n();

const props = defineProps({
    items: {
        type: Array<MenuItem>
    }
})

const model = ref([{ label: () => i18n.t('options'), items: props.items }]);

const router = useRouter();

const menu = ref();

function toggle(event: any) {
    menu.value.toggle(event);
}
</script>

<template>
    <Avatar label="P" size="large" shape="circle" @click="toggle" />
    <Menu ref="menu" id="overlay_menu" :model :popup="true" />
</template>