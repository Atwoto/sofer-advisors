import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://soferadvisors.com',
  output: 'static',
  adapter: vercel(),
  trailingSlash: 'always'
});
