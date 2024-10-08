<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import VMenu from '@/components/VMenu.vue';
import { reactive } from 'vue';

const items = reactive([
    {
        label: 'Users',
        route: '/management/users'
    }
])
</script>

<template>
    <NavBar></NavBar>
    <div id="dashboard">
        <section id="menu">
            <VMenu :model="items"></VMenu>
        </section>
        <section id="workspace">
            <RouterView></RouterView>
        </section>
    </div>
</template>

<style scoped>
#dashboard {
    display: flex;
    height: 88vh;
}

section {
    display: flex;
    margin: 0 20px;
}

#menu {
    justify-content: center;
}

#workspace {
    justify-content: center;
    width: 85%;
}
</style>