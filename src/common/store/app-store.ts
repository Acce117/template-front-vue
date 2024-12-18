import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore('app', () => {
    const darkMode = ref(isDark());

    function toggleDarkMode() {
        darkMode.value = document.documentElement.classList.toggle('app-dark');
    }

    function isDark() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    if(isDark())
        toggleDarkMode();

    return { toggleDarkMode, darkMode };
})