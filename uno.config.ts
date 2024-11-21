import { defineConfig, presetAttributify, presetUno } from 'unocss';

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
    ],
    content: {
        pipeline: {
            include: [
                "./index.html",
                "./src/**/*.{vue,js,ts,jsx,tsx}",
                "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}"
            ]
        }
    }
});