import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
    site: 'https://anyelolol.github.io', // importante para GitHub Pages
    base: '/', // o '/Anyelolol.github.io' si usas repo no-root

    integrations: [react()],

    output: 'static'
});

