<script setup lang="ts">
import Menubar from 'primevue/menubar';
import LanguageSelector from './LanguageSelector.vue';
import Button from 'primevue/button';
import { useAppStore } from '@/common/store/app-store';

const appStore = useAppStore();
const props = defineProps({})
</script>

<template>
    <Menubar>
        <template #start>
            <h2>{{ $t('nav_bar.header') }}</h2>
        </template>
        <template #end>
            <div class="flex flex-items-center">
                
                <Button @click="appStore.toggleDarkMode" unstyled class="border-none bg-transparent mr-3 ml-3">
                    <svg v-if="!appStore.darkMode" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                        viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="none" />
                        <g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                            <path stroke-dasharray="2" stroke-dashoffset="2" d="M12 19v1M19 12h1M12 5v-1M5 12h-1">
                                <animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s"
                                    values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1" />
                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s"
                                    values="2;0" />
                                </path>
                                <path stroke-dasharray="2" stroke-dashoffset="2"
                                d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5">
                                <animate fill="freeze" attributeName="d" begin="0.8s" dur="0.2s"
                                    values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5" />
                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s"
                                    values="2;0" />
                            </path>
                            <animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate"
                                values="0 12 12;360 12 12" />
                        </g>
                        <mask id="lineMdMoonFilledAltToSunnyFilledLoopTransition0">
                            <circle cx="12" cy="12" r="12" fill="#fff" />
                            <circle cx="18" cy="6" r="12" fill="#fff">
                                <animate fill="freeze" attributeName="cx" dur="0.4s" values="18;22" />
                                <animate fill="freeze" attributeName="cy" dur="0.4s" values="6;2" />
                                <animate fill="freeze" attributeName="r" dur="0.4s" values="12;3" />
                            </circle>
                            <circle cx="18" cy="6" r="10">
                                <animate fill="freeze" attributeName="cx" dur="0.4s" values="18;22" />
                                <animate fill="freeze" attributeName="cy" dur="0.4s" values="6;2" />
                                <animate fill="freeze" attributeName="r" dur="0.4s" values="10;1" />
                            </circle>
                        </mask>
                        <circle cx="12" cy="12" r="10" mask="url(#lineMdMoonFilledAltToSunnyFilledLoopTransition0)"
                            fill="#000">
                            <animate fill="freeze" attributeName="r" dur="0.4s" values="10;6" />
                        </circle>
                    </svg>

                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="none" />
                        <g fill="none" stroke="#e0e0e0" stroke-dasharray="4" stroke-dashoffset="4"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5">
                                <animate id="lineMdSunnyFilledLoopToMoonFilledAltLoopTransition0" fill="freeze"
                                    attributeName="stroke-dashoffset"
                                    begin="0.6s;lineMdSunnyFilledLoopToMoonFilledAltLoopTransition0.begin+6s" dur="0.4s"
                                    values="4;0" />
                                <animate fill="freeze" attributeName="stroke-dashoffset"
                                    begin="lineMdSunnyFilledLoopToMoonFilledAltLoopTransition0.begin+2s;lineMdSunnyFilledLoopToMoonFilledAltLoopTransition0.begin+4s"
                                    dur="0.4s" values="4;0" />
                                <animate fill="freeze" attributeName="stroke-dashoffset"
                                    begin="lineMdSunnyFilledLoopToMoonFilledAltLoopTransition0.begin+1.2s;lineMdSunnyFilledLoopToMoonFilledAltLoopTransition0.begin+3.2s;lineMdSunnyFilledLoopToMoonFilledAltLoopTransition0.begin+5.2s"
                                    dur="0.4s" values="0;4" />
                                <set fill="freeze" attributeName="d"
                                    begin="lineMdSunnyFilledLoopToMoonFilledAltLoopTransition0.begin+1.8s"
                                    to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5" />
                                <set fill="freeze" attributeName="d"
                                    begin="lineMdSunnyFilledLoopToMoonFilledAltLoopTransition0.begin+3.8s"
                                    to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5" />
                                <set fill="freeze" attributeName="d"
                                    begin="lineMdSunnyFilledLoopToMoonFilledAltLoopTransition0.begin+5.8s"
                                    to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5" />
                            </path>
                            <path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5">
                                <animate id="lineMdSunnyFilledLoopToMoonFilledAltLoopTransition1" fill="freeze"
                                    attributeName="stroke-dashoffset"
                                    begin="1s;lineMdSunnyFilledLoopToMoonFilledAltLoopTransition1.begin+6s" dur="0.4s"
                                    values="4;0" />
                                <animate fill="freeze" attributeName="stroke-dashoffset"
                                    begin="lineMdSunnyFilledLoopToMoonFilledAltLoopTransition1.begin+2s;lineMdSunnyFilledLoopToMoonFilledAltLoopTransition1.begin+4s"
                                    dur="0.4s" values="4;0" />
                                <animate fill="freeze" attributeName="stroke-dashoffset"
                                    begin="lineMdSunnyFilledLoopToMoonFilledAltLoopTransition1.begin+1.2s;lineMdSunnyFilledLoopToMoonFilledAltLoopTransition1.begin+3.2s;lineMdSunnyFilledLoopToMoonFilledAltLoopTransition1.begin+5.2s"
                                    dur="0.4s" values="0;4" />
                                <set fill="freeze" attributeName="d"
                                    begin="lineMdSunnyFilledLoopToMoonFilledAltLoopTransition1.begin+1.8s"
                                    to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5" />
                                <set fill="freeze" attributeName="d"
                                    begin="lineMdSunnyFilledLoopToMoonFilledAltLoopTransition1.begin+3.8s"
                                    to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5" />
                                <set fill="freeze" attributeName="d"
                                    begin="lineMdSunnyFilledLoopToMoonFilledAltLoopTransition1.begin+5.8s"
                                    to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5" />
                            </path>
                            <path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5">
                                <animate id="lineMdSunnyFilledLoopToMoonFilledAltLoopTransition2" fill="freeze"
                                    attributeName="stroke-dashoffset"
                                    begin="2.8s;lineMdSunnyFilledLoopToMoonFilledAltLoopTransition2.begin+6s" dur="0.4s"
                                    values="4;0" />
                                <animate fill="freeze" attributeName="stroke-dashoffset"
                                    begin="lineMdSunnyFilledLoopToMoonFilledAltLoopTransition2.begin+2s" dur="0.4s"
                                    values="4;0" />
                                <animate fill="freeze" attributeName="stroke-dashoffset"
                                    begin="lineMdSunnyFilledLoopToMoonFilledAltLoopTransition2.begin+1.2s;lineMdSunnyFilledLoopToMoonFilledAltLoopTransition2.begin+3.2s"
                                    dur="0.4s" values="0;4" />
                                <set fill="freeze" attributeName="d"
                                    begin="lineMdSunnyFilledLoopToMoonFilledAltLoopTransition2.begin+1.8s"
                                    to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5" />
                                <set fill="freeze" attributeName="d"
                                    begin="lineMdSunnyFilledLoopToMoonFilledAltLoopTransition2.begin+5.8s"
                                    to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5" />
                            </path>
                        </g>
                        <g fill="none" stroke="#e0e0e0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                            <g>
                                <path stroke-dasharray="2" stroke-dashoffset="4" d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;2" />
                                </path>
                                <path stroke-dasharray="2" stroke-dashoffset="4"
                                    d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s"
                                        values="4;2" />
                                </path>
                                <set fill="freeze" attributeName="opacity" begin="0.5s" to="0" />
                            </g>
                            <path fill="#e0e0e0"
                            d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
                            opacity="0">
                            <set fill="freeze" attributeName="opacity" begin="0.5s" to="1" />
                            </path>
                        </g>
                        <mask id="lineMdSunnyFilledLoopToMoonFilledAltLoopTransition3">
                            <circle cx="12" cy="12" r="12" fill="#fff" />
                            <circle cx="22" cy="2" r="3" fill="#fff">
                                <animate fill="freeze" attributeName="cx" begin="0.1s" dur="0.4s" values="22;18" />
                                <animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6" />
                                <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="3;12" />
                            </circle>
                            <circle cx="22" cy="2" r="1">
                                <animate fill="freeze" attributeName="cx" begin="0.1s" dur="0.4s" values="22;18" />
                                <animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6" />
                                <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="1;10" />
                            </circle>
                        </mask>
                        <circle cx="12" cy="12" r="6" mask="url(#lineMdSunnyFilledLoopToMoonFilledAltLoopTransition3)"
                            fill="#e0e0e0">
                            <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="6;10" />
                            <set fill="freeze" attributeName="opacity" begin="0.5s" to="0" />
                        </circle>
                    </svg>
                </Button>
                
                <LanguageSelector></LanguageSelector>

                <slot name="avatar"></slot>
            </div>
        </template>
    </Menubar>
</template>