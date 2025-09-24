import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue'; // Import the Vue plugin

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
        vue(), // Add the Vue plugin here
    ],
     resolve: {
            alias: {
                vue: 'vue/dist/vue.esm-bundler.js', // Important for resolving Vue correctly
            },
    },
});
